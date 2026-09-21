import { useEffect, useState } from "react";

/**
 * Motion tokens — mirrors the CSS vars (--motion-*, --ease-out).
 * fast: hovers, toggles · normal: swaps, drawers · slow: reveals.
 * Transform/opacity only. All consumers check reduced motion first.
 */
export const MOTION = {
  durationFast: 160,
  durationBase: 240,
  durationSlow: 500,
  easeOut: "cubic-bezier(0.22, 1, 0.36, 1)",
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Reactive hook — components disable animation when true. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() => prefersReducedMotion());

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** Global kill-switch helper for future motion modules. */
export function isMotionAllowed(): boolean {
  return !prefersReducedMotion();
}
