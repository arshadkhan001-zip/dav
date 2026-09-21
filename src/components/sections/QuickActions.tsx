import { QUICK_ACTIONS } from "../../data/quickActions";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";
import { QuickAction } from "../ui/QuickAction";

/**
 * STAGE 6 — quick actions strip.
 * The reference homepage's five shortcuts, data-driven through one
 * reusable QuickAction component, real destinations only.
 */
export function QuickActions() {
  return (
    <section aria-labelledby="quick-actions-heading" className="bg-paper-2/60">
      <Container className="section-pad-sm">
        <Reveal>
          <Eyebrow>Quick actions</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 id="quick-actions-heading" className="type-heading-lg mt-3 font-display font-medium text-navy-900">
            Everyday tasks, one tap away.
          </h2>
        </Reveal>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {QUICK_ACTIONS.map((action, i) => (
            <Reveal key={action.title} delay={i * 60}>
              <QuickAction action={action} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
