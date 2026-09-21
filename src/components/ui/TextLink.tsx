import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cx } from "../../utils/cx";

/** Inline text link with restrained underline treatment. */
export function TextLink({
  to,
  children,
  className,
  external = false,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = cx(
    "text-navy-700 underline decoration-gold-500 decoration-1 underline-offset-4 hover:text-navy-950 hover:decoration-gold-600",
    className,
  );
  if (external) {
    return (
      <a href={to} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}
