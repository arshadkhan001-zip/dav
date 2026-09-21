import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import {
  ACADEMIC_DOCUMENTS,
  ACADEMIC_LEVELS,
  EARLY_YEARS_NOTE,
} from "../data/academics";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Card } from "../components/ui/Card";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Reveal } from "../components/ui/Reveal";

/**
 * STAGE 7 — Academics landing page.
 * Recreates the reference academic area's information: levels, verified
 * Class XI subject combinations (accessible table), curriculum sources,
 * and the official document shelf. No invented programs or subjects.
 */
export function AcademicsPage() {
  useDocumentTitle("Academics");
  const senior = ACADEMIC_LEVELS.find((l) => l.id === "senior");

  return (
    <>
      <Section spacing="sm" labelledBy="academics-page-heading">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Academics" }]} />
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow className="mt-6">Academics</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 id="academics-page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
            Structure, streams and study material.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="type-body-lg mt-4 max-w-2xl text-muted">
            Classes Nursery to XII — DAV curriculum through Class VIII and CBSE
            curriculum beyond, with three elective streams in Senior Secondary.
          </p>
        </Reveal>
      </Section>

      {/* Levels */}
      <Section spacing="sm" labelledBy="levels-heading">
        <Reveal>
          <Eyebrow>Levels</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="levels-heading" className="type-heading-xl mt-3 text-navy-900">
            From early years to board years.
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ACADEMIC_LEVELS.map((level, i) => (
            <Reveal key={level.id} delay={i * 60}>
              <li className="h-full">
                <Card>
                  <p className="type-eyebrow">{level.classes}</p>
                  <p className="type-heading-md mt-2 text-navy-900">{level.label}</p>
                  <p className="type-small mt-2 text-muted">{level.note}</p>
                </Card>
              </li>
            </Reveal>
          ))}
        </ul>
        <p className="type-small mt-4 text-muted">{EARLY_YEARS_NOTE}</p>
      </Section>

      {/* Subject combinations — accessible table */}
      <Section spacing="sm" labelledBy="streams-heading">
        <Reveal>
          <Eyebrow>Class XI · Subject combinations</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="streams-heading" className="type-heading-xl mt-3 max-w-2xl text-navy-900">
            Three streams, as prescribed by the school.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 overflow-x-auto rounded-[4px] border border-line">
            <table className="w-full min-w-[640px] border-collapse bg-card text-left">
              <caption className="sr-only">
                Verified Class XI subject combinations for Science, Commerce and Humanities
              </caption>
              <thead>
                <tr className="border-b border-line bg-paper-2/70">
                  <th scope="col" className="type-label px-5 py-4 text-navy-900">
                    Stream
                  </th>
                  <th scope="col" className="type-label px-5 py-4 text-navy-900">
                    Subjects
                  </th>
                </tr>
              </thead>
              <tbody>
                {senior?.streams?.map((stream) => (
                  <tr key={stream.name} className="border-b border-line align-top last:border-0">
                    <th scope="row" className="px-5 py-4 font-display text-xl font-medium text-navy-900">
                      {stream.name}
                    </th>
                    <td className="px-5 py-4">
                      <ul className="type-body space-y-1.5 text-ink/85">
                        {stream.subjects.map((row) => (
                          <li key={row.options.join("|")}>{row.options.join(" / ")}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <p className="type-small mt-4 text-muted">
          Combinations reproduced from the school's Subject Combination page; “/” marks
          verified alternatives within a slot.
        </p>
      </Section>

      {/* Curriculum + documents */}
      <Section spacing="sm" labelledBy="resources-heading">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>Curriculum</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 id="resources-heading" className="type-heading-lg mt-3 font-display font-medium text-navy-900">
                Where the syllabus lives.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-5 space-y-3">
                <li className="rounded-[4px] border border-line bg-card p-5">
                  <p className="type-nav text-navy-900">Classes I – VIII · DAV curriculum</p>
                  <a
                    href="http://davcae.net.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-small text-navy-700 underline decoration-gold-500 decoration-1 underline-offset-4 hover:text-navy-950"
                  >
                    davcae.net.in
                  </a>
                </li>
                <li className="rounded-[4px] border border-line bg-card p-5">
                  <p className="type-nav text-navy-900">Classes IX – XII · CBSE curriculum</p>
                  <a
                    href="https://cbseacademic.nic.in/curriculum_2027.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-small text-navy-700 underline decoration-gold-500 decoration-1 underline-offset-4 hover:text-navy-950"
                  >
                    cbseacademic.nic.in
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Eyebrow>Documents</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="type-heading-lg mt-3 font-display font-medium text-navy-900">
                Official downloads.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {ACADEMIC_DOCUMENTS.map((doc) => (
                  <li key={doc.url}>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 py-3.5"
                    >
                      <span className="type-body flex-1 text-ink group-hover:text-navy-900">
                        {doc.label}
                        <span className="type-small block text-muted">{doc.detail}</span>
                      </span>
                      <span aria-hidden="true" className="shrink-0 text-gold-600 transition-transform duration-200 group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
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
