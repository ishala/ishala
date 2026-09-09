import { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';
import { createParticleScene } from '@/lib/particleScene';
import type { ParticleScene } from '@/lib/particleScene';
import { useInViewport } from '@/lib/useInViewport';
import { useReducedMotion } from '@/lib/useReducedMotion';

interface ParticleFieldProps {
  className?: string;
}

// Loop dinyalakan sebelum hero benar-benar terlihat, jadi medannya sudah bergerak saat muncul kembali
const WAKE_MARGIN = '25% 0px';

export function ParticleField({ className }: ParticleFieldProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<ParticleScene | null>(null);
  const isReducedMotion = useReducedMotion();
  const isInViewport = useInViewport(hostRef, WAKE_MARGIN);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Bernilai null bila konteks WebGL tidak bisa dibuat; hero lalu tampil apa adanya di atas carbon
    sceneRef.current = createParticleScene(host);

    return () => {
      sceneRef.current?.destroy();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (isReducedMotion) {
      scene.stop();
      // Satu frame diam, bukan kanvas kosong: komposisi hero tetap utuh tanpa gerakan sama sekali
      scene.renderStill();
      return;
    }

    if (!isInViewport) {
      scene.stop();
      return;
    }

    scene.start();
    return () => scene.stop();
  }, [isReducedMotion, isInViewport]);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={cn('absolute inset-0 -z-10 bg-carbon', className)}
    />
  );
}
