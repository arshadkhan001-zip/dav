import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { GALLERY_IMAGES } from "../data/gallery";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Reveal } from "../components/ui/Reveal";
import { GalleryGrid } from "../components/gallery/GalleryGrid";

/**
 * STAGE 9 — Photo Gallery page.
 * Mirrors the reference gallery's flat album-cover list (titles are the
 * school's own). No video gallery exists on the reference — none added.
 * Full album contents live behind the school's viewer; covers shown here.
 */
export function GalleryPage() {
  useDocumentTitle("Gallery");

  return (
    <>
      <Section spacing="sm" labelledBy="gallery-page-heading">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Gallery" }]} />
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow className="mt-6">Gallery</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 id="gallery-page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
            Photographs from school life.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="type-body-lg mt-4 max-w-2xl text-muted">
            A selection from the school's photo albums — sports, celebrations,
            activities and everyday moments. Select any photograph to view it.
          </p>
        </Reveal>
      </Section>

      <Section spacing="sm">
        <GalleryGrid images={GALLERY_IMAGES} />
        <p className="type-small mt-6 text-muted">
          Showing {GALLERY_IMAGES.length} album covers from the school's photo gallery;
          the complete archive of 50+ albums lives on the school's gallery page.
        </p>
        <p className="mt-10">
          <Link
            to="/"
            className="type-nav inline-flex items-center gap-2 text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8 hover:decoration-gold-600"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>
        </p>
      </Section>
    </>
  );
}
