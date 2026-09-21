import { useRef, useState } from "react";
import {
  ACADEMIC_LEVELS,
  ACADEMIC_RESOURCES,
  EARLY_YEARS_NOTE,
} from "../../data/academics";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { cx } from "../../utils/cx";

/**
 * STAGE 5 — Academics.
 * Editorial split: intro left, level tabs + panel right.
 * Tabs follow the WAI pattern (tablist/tab/tabpanel, roving tabindex,
 * arrow-key navigation). Panel swaps with a short fade-rise; no reload.
 * All streams/subjects verified from the school's Subject Combination page.
 */
export function Academics() {
  const [activeId, setActiveId] = useState(ACADEMIC_LEVELS[0]?.id ?? "");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = Math.max(
    ACADEMIC_LEVELS.findIndex((l) => l.id === activeId),
    0,
  );
  const active = ACADEMIC_LEVELS[activeIndex] ?? ACADEMIC_LEVELS[0]!;

  const select = (index: number) => {
    const level = ACADEMIC_LEVELS[index];
    if (!level) return;
    setActiveId(level.id);
    tabRefs.current[index]?.focus();
  };

  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    const last = ACADEMIC_LEVELS.length - 1;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      select(index === last ? 0 : index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      select(index === 0 ? last : index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      select(0);
    } else if (e.key === "End") {
      e.preventDefault();
      select(last);
    }
  };

  return (
    <Section labelledBy="academics-heading">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Intro column */}
        <div className="lg:col-span-4">
          <SectionHeader
            eyebrow="Academics"
            title="Learning with purpose."
            titleId="academics-heading"
            description="DAV curriculum through Class VIII, CBSE curriculum beyond — explore our academic pathways."
          />
          <Reveal delay={170}>
            <div className="mt-8 border-t border-line pt-5">
              <p className="type-label text-gold-600">Resources</p>
              <ul className="mt-3 space-y-2.5">
                {ACADEMIC_RESOURCES.map((r) => (
                  <li key={r.url}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="type-small text-navy-700 underline decoration-gold-500 decoration-1 underline-offset-4 hover:text-navy-950"
                    >
                      {r.label}
                      <span className="text-muted"> · {r.detail}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Interactive column */}
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal delay={100}>
            <div
              role="tablist"
              aria-label="Academic levels"
              className="flex gap-1 overflow-x-auto border-b border-line"
            >
              {ACADEMIC_LEVELS.map((level, i) => {
                const selected = level.id === active.id;
                return (
                  <button
                    key={level.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    role="tab"
                    id={`academics-tab-${level.id}`}
                    aria-selected={selected}
                    aria-controls={`academics-panel-${level.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveId(level.id)}
                    onKeyDown={(e) => onTabKeyDown(e, i)}
                    className={cx(
                      "type-nav relative shrink-0 px-4 py-3 transition-colors duration-200",
                      "after:absolute after:inset-x-3 after:bottom-0 after:h-[2px] after:origin-left after:bg-gold-500 after:transition-transform after:duration-200",
                      selected
                        ? "text-navy-900 after:scale-x-100"
                        : "text-ink/60 after:scale-x-0 hover:text-navy-900 hover:after:scale-x-100",
                    )}
                  >
                    {level.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div
            key={active.id}
            role="tabpanel"
            id={`academics-panel-${active.id}`}
            aria-labelledby={`academics-tab-${active.id}`}
            tabIndex={0}
            className="swap-in pt-7"
          >
            <p className="type-eyebrow">{active.classes}</p>
            <p className="type-body-lg mt-2 max-w-2xl text-ink/85">{active.note}</p>
            <p className="type-small mt-3 text-muted">
              Curriculum:{" "}
              {active.curriculumUrl ? (
                <a
                  href={active.curriculumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-700 underline decoration-gold-500 decoration-1 underline-offset-4 hover:text-navy-950"
                >
                  {active.curriculum}
                </a>
              ) : (
                active.curriculum
              )}
            </p>

            {active.streams && (
              <div className="mt-6">
                {active.streams.map((stream) => (
                  <article key={stream.name} className="border-t border-line py-6 last:border-b">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-2xl font-medium text-navy-900">
                        {stream.name}
                      </h3>
                      <p className="type-small text-muted">
                        {stream.subjects.length} subjects
                      </p>
                    </div>
                    <p className="type-body mt-1 text-muted">{stream.blurb}</p>
                    <p className="type-body mt-3 leading-relaxed text-ink/85">
                      {stream.subjects.map((row, i) => (
                        <span key={row.options.join("|")}>
                          {i > 0 && (
                            <span aria-hidden="true" className="mx-1.5 text-gold-600">
                              ·
                            </span>
                          )}
                          <span>
                            {row.options.map((opt, j) => (
                              <span key={opt}>
                                {j > 0 && (
                                  <span aria-hidden="true" className="mx-1 text-gold-600">
                                    /
                                  </span>
                                )}
                                {opt}
                              </span>
                            ))}
                          </span>
                        </span>
                      ))}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>

          <p className="type-small mt-6 text-muted">{EARLY_YEARS_NOTE}</p>
        </div>
      </div>
    </Section>
  );
}
