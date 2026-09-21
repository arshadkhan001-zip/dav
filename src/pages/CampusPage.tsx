import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import {
  FACILITIES,
  FACILITY_CATEGORIES,
  FACILITY_DOCUMENTS,
} from "../data/facilities";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Reveal } from "../components/ui/Reveal";

/**
 * STAGE 10 — Campus & Facilities page.
 * Every space documented on the reference site, grouped by category.
 * Photographs only where the school publishes them; no stock, no invention.
 */
export function CampusPage() {
  useDocumentTitle("Campus & Facilities");

  return (
    <>
      <Section spacing="sm" labelledBy="campus-page-heading">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Campus" }]} />
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow className="mt-6">Campus & facilities</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 id="campus-page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
            An eleven-acre campus, room by room.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="type-body-lg mt-4 max-w-2xl text-muted">
            Laboratories, library, sports grounds, activity rooms and campus
            care — everything below is documented on the school's public site.
          </p>
        </Reveal>
      </Section>

      {FACILITY_CATEGORIES.map((category) => {
        const items = FACILITIES.filter((f) => f.category === category);
        if (items.length === 0) return null;
        return (
          <Section key={category} spacing="sm" labelledBy={`fac-${category}`}>
            <Reveal>
              <Eyebrow>{category}</Eyebrow>
            </Reveal>
            <Reveal delay={50}>
              <h2 id={`fac-${category}`} className="type-heading-xl mt-3 text-navy-900">
                {category === "Campus & Care" ? "Care beyond classrooms." : `${items.length} documented spaces.`}
              </h2>
            </Reveal>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((facility, i) => (
                <Reveal key={facility.id} delay={Math.min(i, 5) * 50}>
                  <li className="h-full overflow-hidden rounded-[4px] border border-line bg-card">
                    {facility.imageThumb && (
                      <span className="block aspect-[16/10] overflow-hidden bg-paper-2">
                        <img
                          src={facility.imageThumb}
                          alt={facility.imageAlt ?? facility.title}
                          width={480}
                          height={300}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </span>
                    )}
                    <span className="block p-4">
                      <span className="type-nav block text-navy-900">{facility.title}</span>
                      {facility.detail && (
                        <span className="type-small mt-1 block text-muted">{facility.detail}</span>
                      )}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Section>
        );
      })}

      <Section spacing="sm" labelledBy="fac-docs-heading">
        <Reveal>
          <Eyebrow>Documents</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="fac-docs-heading" className="type-heading-lg mt-3 font-display font-medium text-navy-900">
            Official downloads.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {FACILITY_DOCUMENTS.map((doc) => (
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
