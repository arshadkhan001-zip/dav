import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import {
  BOARD_RESULTS_2026,
  RECOGNITIONS,
  RESULT_HIGHLIGHTS,
} from "../data/achievements";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Reveal } from "../components/ui/Reveal";

/**
 * STAGE 14 — Achievements page. Verified board figures (SARAS disclosure),
 * official highlight documents, and distinctions as listed by the school.
 * No positions or winners beyond what the source states.
 */
export function AchievementsPage() {
  useDocumentTitle("Achievements");

  return (
    <>
      <Section spacing="sm" labelledBy="achievements-page-heading">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Achievements" }]} />
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow className="mt-6">Achievements</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 id="achievements-page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
            Results that speak quietly.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="type-body-lg mt-4 max-w-2xl text-muted">
            Board outcomes from the school's disclosure records, plus the
            distinctions the school lists for its students.
          </p>
        </Reveal>
      </Section>

      <Section spacing="sm" labelledBy="board-results-heading">
        <Reveal>
          <Eyebrow>Board results · 2026</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="board-results-heading" className="sr-only">
            Board results 2026
          </h2>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {BOARD_RESULTS_2026.map((result, i) => (
            <Reveal key={result.className} delay={i * 70}>
              <div className="h-full rounded-[4px] border border-line bg-card p-6">
                <p className="type-label text-gold-600">{result.className} · CBSE</p>
                <p className="font-display text-5xl font-medium tracking-tight text-navy-900">
                  {result.percentage}
                  <span className="text-2xl">%</span>
                </p>
                <p className="type-small mt-2 text-muted">
                  {result.passed} of {result.registered} students passed.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section spacing="sm" labelledBy="highlights-heading">
        <Reveal>
          <Eyebrow>Result records</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="highlights-heading" className="type-heading-lg mt-3 font-display font-medium text-navy-900">
            Official documents.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {RESULT_HIGHLIGHTS.map((highlight) => (
              <li key={highlight.href}>
                <a
                  href={highlight.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-3.5"
                >
                  <span className="type-body flex-1 text-ink group-hover:text-navy-900">
                    {highlight.title}
                  </span>
                  <span aria-hidden="true" className="shrink-0 text-gold-600 transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section spacing="sm" labelledBy="recognitions-heading">
        <Reveal>
          <Eyebrow>Beyond the classroom</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="recognitions-heading" className="type-heading-lg mt-3 font-display font-medium text-navy-900">
            As listed by the school.
          </h2>
        </Reveal>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {RECOGNITIONS.map((recognition, i) => (
            <Reveal key={recognition.title} delay={i * 60}>
              <li className="h-full rounded-[4px] border border-line bg-card p-5">
                <p className="type-heading-md text-navy-900">{recognition.title}</p>
                <p className="type-small mt-1 text-muted">{recognition.context}</p>
              </li>
            </Reveal>
          ))}
        </ul>
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
