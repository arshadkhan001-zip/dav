import { useEffect, useRef, type RefObject } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ADMISSIONS_CTA, MORE_LINKS, PRIMARY_NAV, SECONDARY_NAV } from "../../data/navigation";
import { SCHOOL } from "../../data/school";
import { cx } from "../../utils/cx";
import { MOTION } from "../../utils/motion";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  /** Ref of the menu button — focus returns here on close. */
  returnFocusRef: RefObject<HTMLButtonElement | null>;
}

const panelTransition = { duration: MOTION.durationBase / 1000, ease: [0.22, 1, 0.36, 1] as const };

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const } },
};

/**
 * Full-height mobile navigation drawer.
 * Short one-shot motion only; `MotionConfig reducedMotion="user"` strips
 * decoration for prefers-reduced-motion users.
 */
export function MobileDrawer({ open, onClose, returnFocusRef }: MobileDrawerProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Close on route change.
  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Body scroll lock while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open ]);

  // Focus the close control on open; return focus to menu button on close.
  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    } else {
      returnFocusRef.current?.focus();
    }
  }, [open, returnFocusRef]);

  // Escape closes.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[60] bg-navy-950/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={onClose}
              aria-hidden="true"
            />
            <motion.aside
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="fixed inset-y-0 right-0 z-[61] flex w-[min(22rem,88vw)] flex-col bg-paper shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={panelTransition}
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <p className="flex min-w-0 items-center gap-2.5 font-display text-base font-medium text-navy-900">
                  <img
                    src="/images/logo.png"
                    alt=""
                    width={150}
                    height={122}
                    decoding="async"
                    className="h-9 w-auto shrink-0 object-contain"
                  />
                  <span className="truncate">{SCHOOL.name}</span>
                </p>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-navy-900/20 text-navy-900 hover:bg-navy-100/60"
                >
                  <CloseIcon />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-5">
                <motion.div variants={listVariants} initial="hidden" animate="show" className="space-y-7">
                  <motion.div variants={itemVariants}>
                    <Link
                      to={ADMISSIONS_CTA.to}
                      onClick={onClose}
                      className="type-nav flex w-full items-center justify-center rounded-[3px] bg-navy-900 px-5 py-3.5 text-white hover:bg-navy-950"
                    >
                      {ADMISSIONS_CTA.label} 2026–27
                    </Link>
                    <a
                      href={SCHOOL.phoneHref}
                      className="type-small mt-3 block text-center text-muted"
                    >
                      or call {SCHOOL.phone}
                    </a>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <p className="type-label text-gold-600">Explore</p>
                    <ul className="mt-2 divide-y divide-line/70">
                      {PRIMARY_NAV.map((item) => (
                        <li key={item.to}>
                          <NavLink
                            to={item.to}
                            onClick={onClose}
                            className={({ isActive }) =>
                              cx(
                                "flex items-center justify-between py-3 font-display text-xl text-ink hover:text-navy-900",
                                isActive && "text-navy-900",
                              )
                            }
                          >
                            {({ isActive }) => (
                              <>
                                <span
                                  className={cx(
                                    isActive && "underline decoration-gold-500 decoration-2 underline-offset-8",
                                  )}
                                >
                                  {item.label}
                                </span>
                                <span aria-hidden="true" className="text-gold-600">
                                  →
                                </span>
                              </>
                            )}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <p className="type-label text-gold-600">Admissions & info</p>
                    <ul className="mt-2 space-y-1">
                      {[...SECONDARY_NAV, ...MORE_LINKS].map((item) => (
                        <li key={item.to}>
                          <NavLink
                            to={item.to}
                            onClick={onClose}
                            className="type-nav flex items-center justify-between rounded-[3px] px-2 py-2.5 text-ink/85 hover:bg-navy-100/50 hover:text-navy-900"
                          >
                            {item.label}
                            <span aria-hidden="true" className="text-gold-600">
                              →
                            </span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </nav>

              <div className="border-t border-line px-5 py-4">
                <p className="type-small text-muted">
                  New Police Lines, G.T. Road, {SCHOOL.place}
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
