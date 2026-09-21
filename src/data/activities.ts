/**
 * Activities data — verified against davppspanipat.com only.
 * Sources: "ACTIVITIES" nav (Creative Clubs / House System / Major Events 2026 /
 * Activity Planner PDFs, Co-Curricular Activities page) and the homepage
 * "inside school" event listings + slider captions.
 *
 * No invented events, dates, winners or participation figures. Dates appear
 * only where the source states them.
 */

export interface ActivityCategory {
  id: string;
  name: string;
  blurb: string;
  href: string;
  kind: "pdf" | "page";
}

export interface ActivityHighlight {
  id: string;
  title: string;
  /** ISO date — present only when the source states one. */
  dateISO?: string;
  href?: string;
}

export const ACTIVITY_CATEGORIES: ActivityCategory[] = [
  {
    id: "house-system",
    name: "House System",
    blurb: "Inter-house structure of the school.",
    href: "https://davppspanipat.com/File/64/G94_HOUSE%20SYSTEM.pdf",
    kind: "pdf",
  },
  {
    id: "creative-clubs",
    name: "Creative Clubs",
    blurb: "Club programme overview.",
    href: "https://davppspanipat.com/File/64/XXC_CREATIVE%20CLUBS.pdf",
    kind: "pdf",
  },
  {
    id: "major-events",
    name: "Inter-House Activities & Major Events",
    blurb: "2026 calendar of house events.",
    href: "https://davppspanipat.com/File/64/X9V_MAJOR%20EVENTS%202026.pdf",
    kind: "pdf",
  },
  {
    id: "activity-planner",
    name: "Activity Planner",
    blurb: "Year planner for activities.",
    href: "https://davppspanipat.com/File/64/UQR_ACTIVITY%20PLANNER.pdf",
    kind: "pdf",
  },
  {
    id: "co-curricular",
    name: "Co-Curricular Activities",
    blurb: "Programme page on the school site.",
    href: "https://davppspanipat.com/D241CC57-371C-4874-9B24-00E881489078/CMS/Page/Co--Curricular-Activities",
    kind: "page",
  },
];

export const ACTIVITY_HIGHLIGHTS: ActivityHighlight[] = [
  {
    id: "kundiya-hawan-2025",
    title: "101 Kundiya Hawan — No Nasha Nation Campaign",
    dateISO: "2025-12-07",
    href: "https://www.facebook.com/share/p/1D3UrCMMkX/",
  },
  {
    id: "national-sports-day",
    title: "National Sports Day celebration",
  },
  {
    id: "decoration-nur-ii",
    title: "Decoration activity (Nursery – II)",
  },
  {
    id: "colouring-nur-ukg",
    title: "Colouring competition (Nursery – UKG)",
  },
];
