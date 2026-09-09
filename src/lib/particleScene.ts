import { Camera, Geometry, Mesh, Program, Renderer, Transform } from 'ogl';

const CAMERA_FOV = 35;
const CAMERA_DISTANCE = 5;
// Medan dibuat lebih lebar dari viewport supaya gelombang, scroll, dan parallax tidak menyingkap tepinya
const FIELD_SLACK = 0.6;
const MAX_POINTS = 60000;
const MIN_POINTS = 3000;
// Titik per piksel CSS viewport; kerapatan yang terlihat jadi sama dari 375px sampai 1920px
const POINT_DENSITY = 0.018;
const MAX_DPR = 2;
const MAX_FRAME_SECONDS = 0.05;
const POINTER_EASE = 0.045;
const PLASTIC_NUMBER = 1.324717957244746;
// Sebaran Roberts murni masih terbaca sebagai kisi miring; digeser acak sebesar sebagian jarak antartitik
const JITTER_SHARE = 0.75;

const vertexShader = `
precision highp float;

attribute vec2 position;
attribute vec4 seed;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec2 uSpan;
uniform vec2 uPointer;
uniform float uTime;
uniform float uScroll;
uniform float uDpr;
uniform float uJitter;

varying float vAlpha;

float waveField(vec2 p, float t) {
  float w = sin(p.x * 2.55 + t * 0.21);
  w += sin(p.y * 3.10 - t * 0.16 + p.x * 1.05);
  w += sin((p.x + p.y) * 1.95 + t * 0.12);
  w += 0.7 * sin(length(p) * 4.10 - t * 0.26);
  return w * 0.27;
}

void main() {
  vec2 field = position * uSpan + (seed.xy - 0.5) * uJitter;
  field.y += uScroll * uSpan.y * 0.10;

  float wave = waveField(field, uTime);
  float drift = waveField(field * 0.55 + vec2(9.2, 4.6), uTime * 0.63);

  // Geseran menyusuri gelombang membuat titik berkerumun di puncaknya: polanya terbaca lewat kerapatan, bukan kecerahan
  vec3 offset = vec3(drift * 0.16, wave * 0.15, wave * 0.45);
  // Dikurangi, bukan ditambah: medan bergeser melawan kursor sehingga terasa seperti menoleh
  offset.xy -= uPointer * (0.05 + 0.09 * seed.z);

  vec4 viewPosition = modelViewMatrix * vec4(vec3(field, 0.0) + offset, 1.0);
  gl_Position = projectionMatrix * viewPosition;

  float nearness = clamp(1.0 + offset.z * 0.8, 0.45, 1.3);
  float crest = smoothstep(-0.55, 0.75, wave);
  float twinkle = 0.85 + 0.15 * sin(uTime * 0.6 + seed.w * 6.2831);

  // Lembah gelombang meredup tapi tidak pernah kosong: medan tetap terbaca penuh dari tepi ke tepi
  vAlpha = (0.22 + 0.24 * crest) * (0.55 + 0.45 * seed.z) * nearness * twinkle;
  gl_PointSize = uDpr * (1.10 + 2.20 * seed.z) * (1.0 + 0.45 * crest) * (5.0 / -viewPosition.z);
}
`;

const fragmentShader = `
precision highp float;

uniform vec3 uColor;

varying float vAlpha;

void main() {
  float edge = length(gl_PointCoord - 0.5);
  float alpha = vAlpha * smoothstep(0.5, 0.12, edge);
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(uColor * alpha, alpha);
}
`;

export interface ParticleScene {
  start(): void;
  stop(): void;
  renderStill(): void;
  destroy(): void;
}

// Token warna theme.css ditulis sebagai hex 6 digit; bentuk rgb() ikut diterima agar tetap aman bila berubah
function parseColor(value: string): [number, number, number] | null {
  const hex = /^#([\da-f]{6})$/i.exec(value.trim());
  if (hex) {
    const packed = Number.parseInt(hex[1], 16);
    return [((packed >> 16) & 255) / 255, ((packed >> 8) & 255) / 255, (packed & 255) / 255];
  }

  const channels = value.match(/\d+(\.\d+)?/g);
  if (!channels || channels.length < 3) return null;
  return [Number(channels[0]) / 255, Number(channels[1]) / 255, Number(channels[2]) / 255];
}

function createRandom(initial: number) {
  let state = initial;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

// Deret Roberts: sebaran merata tanpa kisi, dan tiap prefiksnya tetap merata sehingga jumlah titik bisa dipangkas
function createPointBuffers() {
  const positions = new Float32Array(MAX_POINTS * 2);
  const seeds = new Float32Array(MAX_POINTS * 4);
  const random = createRandom(20260909);
  const stepX = 1 / PLASTIC_NUMBER;
  const stepY = 1 / (PLASTIC_NUMBER * PLASTIC_NUMBER);

  for (let i = 0; i < MAX_POINTS; i += 1) {
    positions[i * 2] = ((0.5 + stepX * i) % 1) * 2 - 1;
    positions[i * 2 + 1] = ((0.5 + stepY * i) % 1) * 2 - 1;
    for (let channel = 0; channel < 4; channel += 1) {
      seeds[i * 4 + channel] = random();
    }
  }

  return { positions, seeds };
}

function supportsWebgl() {
  const probe = document.createElement('canvas');
  const context = probe.getContext('webgl2') ?? probe.getContext('webgl');
  if (!context) return false;

  // Konteks percobaan dilepas supaya tidak memakan slot WebGL milik kanvas sungguhan
  context.getExtension('WEBGL_lose_context')?.loseContext();
  return true;
}

// Kanvasnya dibuat di sini, bukan lewat JSX: destroy() melepas konteksnya, dan konteks yang sudah
// dilepas akan tetap dikembalikan getContext bila elemen kanvasnya dipakai ulang saat remount
export function createParticleScene(host: HTMLElement): ParticleScene | null {
  const styles = getComputedStyle(host);
  const dotColor = parseColor(styles.getPropertyValue('--color-electric-cobalt'));
  const backdropColor = parseColor(styles.getPropertyValue('--color-carbon'));
  if (!dotColor || !backdropColor || !supportsWebgl()) return null;

  const canvas = document.createElement('canvas');
  canvas.style.display = 'block';
  host.append(canvas);

  const renderer = new Renderer({ canvas, alpha: false, depth: false, antialias: false });
  const gl = renderer.gl;
  gl.clearColor(backdropColor[0], backdropColor[1], backdropColor[2], 1);

  const camera = new Camera(gl, { fov: CAMERA_FOV, near: 0.1, far: 20 });
  camera.position.z = CAMERA_DISTANCE;

  const { positions, seeds } = createPointBuffers();
  const geometry = new Geometry(gl, {
    position: { size: 2, data: positions },
    seed: { size: 4, data: seeds },
  });

  const program = new Program(gl, {
    vertex: vertexShader,
    fragment: fragmentShader,
    uniforms: {
      uSpan: { value: [1, 1] },
      uPointer: { value: [0, 0] },
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uDpr: { value: 1 },
      uJitter: { value: 0 },
      uColor: { value: dotColor },
    },
    transparent: true,
    depthTest: false,
    depthWrite: false,
  });
  // Alpha biasa, bukan aditif: warna hasil selalu di antara latar dan cobalt, jadi kecerahannya punya batas atas
  program.setBlendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  const scene = new Transform();
  const mesh = new Mesh(gl, { geometry, program, mode: gl.POINTS });
  mesh.setParent(scene);

  const pointer = [0, 0];
  const pointerTarget = [0, 0];
  let elapsed = 0;
  let lastTime = 0;
  let frameId = 0;

  function scrollProgress() {
    return Math.min(window.scrollY / (window.innerHeight || 1), 1);
  }

  function draw() {
    program.uniforms.uTime.value = elapsed;
    program.uniforms.uScroll.value = scrollProgress();
    program.uniforms.uPointer.value = pointer;
    renderer.render({ scene, camera });
  }

  function resize() {
    const width = host.clientWidth;
    const height = host.clientHeight;
    if (!width || !height) return;

    renderer.dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    renderer.setSize(width, height);
    camera.perspective({ aspect: width / height });

    const halfHeight = Math.tan((CAMERA_FOV / 2) * (Math.PI / 180)) * CAMERA_DISTANCE;
    const halfWidth = halfHeight * (width / height);
    const spanX = halfWidth + FIELD_SLACK;
    const spanY = halfHeight + FIELD_SLACK;
    // Sebagian medan berada di luar layar, jadi jumlah titik dinaikkan sebesar porsi yang tidak terlihat
    const visibleShare = (halfWidth * halfHeight) / (spanX * spanY);
    const wanted = Math.round((width * height * POINT_DENSITY) / visibleShare);
    const count = Math.min(Math.max(wanted, MIN_POINTS), MAX_POINTS);

    program.uniforms.uSpan.value = [spanX, spanY];
    program.uniforms.uDpr.value = renderer.dpr;
    program.uniforms.uJitter.value = Math.sqrt((4 * spanX * spanY) / count) * JITTER_SHARE;
    geometry.setDrawRange(0, count);

    if (!frameId) draw();
  }

  function frame(now: number) {
    frameId = requestAnimationFrame(frame);
    elapsed += Math.min((now - lastTime) / 1000, MAX_FRAME_SECONDS);
    lastTime = now;

    pointer[0] += (pointerTarget[0] - pointer[0]) * POINTER_EASE;
    pointer[1] += (pointerTarget[1] - pointer[1]) * POINTER_EASE;
    draw();
  }

  function handlePointerMove(event: PointerEvent) {
    pointerTarget[0] = (event.clientX / window.innerWidth) * 2 - 1;
    pointerTarget[1] = 1 - (event.clientY / window.innerHeight) * 2;
  }

  function stop() {
    if (!frameId) return;
    cancelAnimationFrame(frameId);
    frameId = 0;
  }

  function handleContextLost(event: Event) {
    event.preventDefault();
    stop();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  window.addEventListener('pointermove', handlePointerMove, { passive: true });
  canvas.addEventListener('webglcontextlost', handleContextLost);
  resize();

  return {
    start() {
      if (frameId) return;
      lastTime = performance.now();
      frameId = requestAnimationFrame(frame);
    },
    stop,
    renderStill: draw,
    destroy() {
      stop();
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      canvas.remove();
    },
  };
}
