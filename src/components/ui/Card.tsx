import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

type CardVariant = "default" | "tinted";

const variants: Record<CardVariant, string> = {
  default: "border-line bg-card",
  tinted: "border-line bg-paper-2/60",
};

/**
 * Card primitive — bordered surface with the editorial radius.
 * Variants stay visually related. Not every section belongs in a card;
 * use for discrete information units (levels, contacts, results).
 */
export function Card({
  variant = "default",
  className,
  children,
}: {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx("h-full rounded-md border p-5 shadow-subtle", variants[variant], className)}>
      {children}
    </div>
  );
}
