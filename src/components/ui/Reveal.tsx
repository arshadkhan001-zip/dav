import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cx } from "../../utils/cx";
import { prefersReducedMotion } from "../../utils/motion";
import { observeReveal } from "../../utils/revealObserver";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms — keep small (0–160). */
  delay?: number;
  as?: "div" | "li" | "span";
  /** "rise" (default): opacity + 22px rise. "frame": clip-path settle. */
  variant?: "rise" | "frame";
}

/**
 * One-shot scroll reveal (rise or frame variant).
 * Uses the shared app-wide observer (see utils/revealObserver) — a single
 * IntersectionObserver, fired once per element, CSS transition only.
 * Reduced motion: content renders visible immediately, no transition.
 */
export function Reveal({ children, className, delay = 0, as = "div", variant = "rise" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(() => prefersReducedMotion());

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    return observeReveal(el, () => setVisible(true));
  }, []);

  const Tag = as as "div";
  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag ref={ref} style={style} className={cx(variant === "frame" ? "reveal-frame" : "reveal", visible && "is-visible", className)}>
      {children}
    </Tag>
  );
}

/**
 * Canonical alias for the scroll-reveal system — same implementation,
 * usable as `<ScrollReveal>` wherever that name reads better.
 */
export const ScrollReveal = Reveal;
