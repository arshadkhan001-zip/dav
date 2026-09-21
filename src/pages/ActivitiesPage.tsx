import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ACTIVITY_CATEGORIES, ACTIVITY_HIGHLIGHTS } from "../data/activities";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Reveal } from "../components/ui/Reveal";

/**
 * STAGE 8 — Activities page.
 * Full verified programme: all five categories with official documents,
 * plus dated/undated event highlights. No invented activities or results.
 */
export function ActivitiesPage() {
  useDocumentTitle("Activities");

  return (
    <>
      <Section spacing="sm" labelledBy="activities-page-heading">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Activities" }]} />
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow className="mt-6">Activities</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 id="activities-page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
            Houses, clubs and celebrations.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="type-body-lg mt-4 max-w-2xl text-muted">
            The school's activity programme — house system, creative clubs,
            inter-house events and the yearly planner, as published by the school.
          </p>
        </Reveal>
      </Section>

      <Section spacing="sm" labelledBy="programme-heading">
        <Reveal>
          <Eyebrow>Programme</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="programme-heading" className="type-heading-xl mt-3 text-navy-900">
            Five doors into school life.
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITY_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 60}>
              <li className="h-full">
                <a
                  href={cat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-[4px] border border-line bg-card p-5 transition-colors duration-200 hover:border-navy-900/30"
                >
                  <p className="type-label text-gold-600">{cat.kind === "pdf" ? "Document" : "Web page"}</p>
                  <p className="type-heading-md mt-2 text-navy-900">{cat.name}</p>
                  <p className="type-small mt-1 flex-1 text-muted">{cat.blurb}</p>
                  <p className="type-nav mt-4 inline-flex items-center gap-2 text-navy-900">
                    Open
                    <span aria-hidden="true" className="text-gold-600 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </p>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section spacing="sm" labelledBy="highlights-heading">
        <Reveal>
          <Eyebrow>Highlights</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="highlights-heading" className="type-heading-xl mt-3 text-navy-900">
            Recent events.
          </h2>
        </Reveal>
        <Reveal delay={110}>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {ACTIVITY_HIGHLIGHTS.map((h) => (
              <li key={h.id} className="flex flex-wrap items-baseline gap-x-6 gap-y-1 py-4">
                {h.dateISO ? (
                  <span className="type-small w-28 shrink-0 text-muted">
                    {new Date(`${h.dateISO}T00:00:00`).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                ) : (
                  <span className="type-small w-28 shrink-0 text-muted/60">Date n/a</span>
                )}
                <span className="type-body min-w-0 flex-1 text-ink">
                  {h.href ? (
                    <a
                      href={h.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-gold-500 decoration-1 underline-offset-4 hover:text-navy-900"
                    >
                      {h.title}
                    </a>
                  ) : (
                    h.title
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <p className="type-small mt-4 text-muted">
          Dates shown only where the school publishes them; undated items come from the
          school's event listings. No results or winners are claimed.
        </p>
        <p className="mt-10">
          <Link
            to="/"
            className="type-nav inline-flex items-center gap-2 text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8 hover:decoration-gold-600"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>
        </p>
      </Section>
    </>
  );
}
