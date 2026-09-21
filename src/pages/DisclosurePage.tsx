import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { DISCLOSURE_DOCUMENTS, DISCLOSURE_SECTIONS } from "../data/disclosure";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Reveal } from "../components/ui/Reveal";

/**
 * STAGE 13 — Mandatory Public Disclosure page.
 * Values transcribed from the school's SARAS disclosure document;
 * certificates linked from the reference disclosure hub. Nothing guessed.
 */
export function DisclosurePage() {
  useDocumentTitle("Mandatory Public Disclosure");

  return (
    <>
      <Section spacing="sm" labelledBy="disclosure-page-heading">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Disclosure" }]} />
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow className="mt-6">Mandatory public disclosure</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 id="disclosure-page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
            Open records, as required.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="type-body-lg mt-4 max-w-2xl text-muted">
            CBSE-mandated public information for DAV Police Public School, Panipat —
            transcribed from the school's disclosure document.
          </p>
        </Reveal>
      </Section>

      {DISCLOSURE_SECTIONS.map((section) => (
        <Section key={section.id} spacing="sm" labelledBy={`disc-${section.id}`}>
          <Reveal>
            <Eyebrow>{section.title}</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-5 overflow-x-auto rounded-[4px] border border-line">
              <table className="w-full min-w-[520px] border-collapse bg-card text-left">
                <caption className="sr-only">{section.title}</caption>
                <tbody>
                  {section.rows.map((row) => (
                    <tr key={row.label} className="border-b border-line align-top last:border-0">
                      <th scope="row" className="type-small w-2/5 px-5 py-3.5 font-medium text-muted">
                        {row.label}
                      </th>
                      <td className="type-body px-5 py-3.5 text-ink">
                        {row.href ? (
                          row.external ? (
                            <a
                              href={row.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-navy-700 underline decoration-gold-500 decoration-1 underline-offset-4 hover:text-navy-950"
                            >
                              {row.value}
                            </a>
                          ) : (
                            <a
                              href={row.href}
                              className="text-navy-700 underline decoration-gold-500 decoration-1 underline-offset-4 hover:text-navy-950"
                            >
                              {row.value}
                            </a>
                          )
                        ) : (
                          row.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Section>
      ))}

      <Section spacing="sm" labelledBy="disc-docs-heading">
        <Reveal>
          <Eyebrow>Certificates & documents</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="disc-docs-heading" className="type-heading-lg mt-3 font-display font-medium text-navy-900">
            Official files.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {DISCLOSURE_DOCUMENTS.map((doc) => (
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
