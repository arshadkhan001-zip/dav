import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HELP_CONTACTS, HELP_LINKS } from "../data/helpDesk";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Reveal } from "../components/ui/Reveal";

/**
 * STAGE 13 — Help Desk page.
 * The reference hub is a contact/link collection with no enquiry form,
 * so none is recreated. Published contacts use tel:/mailto: links.
 */
export function HelpDeskPage() {
  useDocumentTitle("Help Desk");

  return (
    <>
      <Section spacing="sm" labelledBy="help-page-heading">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Help Desk" }]} />
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow className="mt-6">Help desk</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 id="help-page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
            Reach the school.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="type-body-lg mt-4 max-w-2xl text-muted">
            Published contact points and the school's most-used public links.
          </p>
        </Reveal>
      </Section>

      <Section spacing="sm" labelledBy="help-contacts-heading">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="help-contacts-heading" className="sr-only">
            Contact points
          </h2>
        </Reveal>
        <ul className="mt-2 grid gap-3 md:grid-cols-3">
          {HELP_CONTACTS.map((contact, i) => (
            <Reveal key={contact.label} delay={i * 60}>
              <li className="h-full rounded-[4px] border border-line bg-card p-5">
                <p className="type-label text-gold-600">{contact.label}</p>
                {contact.href.startsWith("/") ? (
                  <Link
                    to={contact.href}
                    className="type-body mt-2 block text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-4"
                  >
                    {contact.value}
                  </Link>
                ) : (
                  <a
                    href={contact.href}
                    className="type-body mt-2 block break-words text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-4"
                  >
                    {contact.value}
                  </a>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section spacing="sm" labelledBy="help-links-heading">
        <Reveal>
          <Eyebrow>Useful links</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="help-links-heading" className="type-heading-lg mt-3 font-display font-medium text-navy-900">
            Where to go next.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {HELP_LINKS.map((link) => (
              <li key={link.url}>
                {link.external ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 py-3.5"
                  >
                    <span className="type-body flex-1 text-ink group-hover:text-navy-900">
                      {link.label}
                      <span className="type-small block text-muted">{link.detail}</span>
                    </span>
                    <span aria-hidden="true" className="shrink-0 text-gold-600 transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                ) : (
                  <Link to={link.url} className="group flex items-center gap-3 py-3.5">
                    <span className="type-body flex-1 text-ink group-hover:text-navy-900">
                      {link.label}
                      <span className="type-small block text-muted">{link.detail}</span>
                    </span>
                    <span aria-hidden="true" className="shrink-0 text-gold-600 transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                )}
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
