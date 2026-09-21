import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { cx } from "../../utils/cx";

/**
 * Section header pattern — eyebrow + title + optional description.
 * Coordinated reveal built in (eyebrow → title → description).
 * Presentational only; no layout opinions beyond max-width.
 */
export function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  titleClassName,
}: {
  eyebrow: string;
  title: ReactNode;
  titleId?: string;
  description?: ReactNode;
  align?: "left" | "center";
  titleClassName?: string;
}) {
  return (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={70}>
        <h2 id={titleId} className={cx("type-heading-xl mt-4 text-navy-900", titleClassName)}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={120}>
          <p className="type-body-lg mt-4 text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
