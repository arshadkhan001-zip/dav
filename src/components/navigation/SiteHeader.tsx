import { Suspense, lazy, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ADMISSIONS_CTA, PRIMARY_NAV, SECONDARY_NAV } from "../../data/navigation";
import { SCHOOL } from "../../data/school";
import { useScrolled } from "../../hooks/useScrolled";
import { cx } from "../../utils/cx";
import { asset } from "../../utils/asset";
import { NavDropdown } from "./NavDropdown";

// Drawer (and framer-motion with it) split into a separate chunk — loaded only
// after the user first opens the mobile menu, keeping initial JS lean.
const MobileDrawer = lazy(() =>
  import("./MobileDrawer").then((m) => ({ default: m.MobileDrawer })),
);

const linkBase =
  "type-nav relative py-1.5 text-ink/75 transition-colors duration-200 hover:text-navy-900 " +
  "after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 " +
  "after:bg-gold-500 after:transition-transform after:duration-200 hover:after:scale-x-100";

function desktopClass({ isActive }: { isActive: boolean }) {
  return cx(linkBase, isActive && "text-navy-900 after:scale-x-100");
}

/**
 * Premium institutional header (Stages 2 + 16).
 * - Sticky, compact; utility strip collapses on scroll, bar shrinks with
 *   a smooth height/padding transition (no jumps).
 * - Desktop: underline-reveal hover, subtle gold active state, "More"
 *   dropdown for information routes (see NavDropdown).
 * - Mobile (<lg): identity + Admissions mini-CTA + animated menu button
 *   opening a full-height drawer (see MobileDrawer).
 * - Scroll state via rAF-throttled boolean hook — no per-frame re-renders.
 */
export function SiteHeader() {
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerReady, setDrawerReady] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const openMenu = () => {
    setDrawerReady(true);
    setMenuOpen((v) => !v);
  };

  return (
    <>
      <header
        className={cx(
          "sticky top-0 z-50 border-b bg-paper transition-all duration-300",
          scrolled ? "border-line shadow-lifted" : "border-transparent",
        )}
      >
        {/* Utility strip — collapses away on scroll for a compact bar */}
        <div
          className={cx(
            "overflow-hidden bg-navy-900 text-white transition-all duration-300",
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100",
          )}
          aria-hidden={scrolled}
        >
          <div className="mx-auto flex w-full max-w-[75rem] items-center justify-between gap-4 px-4 py-1.5 sm:px-6">
            <p className="type-small truncate opacity-90">
              {SCHOOL.name}, {SCHOOL.place} · {SCHOOL.affiliation}
            </p>
            <a
              href={SCHOOL.phoneHref}
              tabIndex={scrolled ? -1 : undefined}
              className="type-small shrink-0 underline-offset-4 hover:underline"
            >
              {SCHOOL.phone}
            </a>
          </div>
        </div>

        {/* Main bar — height shrinks smoothly on scroll */}
        <div
          className={cx(
            "mx-auto flex w-full max-w-[75rem] items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 xl:gap-6",
            scrolled ? "py-2" : "py-3.5",
          )}
        >
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            aria-label={`${SCHOOL.name}, ${SCHOOL.place} — home`}
          >
            <img
              src={asset("/images/logo.png")}
              alt="DAV College Managing Committee crest"
              width={150}
              height={122}
              decoding="async"
              className={cx(
                "w-auto shrink-0 object-contain transition-all duration-300",
                scrolled ? "h-8" : "h-10",
              )}
            />
            <span className="min-w-0 leading-tight lg:max-w-[210px] xl:max-w-none">
              <span
                className={cx(
                  "block truncate font-display font-medium text-navy-900 transition-all duration-300 xl:whitespace-normal",
                  scrolled ? "text-base" : "text-lg",
                )}
                title={`${SCHOOL.name}, ${SCHOOL.place}`}
              >
                {SCHOOL.name}
              </span>
              <span className="type-small hidden min-[420px]:block truncate text-muted xl:whitespace-normal" title={`New Police Lines, G.T. Road, ${SCHOOL.place}`}>
                New Police Lines, G.T. Road, {SCHOOL.place}
              </span>
            </span>
          </Link>

          {/* Desktop primary */}
          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {PRIMARY_NAV.map((item) => (
              <NavLink key={item.to} to={item.to} className={desktopClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop right cluster */}
          <div className="hidden items-center gap-1 lg:flex">
            {SECONDARY_NAV.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => cx(linkBase, "px-2", isActive && "text-navy-900 after:scale-x-100")}>
                {item.label}
              </NavLink>
            ))}
            <NavDropdown />
            <NavLink
              to={ADMISSIONS_CTA.to}
              className="type-nav ml-3 rounded-[3px] bg-navy-900 px-5 py-2.5 text-white transition-colors duration-200 hover:bg-navy-950"
            >
              {ADMISSIONS_CTA.label}
            </NavLink>
          </div>

          {/* Mobile / tablet cluster */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to={ADMISSIONS_CTA.to}
              className="type-nav rounded-[3px] bg-navy-900 px-4 py-2 text-sm text-white transition-colors hover:bg-navy-950"
            >
              {ADMISSIONS_CTA.label}
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-navy-900/25 text-navy-900 transition-colors hover:bg-navy-100/50"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-nav">
        {drawerReady && (
          <Suspense fallback={null}>
            <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} returnFocusRef={menuButtonRef} />
          </Suspense>
        )}
      </div>
    </>
  );
}

/** Two-line hamburger that morphs into a close X (CSS only, motion-safe). */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-4 w-5">
      <span
        className={cx(
          "absolute left-0 top-0 h-[2px] w-full origin-center bg-current transition-transform duration-200",
          open && "top-1/2 -translate-y-1/2 rotate-45",
        )}
      />
      <span
        className={cx(
          "absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-current transition-opacity duration-150",
          open && "opacity-0",
        )}
      />
      <span
        className={cx(
          "absolute bottom-0 left-0 h-[2px] w-full origin-center bg-current transition-transform duration-200",
          open && "bottom-1/2 translate-y-1/2 -rotate-45",
        )}
      />
    </span>
  );
}
