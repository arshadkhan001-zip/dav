import { Link } from "react-router-dom";
import { INTRO } from "../../data/school";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";

/**
 * STAGE 4 — school introduction.
 * Editorial asymmetry: heading left, copy right. Continues the hero story
 * through whitespace + type hierarchy (no hard visual break).
 * Copy uses verified facts only; headline is design copy.
 */
export function Introduction() {
  return (
    <Section id="intro" labelledBy="intro-heading">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>{INTRO.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="intro-heading" className="type-heading-xl mt-4 text-navy-900">
              {INTRO.headingLines[0]}
              <br />
              {INTRO.headingLines[1]}
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={120}>
            <p className="type-body-lg text-ink/85">{INTRO.body[0]}</p>
          </Reveal>
          <Reveal delay={160}>
            <p className="type-body mt-4 text-muted">{INTRO.body[1]}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6">
              <Link
                to={INTRO.link.to}
                className="type-nav inline-flex items-center gap-2 text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8 hover:decoration-gold-600"
              >
                {INTRO.link.label}
                <span aria-hidden="true">→</span>
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
