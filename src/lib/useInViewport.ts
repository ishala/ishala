import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

// Dokumen tersembunyi membekukan IntersectionObserver dan rAF, jadi visibilitas halaman ikut dihitung di sini
export function useInViewport<T extends Element>(ref: RefObject<T | null>, rootMargin = '0px') {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const hasObserver = 'IntersectionObserver' in window;
    let isIntersecting = !hasObserver;

    const sync = () => setIsInViewport(isIntersecting && !document.hidden);

    document.addEventListener('visibilitychange', sync);
    sync();

    if (!hasObserver) {
      return () => document.removeEventListener('visibilitychange', sync);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        isIntersecting = entries[entries.length - 1].isIntersecting;
        sync();
      },
      { rootMargin },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', sync);
    };
  }, [ref, rootMargin]);

  return isInViewport;
}
