import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MORE_LINKS } from "../../data/navigation";
import { cx } from "../../utils/cx";

/**
 * "More" dropdown — exposes information routes (Faculty, Disclosure,
 * Help Desk) on desktop without crowding the primary bar.
 * Opens on hover (fine pointer) AND click (touch/keyboard); closes on
 * Escape, outside pointer-down, or route change. No layout shift:
 * absolutely positioned panel, opacity + translateY only.
 */
export function NavDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const childActive = MORE_LINKS.some((item) => location.pathname === item.to);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="nav-more-panel"
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cx(
          "type-nav relative flex items-center gap-1 px-2 py-1.5 transition-colors duration-200 hover:text-navy-900",
          "after:absolute after:inset-x-2 after:bottom-0 after:h-[2px] after:origin-left after:bg-gold-500 after:transition-transform after:duration-200",
          open || childActive
            ? "text-navy-900 after:scale-x-100"
            : "text-ink/75 after:scale-x-0 hover:after:scale-x-100",
        )}
      >
        More
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
          className={cx("transition-transform duration-200", open && "rotate-180")}
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          id="nav-more-panel"
          className="dropdown-panel absolute right-0 top-full z-50 w-60 pt-2"
        >
          <ul className="rounded-md border border-line bg-card py-2 shadow-lifted">
            {MORE_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  aria-current={location.pathname === item.to ? "page" : undefined}
                  className={cx(
                    "type-nav block px-4 py-2.5 transition-colors hover:bg-paper-2 hover:text-navy-900",
                    location.pathname === item.to ? "text-navy-900" : "text-ink/80",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
