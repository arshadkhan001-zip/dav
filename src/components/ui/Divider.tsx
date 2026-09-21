import { cx } from "../../utils/cx";

/** Hairline divider + optional short gold rule for editorial breaks. */
export function Divider({ className, gold = false }: { className?: string; gold?: boolean }) {
  if (gold) {
    return <div aria-hidden="true" className={cx("rule-gold", className)} />;
  }
  return <hr className={cx("border-t border-line", className)} />;
}
