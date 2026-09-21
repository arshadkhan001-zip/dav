import { Link } from "react-router-dom";
import { ACTIVITY_CATEGORIES, ACTIVITY_HIGHLIGHTS } from "../../data/activities";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";

/**
 * STAGE 8 — Activities preview (homepage).
 * Verified categories + recent highlights; full programme on /activities.
 */
export function Activities() {
  return (
    <Section labelledBy="activities-heading">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow>Activities</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h2 id="activities-heading" className="type-heading-xl mt-4 text-navy-900">
              Life beyond lessons.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="type-body-lg mt-4 text-muted">
              Houses, clubs and events that fill the school calendar.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-6">
              <Link
                to="/activities"
                className="type-nav inline-flex items-center gap-2 text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8 hover:decoration-gold-600"
              >
                All activities
                <span aria-hidden="true">→</span>
              </Link>
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal delay={100}>
            <ul className="divide-y divide-line border-y border-line">
              {ACTIVITY_CATEGORIES.slice(0, 4).map((cat) => (
                <li key={cat.id}>
                  <a
                    href={cat.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-4"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="type-nav block text-navy-900">{cat.name}</span>
                      <span className="type-small block text-muted">{cat.blurb}</span>
                    </span>
                    <span className="type-small hidden shrink-0 rounded-[3px] border border-navy-900/20 px-2 py-1 text-navy-900 sm:block">
                      PDF
                    </span>
                    <span aria-hidden="true" className="shrink-0 text-gold-600 transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-6">
              <p className="type-label text-gold-600">Recent highlights</p>
              <ul className="mt-2 space-y-1.5">
                {ACTIVITY_HIGHLIGHTS.map((h) => (
                  <li key={h.id} className="type-body text-ink/85">
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
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
