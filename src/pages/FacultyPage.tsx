import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { FACULTY_GROUPS, PRINCIPAL, TRAINING_DOCS } from "../data/faculty";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Reveal } from "../components/ui/Reveal";

/**
 * STAGE 11 — Faculty & Staff page.
 * Transcribed from the reference "Staff Faculty" table (Sept 2026):
 * name, designation group, qualification, professional qualification.
 * Grouped tables scroll horizontally on small screens; no portraits exist
 * on the source, none added.
 */
export function FacultyPage() {
  useDocumentTitle("Faculty & Staff");

  return (
    <>
      <Section spacing="sm" labelledBy="faculty-page-heading">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Faculty" }]} />
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow className="mt-6">Faculty & staff</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 id="faculty-page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
            The people behind the school.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="type-body-lg mt-4 max-w-2xl text-muted">
            Teaching and support staff as published by the school, September 2026.
          </p>
        </Reveal>
      </Section>

      {/* Leadership */}
      <Section spacing="sm" labelledBy="leadership-heading">
        <Reveal>
          <Eyebrow>Leadership</Eyebrow>
        </Reveal>
        <div className="mt-5 grid items-center gap-8 lg:grid-cols-12">
          <Reveal variant="frame" className="lg:col-span-7">
            <figure className="relative">
              <span
                aria-hidden="true"
                className="absolute -right-3 -top-3 hidden h-full w-full rounded-md border border-gold-500/60 sm:block"
              />
              <div className="relative overflow-hidden rounded-md border border-line bg-paper-2 shadow-lifted">
                <img
                  src="/images/principal-880.jpg"
                  srcSet="/images/principal-480.jpg 480w, /images/principal-880.jpg 880w"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  width={595}
                  height={337}
                  alt="Ms. Sumita Arora, Principal, at her office desk"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-3">
                <span aria-hidden="true" className="rule-gold" />
                <span className="type-small text-muted">
                  {PRINCIPAL.name} · {PRINCIPAL.role}
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <h2 id="leadership-heading" className="font-display text-3xl font-medium text-navy-900 sm:text-4xl">
              {PRINCIPAL.name}
            </h2>
            <p className="type-label mt-3 text-gold-600">{PRINCIPAL.role}</p>
            <p className="type-body-lg mt-4 text-ink/85">
              {PRINCIPAL.qualification} · {PRINCIPAL.professionalQualification}
            </p>
            <p className="type-body mt-3 text-muted">
              Leading DAV Police Public School, Panipat — read her message on the
              About page.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Groups */}
      {FACULTY_GROUPS.map((group) => (
        <Section key={group.id} spacing="sm" labelledBy={`fac-${group.id}`}>
          <Reveal>
            <Eyebrow>
              {group.members.length} {group.members.length === 1 ? "member" : "members"}
            </Eyebrow>
          </Reveal>
          <Reveal delay={50}>
            <h2 id={`fac-${group.id}`} className="type-heading-xl mt-3 text-navy-900">
              {group.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 overflow-x-auto rounded-[4px] border border-line">
              <table className="w-full min-w-[560px] border-collapse bg-card text-left">
                <caption className="sr-only">{group.title}</caption>
                <thead>
                  <tr className="border-b border-line bg-paper-2/70">
                    <th scope="col" className="type-label px-5 py-3.5 text-navy-900">Name</th>
                    <th scope="col" className="type-label px-5 py-3.5 text-navy-900">Qualification</th>
                    <th scope="col" className="type-label px-5 py-3.5 text-navy-900">Professional qualification</th>
                  </tr>
                </thead>
                <tbody>
                  {group.members.map((member) => (
                    <tr key={member.name} className="border-b border-line last:border-0">
                      <th scope="row" className="type-body px-5 py-3 font-medium text-navy-900">
                        {member.name}
                      </th>
                      <td className="type-small px-5 py-3 text-ink/80">{member.qualification}</td>
                      <td className="type-small px-5 py-3 text-muted">
                        {member.professionalQualification ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Section>
      ))}

      {/* Training records */}
      <Section spacing="sm" labelledBy="training-heading">
        <Reveal>
          <Eyebrow>Development</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="training-heading" className="type-heading-lg mt-3 font-display font-medium text-navy-900">
            Training records.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {TRAINING_DOCS.map((doc) => (
              <li key={doc.url}>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-3.5"
                >
                  <span className="type-body flex-1 text-ink group-hover:text-navy-900">
                    {doc.label}
                    <span className="type-small block text-muted">PDF · school record</span>
                  </span>
                  <span aria-hidden="true" className="shrink-0 text-gold-600 transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
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
