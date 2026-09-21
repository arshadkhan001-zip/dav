import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Full-bleed sections skip the max-width constraint. */
  fluid?: boolean;
}

/**
 * Page container — 1200px max, 24px gutters desktop / 16px mobile.
 * Single source of horizontal alignment for the whole site.
 */
export function Container({ children, className, fluid = false }: ContainerProps) {
  return (
    <div
      className={cx(
        "mx-auto w-full px-4 sm:px-6",
        !fluid && "max-w-[75rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}
