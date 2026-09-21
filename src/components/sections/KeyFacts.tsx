import { STATS, STATS_SOURCE } from "../../data/school";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";
import { StatValue } from "../ui/StatValue";

/**
 * STAGE 4 — key facts band.
 * Deep navy full-bleed section: editorial numerals with hairline dividers,
 * not dashboard cards. Every value verified in "DAVPPS at a Glance 2025".
 * Numerals count up once on entry; reduced motion shows finals instantly.
 */
export function KeyFacts() {
  return (
    <section aria-labelledby="facts-heading" className="bg-navy-950 text-white">
      <Container className="section-pad-sm">
        <Reveal>
          <Eyebrow>At a glance</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="facts-heading" className="type-heading-lg mt-3 max-w-2xl font-display font-medium">
            A young school, grown with its city.
          </h2>
        </Reveal>
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70} className="border-t border-white/20 pt-5">
              <dd className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
                <StatValue value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
              <dt className="type-label mt-3 text-gold-500">{stat.label}</dt>
              <dd className="type-small mt-1 text-white/60">{stat.sub}</dd>
            </Reveal>
          ))}
        </dl>
        <Reveal delay={120}>
          <p className="type-small mt-10 text-white/45">{STATS_SOURCE}</p>
        </Reveal>
      </Container>
    </section>
  );
}
