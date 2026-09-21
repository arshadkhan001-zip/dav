import { Link } from "react-router-dom";
import { FACILITIES } from "../../data/facilities";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";

/**
 * STAGE 10 — Campus preview (homepage).
 * Featured photograph + category overview linking to /campus.
 */
const PREVIEW_IDS = ["senior-library", "physics-lab", "basketball", "football"];

export function Campus() {
  const preview = PREVIEW_IDS.map((id) => FACILITIES.find((f) => f.id === id)!).filter(Boolean);

  return (
    <Section labelledBy="campus-heading">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow>Campus</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h2 id="campus-heading" className="type-heading-xl mt-4 text-navy-900">
              Built for learning, sport and craft.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="type-body-lg mt-4 text-muted">
              Labs, library, grounds and activity rooms across eleven acres.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-6">
              <Link
                to="/campus"
                className="type-nav inline-flex items-center gap-2 text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8 hover:decoration-gold-600"
              >
                Explore campus
                <span aria-hidden="true">→</span>
              </Link>
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <ul className="grid grid-cols-2 gap-3">
            {preview.map((facility, i) => (
              <Reveal key={facility.id} delay={i * 60}>
                <li className="overflow-hidden rounded-[4px] border border-line bg-card">
                  {facility.imageThumb ? (
                    <span className="block aspect-[4/3] overflow-hidden bg-paper-2">
                      <img
                        src={facility.imageThumb}
                        alt={facility.imageAlt ?? facility.title}
                        width={480}
                        height={360}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </span>
                  ) : null}
                  <span className="type-small block truncate px-3 py-2.5 text-ink/80">
                    {facility.title}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
