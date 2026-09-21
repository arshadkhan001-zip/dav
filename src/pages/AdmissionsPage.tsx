import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ADMISSION_DOCUMENTS, ADMISSION_STEPS } from "../data/admissions";
import { NOTICES, formatNoticeDate } from "../data/notices";
import { SCHOOL } from "../data/school";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Reveal } from "../components/ui/Reveal";
import { EnquiryForm } from "../components/admissions/EnquiryForm";

/**
 * STAGE 12 — Admissions page.
 * Mirrors the reference admission area: reception-led registration steps,
 * official documents, related board notices, and a clearly-marked
 * demonstration enquiry form (nothing leaves the browser).
 */
export function AdmissionsPage() {
  useDocumentTitle("Admissions");

  return (
    <>
      <Section spacing="sm" labelledBy="admissions-page-heading">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Admissions" }]} />
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow className="mt-6">Admissions</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 id="admissions-page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
            Join the school.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="type-body-lg mt-4 max-w-2xl text-muted">
            Admissions begin with registration at the school. For new
            registrations, contact the school reception on{" "}
            <a href={SCHOOL.phoneHref} className="text-navy-700 underline decoration-gold-500 decoration-1 underline-offset-4">
              {SCHOOL.phone}
            </a>
            .
          </p>
        </Reveal>
      </Section>

      {/* Procedure */}
      <Section spacing="sm" labelledBy="procedure-heading">
        <Reveal>
          <Eyebrow>Procedure</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="procedure-heading" className="type-heading-xl mt-3 text-navy-900">
            Three steps, as published.
          </h2>
        </Reveal>
        <ol className="mt-8 grid gap-3 md:grid-cols-3">
          {ADMISSION_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 70}>
              <li className="h-full rounded-[4px] border border-line bg-card p-5">
                <p className="font-display text-3xl font-medium text-gold-600">{i + 1}</p>
                <p className="type-heading-md mt-2 text-navy-900">{step.title}</p>
                <p className="type-small mt-2 text-muted">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <p className="type-small mt-4 text-muted">
          The school publishes no online form, eligibility table or admission dates;
          anything beyond the steps above is confirmed at reception.
        </p>
      </Section>

      {/* Documents */}
      <Section spacing="sm" labelledBy="admission-docs-heading">
        <Reveal>
          <Eyebrow>Documents</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="admission-docs-heading" className="type-heading-lg mt-3 font-display font-medium text-navy-900">
            Official downloads.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {ADMISSION_DOCUMENTS.map((doc) => (
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
      </Section>

      {/* Enquiry (demo) */}
      <Section spacing="sm" labelledBy="enquiry-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Enquire</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 id="enquiry-heading" className="type-heading-xl mt-4 text-navy-900">
                Ask about admission.
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="type-body mt-4 text-muted">
                A demonstration form. It validates like a real one, but submits
                nowhere — the school accepts registrations at reception.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm />
          </Reveal>
        </div>
      </Section>

      {/* Related notices */}
      <Section spacing="sm" labelledBy="related-notices-heading">
        <Reveal>
          <Eyebrow>Notice board</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="related-notices-heading" className="type-heading-lg mt-3 font-display font-medium text-navy-900">
            Also on the board.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {NOTICES.slice(0, 3).map((notice) => (
              <li key={notice.id}>
                <a
                  href={notice.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-3.5"
                >
                  <span className="type-small w-24 shrink-0 text-muted">
                    {formatNoticeDate(notice.dateISO)}
                  </span>
                  <span className="type-body min-w-0 flex-1 truncate text-ink group-hover:text-navy-900">
                    {notice.title}
                  </span>
                  <span aria-hidden="true" className="shrink-0 text-gold-600 transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <p className="mt-6">
          <Link
            to="/notices"
            className="type-nav inline-flex items-center gap-2 text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8 hover:decoration-gold-600"
          >
            View all notices
            <span aria-hidden="true">→</span>
          </Link>
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
