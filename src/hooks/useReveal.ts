import { useEffect, useRef, useState, type CSSProperties } from 'react';

type RevealOptions = {
  threshold?: number;
  delay?: number;
};

/**
 * Attaches an IntersectionObserver-driven reveal to an element.
 *
 * Content is visible by default (no JS, reduced motion, or a slow/failed
 * observer all resolve to fully-visible). Motion is added only once we know
 * the browser supports it and the user hasn't asked to reduce motion.
 */
export function useReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const { threshold = 0.2, delay = 0 } = options;
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);
  const canAnimate =
    typeof window !== 'undefined' &&
    'IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const node = ref.current;
    if (!node || !canAnimate) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [canAnimate, threshold]);

  const className = canAnimate
    ? (revealed ? 'reveal reveal-armed reveal-in' : 'reveal reveal-armed')
    : 'reveal';
  const style = canAnimate ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined;

  return { ref, className, style };
}
