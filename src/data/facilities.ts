/**
 * Facilities data — only what the public reference documents.
 * Sources: "Our Facilities" page (14 photographed spaces),
 * "DAVPPS at a Glance 2025" (labs, ATL, infirmary, buses, CCTV, gardens,
 * playground, dining hall), and the Facilities-submenu PDFs.
 * No counts, capacities or equipment claims beyond the source wording.
 */

export type FacilityCategory =
  | "Laboratories"
  | "Library"
  | "Sports"
  | "Arts & Activity"
  | "Campus & Care";

export interface Facility {
  id: string;
  title: string;
  category: FacilityCategory;
  /** Source wording only (e.g. fleet detail); otherwise omitted. */
  detail?: string;
  imageThumb?: string;
  imageFull?: string;
  imageAlt?: string;
}

export interface FacilityDocument {
  label: string;
  detail: string;
  url: string;
}

const photo = (id: string, alt: string) => ({
  imageThumb: `/images/campus/${id}-480.jpg`,
  imageFull: `/images/campus/${id}-880.jpg`,
  imageAlt: `${alt} — DAV Police Public School, Panipat`,
});

export const FACILITY_CATEGORIES: FacilityCategory[] = [
  "Laboratories",
  "Library",
  "Sports",
  "Arts & Activity",
  "Campus & Care",
];

export const FACILITIES: Facility[] = [
  // Laboratories
  { id: "physics-lab", title: "Physics Lab", category: "Laboratories", ...photo("physics-lab", "Physics laboratory") },
  { id: "chemistry-lab", title: "Chemistry Lab", category: "Laboratories", ...photo("chemistry-lab", "Chemistry laboratory") },
  { id: "computer-lab", title: "Computer Lab", category: "Laboratories", ...photo("computer-lab", "Computer laboratory") },
  { id: "biology-lab", title: "Biology Lab", category: "Laboratories" },
  { id: "geography-lab", title: "Geography Lab", category: "Laboratories" },
  { id: "atl", title: "Atal Tinkering Lab", category: "Laboratories", detail: "First school ATL in Panipat" },
  // Library
  { id: "senior-library", title: "Senior Library", category: "Library", ...photo("library", "Students in the senior library") },
  // Sports
  { id: "basketball", title: "Basketball Ground", category: "Sports", ...photo("basketball", "Basketball ground") },
  { id: "football", title: "Football Ground", category: "Sports", ...photo("football", "Football ground") },
  { id: "boxing-rink", title: "Boxing Ring", category: "Sports", detail: "First school boxing ring in Panipat" },
  { id: "skating-rink", title: "Skating Rink", category: "Sports" },
  { id: "martial-art", title: "Martial Art Room", category: "Sports" },
  { id: "cricket", title: "Cricket Ground", category: "Sports" },
  { id: "kabaddi", title: "Kabaddi Ground", category: "Sports" },
  { id: "tennis", title: "Lawn Tennis Court", category: "Sports" },
  { id: "badminton", title: "Badminton Court", category: "Sports" },
  { id: "table-tennis", title: "Table Tennis", category: "Sports" },
  // Arts & Activity
  { id: "activity-room", title: "Activity Room", category: "Arts & Activity" },
  { id: "draw-paint", title: "Draw & Paint Room", category: "Arts & Activity" },
  { id: "clay-modelling", title: "Clay Modelling Room", category: "Arts & Activity" },
  { id: "music-instrumental", title: "Music Instrumental Room", category: "Arts & Activity" },
  { id: "music-vocal", title: "Music Vocal Room", category: "Arts & Activity" },
  { id: "dance-room", title: "Dance Room", category: "Arts & Activity" },
  { id: "judo-room", title: "Judo Room", category: "Arts & Activity" },
  // Campus & Care
  { id: "smart-classrooms", title: "Smart Class Rooms", category: "Campus & Care" },
  { id: "bus-fleet", title: "School Transport", category: "Campus & Care", detail: "Fleet of 41 buses equipped with CCTV & GPS" },
  { id: "cctv", title: "CCTV Surveillance", category: "Campus & Care", detail: "24×7 campus surveillance" },
  { id: "infirmary", title: "Infirmary", category: "Campus & Care" },
  { id: "dining-hall", title: "Dining Hall", category: "Campus & Care" },
  { id: "gardens", title: "Thematic Gardens", category: "Campus & Care", detail: "Geographical, Maths, Botanical, Science, Rose and Tulsi gardens" },
];

export const FACILITY_DOCUMENTS: FacilityDocument[] = [
  {
    label: "Infrastructure overview",
    detail: "PDF · campus infrastructure",
    url: "https://davppspanipat.com/File/64/infrastructure.pdf",
  },
  {
    label: "School transport and uniform",
    detail: "PDF · routes and uniform",
    url: "https://davppspanipat.com/File/64/9E2_transport.pdf",
  },
  {
    label: "Library rules and leave rules",
    detail: "PDF · library and leave",
    url: "https://davppspanipat.com/File/64/3KA_lib%20rule.pdf",
  },
];
