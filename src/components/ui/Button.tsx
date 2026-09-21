import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cx } from "../../utils/cx";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "sm";

const base =
  "type-nav inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 transition-colors duration-150 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100";

const variants: Record<Variant, string> = {
  // Navy solid — main conversion action (Admissions).
  primary: "bg-navy-900 text-white hover:bg-navy-950",
  // Muted gold — restrained secondary emphasis.
  secondary: "bg-gold-600 text-white hover:bg-gold-700",
  // Hairline outline on paper.
  outline: "border border-navy-900/25 bg-transparent text-navy-900 hover:border-navy-900 hover:bg-navy-100/40",
  // Minimal text action.
  ghost: "px-3 py-2 text-navy-900 hover:bg-navy-100/50",
};

const sizes: Record<Size, string> = {
  md: "",
  sm: "px-4 py-2 text-sm",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function Button({ variant = "primary", size = "md", className, children, ...rest }: ButtonProps) {
  return (
    <button className={cx(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

/** Router-aware button-styled link — use for CTAs, not plain text links. */
export function ButtonLink({ to, variant = "primary", size = "md", className, children, ...rest }: ButtonLinkProps) {
  return (
    <Link to={to} className={cx(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Link>
  );
}
