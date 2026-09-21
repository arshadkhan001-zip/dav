import { Link } from "react-router-dom";
import { SCHOOL } from "../../data/school";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";

/**
 * STAGE 12 — homepage admissions call-to-action band.
 * Mirrors the reference "New Admission" notice: registrations at reception.
 */
export function AdmissionsCTA() {
  return (
    <section aria-labelledby="admissions-cta-heading" className="bg-navy-900 text-white">
      <Container className="section-pad-sm">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Admissions</Eyebrow>
            </Reveal>
            <Reveal delay={70}>
              <h2 id="admissions-cta-heading" className="type-heading-xl mt-4">
                Begin with a conversation.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="type-body-lg mt-3 max-w-xl text-white/75">
                New registrations start at the school reception — call{" "}
                <a href={SCHOOL.phoneHref} className="underline underline-offset-4 hover:text-white">
                  {SCHOOL.phone}
                </a>{" "}
                to begin.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160} className="lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col gap-3">
              <Link
                to="/admissions"
                className="type-nav rounded-[3px] bg-gold-500 px-6 py-3.5 text-center text-navy-950 transition-colors hover:bg-gold-100"
              >
                How admission works
              </Link>
              <Link
                to="/contact"
                className="type-nav rounded-[3px] border border-white/40 px-6 py-3.5 text-center text-white transition-colors hover:bg-white/10"
              >
                Contact the school
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
