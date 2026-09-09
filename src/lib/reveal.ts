import { useEffect } from 'react';
import type { CSSProperties } from 'react';

// Atas dilonggarkan jauh supaya elemen baru memudar keluar setelah benar-benar lewat, bukan
// saat masih terbaca di tepi atas; bawah dirapatkan supaya masuknya terasa saat mulai terlihat
const REVEAL_MARGIN = '60% 0px -12% 0px';

export function revealProps(index = 0) {
  return {
    'data-reveal': '',
    // Indeks lewat custom property supaya jeda stagger dihitung CSS, bukan JS
    style: { '--reveal-index': index } as CSSProperties,
  };
}

function showAll(elements: NodeListOf<HTMLElement>) {
  elements.forEach((element) => element.setAttribute('data-reveal', 'shown'));
}

// Satu observer untuk seluruh halaman; elemen ditandai lewat atribut, jadi tidak perlu ref per komponen
export function useRevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal=""]');
    if (!elements.length) return;

    // Dokumen tersembunyi tidak menjalankan IntersectionObserver sama sekali; tanpa jalan keluar ini
    // isi halaman akan tertinggal transparan selamanya di tab latar belakang
    if (document.hidden || !('IntersectionObserver' in window)) {
      showAll(elements);
      return;
    }

    // Tidak di-unobserve: elemen ikut memudar keluar dan masuk lagi setiap melewati viewport,
    // supaya easing terasa sepanjang halaman, bukan sekali saat muat
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.setAttribute('data-reveal', entry.isIntersecting ? 'shown' : '');
        }
      },
      { rootMargin: REVEAL_MARGIN },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}
