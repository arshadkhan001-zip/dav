import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../../utils/motion";

interface StatValueProps {
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
}

/**
 * Count-up numeral: 0 → value once when entering the viewport.
 * rAF-driven, single run, IntersectionObserver-gated.
 * Reduced motion: final value rendered immediately, no animation.
 */
export function StatValue({ value, prefix = "", suffix = "", durationMs = 1000 }: StatValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(() =>
    prefersReducedMotion() ? format(value) : format(0),
  );

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplay(format(value));
      return;
    }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - t0) / durationMs, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(format(Math.round(eased * value)));
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        }
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function format(n: number): string {
  return n.toLocaleString("en-IN");
}
