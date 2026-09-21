import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { INTRO, STATS, STATS_SOURCE } from "../data/school";
import { PRINCIPAL_MESSAGE as PM } from "../data/principal";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Reveal } from "../components/ui/Reveal";
import { StatValue } from "../components/ui/StatValue";

const ABOUT_DOCUMENTS = [
  {
    label: "DAV PPS at a glance 2025",
    detail: "PDF · school overview",
    url: "https://davppspanipat.com/File/64/HTM_DAVPPS%20at%20a%20glance%202025.pdf",
  },
  {
    label: "Annual report",
    detail: "PDF · school record",
    url: "https://davppspanipat.com/File/64/KH9_ANNUAL%20REPORT.pdf",
  },
  {
    label: "Student strength 2026–27",
    detail: "PDF · class-wise strength",
    url: "https://davppspanipat.com/File/64/XUA_STUDENT%20STRENGTH.pdf",
  },
  {
    label: "Vision and mission",
    detail: "Reference page",
    url: "https://davppspanipat.com/3B291793-67C7-4736-8693-FD5545EE81AB/CMS/Page/Vision-And-Mission",
  },
  {
    label: "Chairman's message",
    detail: "Reference page",
    url: "https://davppspanipat.com/127C679A-07F7-4A58-8A2C-1C0D1728BE75/CMS/Page/Chairman-Message",
  },
  {
    label: "From the Principal's desk",
    detail: "Reference page · full message",
    url: "https://davppspanipat.com/05CE118F-5B4E-412C-8DC8-CE19D29E3834/CMS/Page/From-Principal%E2%80%99s-Desk",
  },
];

/**
 * STAGE 14 — About page. Verified identity, history and facts;
 * principal shown with published credentials (full message lives on the
 * reference Principal's Desk page, linked below).
 */
export function AboutPage() {
  useDocumentTitle("About");

  return (
    <>
      <Section spacing="sm" labelledBy="about-page-heading">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow className="mt-6">{INTRO.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 id="about-page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
            A young school with a clear purpose.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-4 max-w-2xl space-y-4">
            {INTRO.body.map((para) => (
              <p key={para.slice(0, 24)} className="type-body-lg text-muted">
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section spacing="sm" labelledBy="about-facts-heading">
        <Reveal>
          <Eyebrow>Key facts</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="about-facts-heading" className="sr-only">
            Key facts
          </h2>
        </Reveal>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 60} className="border-t border-line pt-5">
              <dd className="font-display text-4xl font-medium tracking-tight text-navy-900">
                <StatValue value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
              <dt className="type-label mt-2 text-gold-600">{stat.label}</dt>
              <dd className="type-small mt-1 text-muted">{stat.sub}</dd>
            </Reveal>
          ))}
        </dl>
        <p className="type-small mt-8 text-muted">{STATS_SOURCE}</p>
      </Section>

      <Section spacing="sm" labelledBy="principal-message-heading">
        <Reveal>
          <Eyebrow>{PM.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="principal-message-heading" className="sr-only">
            Principal's message in full
          </h2>
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal delay={80} className="lg:col-span-5">
            <figure>
              <div className="overflow-hidden rounded-md border border-line bg-paper-2">
                <img
                  src={PM.photo.src}
                  srcSet={PM.photo.srcSet}
                  sizes={PM.photo.sizes}
                  width={PM.photo.width}
                  height={PM.photo.height}
                  alt={PM.photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <figcaption className="type-small mt-3 text-muted">
                {PM.name} · {PM.role}
              </figcaption>
            </figure>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <blockquote className="border-l-2 border-gold-500 pl-5">
                <p className="font-display text-xl font-medium leading-snug text-navy-900">
                  “{PM.quote.text}”
                </p>
                <cite className="type-small mt-2 block not-italic text-muted">
                  — {PM.quote.attribution}
                </cite>
              </blockquote>
            </Reveal>
            {PM.body.map((para, i) => (
              <Reveal key={i} delay={120 + Math.min(i, 3) * 40}>
                <p className="type-body mt-4 text-ink/85">{para}</p>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <p className="type-small mt-6 text-muted">
                {PM.name} ({PM.role}) · {PM.qualifications}
              </p>
              <p className="mt-3">
                <Link
                  to="/faculty"
                  className="type-nav inline-flex items-center gap-2 text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8 hover:decoration-gold-600"
                >
                  Meet the staff
                  <span aria-hidden="true">→</span>
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section spacing="sm" labelledBy="about-docs-heading">
        <Reveal>
          <Eyebrow>Records</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="about-docs-heading" className="type-heading-lg mt-3 font-display font-medium text-navy-900">
            Official documents.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {ABOUT_DOCUMENTS.map((doc) => (
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
