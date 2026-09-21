/**
 * Achievements data — verified items only.
 * Board figures from the SARAS disclosure; highlight documents from the
 * school's notice board; sporting/civic distinctions as listed on the
 * school's homepage ("inside school" achievements). No positions, scores
 * or winners beyond what the source states.
 */

export interface BoardResult {
  year: string;
  className: string;
  passed: number;
  registered: number;
  percentage: number;
}

export interface ResultHighlight {
  title: string;
  href: string;
  kind: "pdf" | "image" | "post";
}

export interface Recognition {
  title: string;
  context: string;
}

export const BOARD_RESULTS_2026: BoardResult[] = [
  { year: "2026", className: "Class X", passed: 239, registered: 254, percentage: 94.9 },
  { year: "2026", className: "Class XII", passed: 269, registered: 284, percentage: 95 },
];

export const RESULT_HIGHLIGHTS: ResultHighlight[] = [
  {
    title: "CBSE Class XII result highlights",
    href: "https://davppspanipat.com/File/64/PT2_WhatsApp%20Image%202025-05-14%20at%208.40.17%20AM.jpeg",
    kind: "image",
  },
  {
    title: "Consolidated board result, last 3 years",
    href: "https://davppspanipat.com/File/64/LGR_LAST%203%20YEAR%20RESULT.pdf",
    kind: "pdf",
  },
  {
    title: "Class XII result highlights 2022–23 (school post)",
    href: "https://www.facebook.com/davppspanipat/posts/pfbid0e4ZEtp29R7WsMwtFkQ5t4hKjSEGkB1a7AmaQwdYymdyXRct9tAU8vndAnPrcjfdNl",
    kind: "post",
  },
];

export const RECOGNITIONS: Recognition[] = [
  { title: "DAV National Sports", context: "As listed in school achievements" },
  { title: "SGFI District Tournament", context: "As listed in school achievements" },
  {
    title: "Haryana State Bharat Scouts and Guides",
    context: "As listed in school achievements",
  },
];
