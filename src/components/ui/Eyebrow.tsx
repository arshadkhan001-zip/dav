import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

/** Small gold eyebrow label shown above section headings. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cx("type-eyebrow", className)}>{children}</p>;
}
