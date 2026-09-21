import type { HTMLElementType, ReactNode } from "react";
import { Container } from "./Container";
import { cx } from "../../utils/cx";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Controls vertical rhythm: default generous, sm compact. */
  spacing?: "default" | "sm" | "none";
  /** Render full-bleed (no container) for navy/photo bands. */
  fluid?: boolean;
  /** Accessible landmark label when section has a heading. */
  labelledBy?: string;
  /** Anchor id (e.g. scroll targets). */
  id?: string;
  as?: HTMLElementType;
}

/** Section primitive — consistent vertical spacing + optional containment. */
export function Section({
  children,
  className,
  spacing = "default",
  fluid = false,
  labelledBy,
  id,
  as: Tag = "section",
}: SectionProps) {
  const spacingClass =
    spacing === "default" ? "section-pad" : spacing === "sm" ? "section-pad-sm" : undefined;

  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      className={cx(spacingClass, className)}
    >
      {fluid ? children : <Container>{children}</Container>}
    </Tag>
  );
}
