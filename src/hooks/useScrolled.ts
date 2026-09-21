import { useEffect, useState } from "react";

/**
 * Efficient scroll-past-threshold flag.
 * - Single passive scroll listener, rAF-throttled.
 * - setState fires ONLY when the boolean flips (no per-frame re-renders).
 * - Safe for i3-4130 / HD 4400 target.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState<boolean>(() =>
    typeof window === "undefined" ? false : window.scrollY > threshold,
  );

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const next = window.scrollY > threshold;
      setScrolled((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
