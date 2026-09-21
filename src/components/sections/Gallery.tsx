import { Link } from "react-router-dom";
import { GALLERY_IMAGES } from "../../data/gallery";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";
import { GalleryGrid } from "../gallery/GalleryGrid";

/**
 * STAGE 9 — Gallery preview (homepage). First six photographs with
 * lightbox; the full set lives on /gallery.
 */
export function Gallery() {
  return (
    <Section labelledBy="gallery-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Reveal>
            <Eyebrow>Gallery</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h2 id="gallery-heading" className="type-heading-xl mt-4 text-navy-900">
              Moments from campus.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <Link
            to="/gallery"
            className="type-nav inline-flex items-center gap-2 text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8 hover:decoration-gold-600"
          >
            View gallery
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
      <Reveal delay={140}>
        <div className="mt-8">
          <GalleryGrid images={GALLERY_IMAGES.slice(0, 6)} />
        </div>
      </Reveal>
    </Section>
  );
}
