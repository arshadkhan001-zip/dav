/**
 * Mandatory disclosure data — verified against the reference site's
 * "Mandatory Public Disclosure" page and its SARAS disclosure document
 * (Appendix-IX, Mandatory Public Disclosure).
 * Every value below appears in those public sources. Nothing guessed.
 */

export interface DisclosureRow {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

export interface DisclosureSection {
  id: string;
  title: string;
  rows: DisclosureRow[];
}

export interface DisclosureDocument {
  label: string;
  detail: string;
  url: string;
}

const FILE = "https://davppspanipat.com/File/64";

export const DISCLOSURE_SECTIONS: DisclosureSection[] = [
  {
    id: "general",
    title: "General information",
    rows: [
      { label: "Name of the school", value: "DAV Police Public School, Panipat, Haryana" },
      { label: "Affiliation number", value: "531112" },
      { label: "School code", value: "41084" },
      {
        label: "Address",
        value: "DAV Police Public School, Police Line, G.T. Road, Panipat — 132103",
      },
      { label: "Principal", value: "Ms. Sumita" },
      {
        label: "Principal qualification",
        value: "M.Sc Geography, M.Ed, M.Phil (Geography), UGC NET",
      },
      { label: "Management", value: "D.A.V. College Managing Committee, New Delhi" },
      { label: "Affiliation", value: "CBSE, New Delhi — Senior Secondary level" },
      { label: "Classes offered", value: "Nursery to XII" },
      {
        label: "School email",
        value: "davpps.pnp@gmail.com",
        href: "mailto:davpps.pnp@gmail.com",
      },
      { label: "Contact", value: "+91-8295999200", href: "tel:+918295999200" },
    ],
  },
  {
    id: "infrastructure",
    title: "School infrastructure",
    rows: [
      { label: "Total campus area", value: "20,234 sq. mtr." },
      { label: "Classrooms", value: "77 (40 sq. mtr. each)" },
      { label: "Laboratories (incl. computer labs)", value: "7 (110 sq. mtr. each)" },
      { label: "Internet facility", value: "Yes" },
      { label: "Girls toilets", value: "30" },
      { label: "Boys toilets", value: "30" },
      {
        label: "Inspection video",
        value: "YouTube — infrastructure inspection",
        href: "https://youtu.be/b7aGDbx5b2Q",
        external: true,
      },
    ],
  },
  {
    id: "staff",
    title: "Staff summary",
    rows: [
      { label: "Total teachers", value: "96 (PGT 18 · TGT 37 · PRT 22)" },
      { label: "Teacher–section ratio", value: "1.34 : 1" },
      { label: "Special educator", value: "01" },
      { label: "Counsellor and wellness teachers", value: "05" },
    ],
  },
  {
    id: "results",
    title: "Board results 2026",
    rows: [
      { label: "Class X", value: "239 of 254 passed · 94.9%" },
      { label: "Class XII", value: "269 of 284 passed · 95%" },
    ],
  },
];

export const DISCLOSURE_DOCUMENTS: DisclosureDocument[] = [
  { label: "Mandatory disclosure document (SARAS)", detail: "PDF · Appendix-IX", url: `${FILE}/QNG_Mandatory%20Disclosure%20Details%20_%20SARAS%207.9.26.pdf` },
  { label: "Affiliation letter", detail: "PDF", url: `${FILE}/AFFILIATIONLETTER.pdf` },
  { label: "Trust / society certificate", detail: "PDF", url: `${FILE}/TRUSTCERTIFICATE.pdf` },
  { label: "No Objection Certificate (NOC)", detail: "PDF", url: `${FILE}/NOC.pdf` },
  { label: "Recognition certificate (RTE)", detail: "PDF", url: `${FILE}/RECOGNITIONCERTIFICATE.pdf` },
  { label: "Building safety certificate", detail: "PDF", url: `${FILE}/YA7_Building%20Safety%20certificate%20.pdf` },
  { label: "Fire safety certificate", detail: "Image", url: `${FILE}/VLF_Fire%20certificate.jpeg` },
  { label: "Self certification for affiliation", detail: "PDF", url: `${FILE}/HXA_self%20certification%20.pdf` },
  { label: "Water, health and sanitation certificates", detail: "PDF", url: `${FILE}/9JW_water%20senitation.pdf` },
  { label: "Fee structure", detail: "PDF", url: `${FILE}/DEJ_Fee%20Structure.pdf` },
  { label: "School management committee", detail: "PDF · SMC members", url: `${FILE}/LUD_lmc%20members.pdf` },
  { label: "Parents teachers association", detail: "Image · PTA members", url: `${FILE}/69Z_aa.jpeg` },
  { label: "Last three-year board result", detail: "PDF", url: `${FILE}/LGR_LAST%203%20YEAR%20RESULT.pdf` },
  { label: "Declaration for textbooks", detail: "PDF", url: `${FILE}/7WG_TEXTBOOK%20DECLARATION.pdf` },
  { label: "Self affidavit", detail: "PDF", url: `${FILE}/7FC_SELF%20DEC.pdf` },
];
