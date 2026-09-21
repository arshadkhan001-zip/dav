/**
 * Notice board data — reproduced from publicly visible notices on
 * davppspanipat.com (homepage Notice Board, as observed).
 * Every item links to its real document/post. No invented announcements.
 * Full archive + filtering arrive with the Notices page (later stage).
 */

export type NoticeCategory = "Tender" | "Recruitment" | "Result" | "Event" | "General";

export interface Notice {
  id: string;
  title: string;
  /** ISO date as shown on the reference notice board. */
  dateISO: string;
  category: NoticeCategory;
  /** Real destination: PDF / image / post. */
  href: string;
  /** Link behaviour hint for the UI. */
  kind: "pdf" | "image" | "post" | "page";
}

export const NOTICES: Notice[] = [
  {
    id: "bus-sale-quotation-2026",
    title: "Bus sale — quotation proforma",
    dateISO: "2026-04-01",
    category: "Tender",
    href: "https://davppspanipat.com/File/64/RDR_BUS%20SALE%20QUOTATION%20PROFORMA.pdf",
    kind: "pdf",
  },
  {
    id: "recruitment-form-2026",
    title: "Recruitment form — teaching & staff posts",
    dateISO: "2026-03-31",
    category: "Recruitment",
    href: "https://davppspanipat.com/File/64/JAT_RECRUITMENT%20FORM.pdf",
    kind: "pdf",
  },
  {
    id: "no-nasha-campaign",
    title: "No Nasha Nation campaign — photos, 07.12.2025",
    dateISO: "2025-12-07",
    category: "Event",
    href: "https://www.facebook.com/share/p/1D3UrCMMkX/",
    kind: "post",
  },
  {
    id: "yagya-shala-quotation",
    title: "Inviting quotation for Yagya Shala construction",
    dateISO: "2025-11-20",
    category: "Tender",
    href: "https://davppspanipat.com/File/64/M9A_CONSTRUCTION%20OF%20YAGYA%20SHALA.pdf",
    kind: "pdf",
  },
  {
    id: "form-5a",
    title: "Form 5A",
    dateISO: "2025-11-21",
    category: "General",
    href: "https://davppspanipat.com/File/64/R3K_FORM%205A.pdf",
    kind: "pdf",
  },
  {
    id: "uniform-quotation-2025",
    title: "Uniform — quotation proforma",
    dateISO: "2025-11-01",
    category: "Tender",
    href: "https://davppspanipat.com/File/64/YL4_Uniform%20quotation%20proforma.pdf",
    kind: "pdf",
  },
  {
    id: "xii-result-highlights-2025",
    title: "CBSE Class XII result highlights",
    dateISO: "2025-05-14",
    category: "Result",
    href: "https://davppspanipat.com/File/64/PT2_WhatsApp%20Image%202025-05-14%20at%208.40.17%20AM.jpeg",
    kind: "image",
  },
];

export function formatNoticeDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y!, m! - 1, d!).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
