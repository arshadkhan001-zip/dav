import { useEffect, type RefObject } from "react";

function clamp01(v: number): number {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

/**
 * Reports an element's scroll-through progress (0 → 1) via callback.
 * - 0 when the element's top meets the viewport top; 1 when fully scrolled past.
 * - Single passive listener, rAF-throttled, direct callback (no re-renders).
 * - When `disabled` (e.g. prefers-reduced-motion), fires once with 0 and detaches.
 */
export function useElementScrollProgress(
  targetRef: RefObject<HTMLElement | null>,
  onUpdate: (progress: number) => void,
  disabled = false,
): void {
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;
    const updateRef = { current: onUpdate };
    updateRef.current = onUpdate;

    if (disabled) {
      onUpdate(0);
      return;
    }

    let ticking = false;
    const compute = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const total = Math.max(el.offsetHeight, 1);
      updateRef.current(clamp01(-rect.top / total));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // onUpdate intentionally read via ref — caller passes stable or inline fn.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);
}
