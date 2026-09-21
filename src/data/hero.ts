/**
 * Hero content — factual identity only.
 * Headline is DESIGN COPY for the redesign (not an official school slogan).
 * Metadata items are verified: established 2011 (first session), CBSE
 * Senior Secondary affiliation, Panipat location.
 * Image: real campus photograph (Dayanand Vatika) sourced from the
 * school's existing website slider; recompressed locally (89KB / 54KB).
 */
import { asset } from "../utils/asset";

export interface HeroImage {
  src: string;
  srcSet: string;
  alt: string;
  caption: string;
}

const wing = (id: string, alt: string, caption: string): HeroImage => {
  const src = asset(`/images/${id}-1400.jpg`);
  const small = asset(`/images/${id}-900.jpg`);
  return { src, srcSet: `${small} 900w, ${src} 1400w`, alt, caption };
};

export const HERO = {
  eyebrow: "DAV Police Public School · Panipat",
  headlineLines: ["BUILDING", "MINDS.", "SHAPING", "FUTURES."],
  supporting:
    "A CBSE-affiliated Senior Secondary school at New Police Lines, Panipat — centred on holistic learning and all-round development of students.",
  primaryCta: { label: "Admissions", to: "/admissions" },
  secondaryCta: { label: "Explore the School", to: "/about" },
  meta: ["EST. 2011", "CBSE Senior Secondary", "New Police Lines, Panipat"],
  images: [
    wing(
      "wing-senior",
      "DAV Police Public School Panipat building — Senior Wing with the school sign",
      "Senior Wing",
    ),
    wing(
      "wing-junior",
      "Junior Wing building of DAV Police Public School Panipat",
      "Junior Wing",
    ),
    wing(
      "wing-coscholastic",
      "Co-Scholastic Wing building of DAV Police Public School Panipat",
      "Co-Scholastic Wing",
    ),
    wing(
      "wing-preprimary",
      "Pre-Primary Wing entrance of DAV Police Public School Panipat",
      "Pre-Primary Wing",
    ),
  ] as HeroImage[],
  imageSizes: "(max-width: 900px) 100vw, 58vw",
  imageWidth: 1400,
  imageHeight: 875,
} as const;
