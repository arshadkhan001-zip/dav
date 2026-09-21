import { useCallback, useEffect, useRef } from "react";
import type { GalleryImage } from "../../data/gallery";

interface LightboxProps {
  images: GalleryImage[];
  /** Null = closed. */
  index: number | null;
  onClose: () => void;
  onStep: (delta: 1 | -1) => void;
}

/**
 * Accessible image viewer — no animation library, instant show/hide
 * (reduced-motion safe by construction).
 * Esc closes · arrows step · overlay click closes · focus is moved in
 * and restored to the triggering element on close · body scroll locked.
 */
export function Lightbox({ images, index, onClose, onStep }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<Element | null>(null);

  const open = index !== null;
  const image = open ? images[index] : undefined;

  const step = useCallback(
    (delta: 1 | -1) => {
      if (index === null) return;
      onStep(delta);
    },
    [index, onStep],
  );

  useEffect(() => {
    if (!open) return;
    restoreRef.current = document.activeElement;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      (restoreRef.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose, step]);

  if (!open || !image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${image.title} — image ${index! + 1} of ${images.length}`}
      className="fixed inset-0 z-[70] flex flex-col bg-navy-950/95 p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 py-2">
        <p className="type-small text-white/70">
          {index! + 1} of {images.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-white/30 text-white hover:bg-white/10"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div
        className="mx-auto flex w-full max-w-5xl flex-1 items-center justify-center gap-2 sm:gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous image"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] border border-white/30 text-white hover:bg-white/10"
        >
          <span aria-hidden="true">←</span>
        </button>
        <figure className="min-w-0 flex-1 text-center">
          <img
            key={image.id}
            src={image.full}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="mx-auto max-h-[68vh] w-auto max-w-full rounded-[4px] object-contain"
          />
          <figcaption className="type-body mt-3 text-white">{image.title}</figcaption>
        </figure>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next image"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] border border-white/30 text-white hover:bg-white/10"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
