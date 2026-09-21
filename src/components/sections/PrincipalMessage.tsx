import { PRINCIPAL_MESSAGE as P } from "../../data/principal";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/Button";

/**
 * Principal's message preview (homepage) — large portrait, the Madison
 * quote, an excerpt of the verified message, and Read More to /about.
 */
export function PrincipalMessage() {
  return (
    <Section labelledBy="principal-heading">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <figure>
            <div className="overflow-hidden rounded-md border border-line bg-paper-2 shadow-lifted">
              <img
                src={P.photo.src}
                srcSet={P.photo.srcSet}
                sizes={P.photo.sizes}
                width={P.photo.width}
                height={P.photo.height}
                alt={P.photo.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center gap-3">
              <span aria-hidden="true" className="rule-gold" />
              <span className="type-small text-muted">
                {P.name} · {P.role}
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>{P.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <blockquote className="mt-5 border-l-2 border-gold-500 pl-5">
              <p className="font-display text-xl font-medium leading-snug text-navy-900 sm:text-2xl">
                “{P.quote.text}”
              </p>
              <cite className="type-small mt-2 block not-italic text-muted">
                — {P.quote.attribution}
              </cite>
            </blockquote>
          </Reveal>
          <Reveal delay={140}>
            <p className="type-body mt-5 text-muted">{P.excerpt}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <ButtonLink to="/about" variant="outline">
                Read more
              </ButtonLink>
              <p className="type-small text-muted">
                {P.name} · {P.qualifications}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
