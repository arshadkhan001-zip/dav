import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { SCHOOL } from "../data/school";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Reveal } from "../components/ui/Reveal";

/**
 * STAGE 14 — Contact page. Published contact points only:
 * address, reception phone, email, website. No office hours or map
 * coordinates — never published by the school.
 */
export function ContactPage() {
  useDocumentTitle("Contact");

  return (
    <>
      <Section spacing="sm" labelledBy="contact-page-heading">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow className="mt-6">Contact</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 id="contact-page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
            Visit, call or write.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="type-body-lg mt-4 max-w-2xl text-muted">
            {SCHOOL.name} — {SCHOOL.addressLines[0]} {SCHOOL.addressLines[1]}
          </p>
        </Reveal>
      </Section>

      <Section spacing="sm">
        <ul className="grid gap-3 sm:grid-cols-2">
          <Reveal>
            <li className="h-full rounded-[4px] border border-line bg-card p-6">
              <p className="type-label text-gold-600">Reception</p>
              <a
                href={SCHOOL.phoneHref}
                className="type-heading-md mt-2 block text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8"
              >
                {SCHOOL.phone}
              </a>
              <p className="type-small mt-2 text-muted">Admissions and general enquiries.</p>
            </li>
          </Reveal>
          <Reveal delay={70}>
            <li className="h-full rounded-[4px] border border-line bg-card p-6">
              <p className="type-label text-gold-600">Email</p>
              <a
                href={SCHOOL.emailHref}
                className="type-heading-md mt-2 block break-all text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8"
              >
                {SCHOOL.email}
              </a>
              <p className="type-small mt-2 text-muted">Registrations and correspondence.</p>
            </li>
          </Reveal>
          <Reveal delay={120}>
            <li className="h-full rounded-[4px] border border-line bg-card p-6">
              <p className="type-label text-gold-600">Address</p>
              <p className="type-body mt-2 text-ink/85">
                {SCHOOL.addressLines[0]}
                <br />
                {SCHOOL.addressLines[1]}
              </p>
              <p className="type-small mt-2 text-muted">{SCHOOL.affiliation}</p>
            </li>
          </Reveal>
          <Reveal delay={170}>
            <li className="h-full rounded-[4px] border border-line bg-card p-6">
              <p className="type-label text-gold-600">More help</p>
              <p className="mt-2 flex flex-col items-start gap-2">
                <Link
                  to="/help-desk"
                  className="type-nav text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8"
                >
                  Help Desk →
                </Link>
                <Link
                  to="/admissions"
                  className="type-nav text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8"
                >
                  Admissions →
                </Link>
              </p>
            </li>
          </Reveal>
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
