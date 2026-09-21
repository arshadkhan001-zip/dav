import { useCallback, useState } from "react";
import type { GalleryImage } from "../../data/gallery";
import { Lightbox } from "./Lightbox";

/**
 * Thumbnail grid with built-in lightbox. Thumbs lazy-load with reserved
 * 3:2 aspect boxes (no layout shift); full images load on viewer open.
 */
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const step = useCallback(
    (delta: 1 | -1) => {
      setIndex((i) => (i === null ? null : (i + delta + images.length) % images.length));
    },
    [images.length],
  );

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {images.map((image, i) => (
          <li key={image.id}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open photograph: ${image.title}`}
              className="group block w-full overflow-hidden rounded-[4px] border border-line bg-paper-2 text-left"
            >
              <span className="block aspect-[3/2] overflow-hidden">
                <img
                  src={image.thumb}
                  alt=""
                  width={480}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </span>
              <span className="type-small block truncate px-3 py-2.5 text-ink/80">
                {image.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox images={images} index={index} onClose={() => setIndex(null)} onStep={step} />
    </>
  );
}
