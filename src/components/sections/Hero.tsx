import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { HERO } from "../../data/hero";
import { ButtonLink } from "../ui/Button";
import { useElementScrollProgress } from "../../hooks/useElementScrollProgress";
import { useReducedMotion } from "../../utils/motion";
import { cx } from "../../utils/cx";

function delayStyle(seconds: number): CSSProperties {
  return { "--hero-delay": `${seconds}s` } as CSSProperties;
}

const ROTATE_MS = 6000;

/**
 * Cinematic hero with a 4-photograph campus slider (one per school wing).
 * Crossfade only; autoplay pauses on hover/focus and is off entirely under
 * reduced motion. Dots + prev/next are keyboard-accessible buttons.
 * Scroll exit is differential and restrained: headline rises fastest,
 * body follows, CTAs fade, image settles a touch deeper. No re-renders —
 * direct style writes via a rAF-throttled progress hook.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = HERO.images.length;

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + total) % total),
    [total],
  );

  useEffect(() => {
    if (reduced || paused || total < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reduced, paused, total]);

  const onProgress = useCallback((p: number) => {
    const headline = headlineRef.current;
    const body = bodyRef.current;
    const cta = ctaRef.current;
    const image = imageRef.current;
    if (p === 0) {
      for (const el of [headline, body, cta, image]) {
        if (!el) continue;
        el.style.transform = "";
        el.style.opacity = "";
      }
      return;
    }
    if (headline) {
      headline.style.transform = `translate3d(0, ${(-60 * p).toFixed(1)}px, 0)`;
      headline.style.opacity = (1 - 0.6 * p).toFixed(3);
    }
    if (body) {
      body.style.transform = `translate3d(0, ${(-35 * p).toFixed(1)}px, 0)`;
      body.style.opacity = (1 - 0.4 * p).toFixed(3);
    }
    if (cta) {
      cta.style.transform = `translate3d(0, ${(-20 * p).toFixed(1)}px, 0)`;
      cta.style.opacity = (1 - 0.8 * p).toFixed(3);
    }
    if (image) {
      image.style.transform = `translate3d(0, ${(30 * p).toFixed(1)}px, 0) scale(${(1 + 0.04 * p).toFixed(4)})`;
    }
  }, []);

  useElementScrollProgress(sectionRef, onProgress, reduced);

  const active = HERO.images[index]!;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92svh] items-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[80rem] px-4 py-14 sm:px-6 lg:py-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Text region — three scroll planes: headline, body, CTAs */}
          <div className="lg:col-span-5">
            <div ref={headlineRef}>
              <p className="hero-enter type-eyebrow" style={delayStyle(0.05)}>
                {HERO.eyebrow}
              </p>
              <h1 id="hero-heading" className="type-hero mt-6 text-navy-900">
                {HERO.headlineLines.map((line, i) => (
                  <span key={line} className="hero-line-mask">
                    <span className="hero-line-inner" style={delayStyle(0.12 + i * 0.09)}>
                      {line}
                    </span>
                  </span>
                ))}
              </h1>
            </div>
            <div ref={bodyRef}>
              <p className="hero-enter type-body-lg mt-7 max-w-xl text-muted" style={delayStyle(0.48)}>
                {HERO.supporting}
              </p>
              <dl
                className="hero-enter mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-5"
                style={delayStyle(0.64)}
                aria-label="School facts"
              >
                {HERO.meta.map((fact) => (
                  <div key={fact}>
                    <dt className="sr-only">Fact</dt>
                    <dd className="type-small font-medium tracking-wide text-navy-900">{fact}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div ref={ctaRef} className="hero-enter mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={delayStyle(0.56)}>
              <ButtonLink to={HERO.primaryCta.to} className="w-full sm:w-auto">{HERO.primaryCta.label}</ButtonLink>
              <ButtonLink to={HERO.secondaryCta.to} variant="outline" className="w-full sm:w-auto">
                {HERO.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          {/* Slider region */}
          <div ref={imageRef} className="lg:col-span-7">
            <figure className="hero-frame relative" style={delayStyle(0.28)}>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 hidden h-full w-full rounded-md border border-gold-500/60 sm:block"
                />
                <div
                  role="region"
                  aria-roledescription="carousel"
                  aria-label="Campus photographs"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  onFocus={() => setPaused(true)}
                  onBlur={() => setPaused(false)}
                  className="relative aspect-[16/10] overflow-hidden rounded-md border border-line bg-paper-2 shadow-lifted"
                >
                {HERO.images.map((image, i) => (
                  <img
                    key={image.src}
                    src={image.src}
                    srcSet={image.srcSet}
                    sizes={HERO.imageSizes}
                    width={HERO.imageWidth}
                    height={HERO.imageHeight}
                    alt={i === index ? image.alt : ""}
                    aria-hidden={i === index ? undefined : true}
                    fetchPriority={i === 0 ? "high" : undefined}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={cx(
                      "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                      i === index ? "opacity-100" : "pointer-events-none opacity-0",
                    )}
                  />
                ))}
              </div>
              </div>
              <figcaption className="relative mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="flex items-center gap-3">
                  <span aria-hidden="true" className="rule-gold" />
                  <span key={active.caption} className="type-small text-muted">
                    {active.caption} — on campus
                  </span>
                </span>
                <span className="ml-auto flex items-center gap-2">
                  <span className="flex items-center gap-1.5" role="group" aria-label="Choose photograph">
                    {HERO.images.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Show photograph ${i + 1}: ${image.caption}`}
                        aria-current={i === index ? "true" : undefined}
                        className="flex h-6 items-center px-1"
                      >
                        <span
                          aria-hidden="true"
                          className={cx(
                            "block h-2 rounded-full transition-all duration-300",
                            i === index ? "w-6 bg-gold-600" : "w-2 bg-navy-900/25",
                          )}
                        />
                      </button>
                    ))}
                  </span>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous photograph"
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-navy-900/20 text-navy-900 transition-colors hover:bg-navy-100/60"
                  >
                    <span aria-hidden="true">←</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next photograph"
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-navy-900/20 text-navy-900 transition-colors hover:bg-navy-100/60"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
