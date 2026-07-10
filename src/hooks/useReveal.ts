import { useEffect, useRef, useState } from 'react';

/**
 * Attaches an IntersectionObserver-driven reveal to an element.
 *
 * Content is visible by default (no JS, reduced motion, or a slow/failed
 * observer all resolve to fully-visible). Motion is added only once we know
 * the browser supports it and the user hasn't asked to reduce motion.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [armed, setArmed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setRevealed(true);
      return;
    }

    setArmed(true);

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
  }, [threshold]);

  const className = armed ? (revealed ? 'reveal reveal-armed reveal-in' : 'reveal reveal-armed') : 'reveal';

  return { ref, className };
}
