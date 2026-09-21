/**
 * Shared IntersectionObserver for all scroll reveals.
 * One observer for the whole app (not one per component): targets are
 * registered in a map, fired once, then unobserved and dropped.
 * Threshold 0.15 with a small bottom margin so reveals trigger just
 * before fully entering — no repeated work, no per-frame cost.
 */

type RevealCallback = () => void;

const targets = new Map<Element, RevealCallback>();
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          targets.get(entry.target)?.();
          targets.delete(entry.target);
          observer?.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
  }
  return observer;
}

/** Observe once; returns an unsubscribe for unmount cleanup. */
export function observeReveal(element: Element, callback: RevealCallback): () => void {
  targets.set(element, callback);
  getObserver().observe(element);
  return () => {
    targets.delete(element);
    observer?.unobserve(element);
  };
}
