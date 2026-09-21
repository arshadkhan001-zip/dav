/**
 * Admissions data — verified against davppspanipat.com only.
 * The reference publishes NO online form, NO eligibility/age criteria and
 * NO dates: registration happens at the school reception (phone/mail).
 * Nothing below invents requirements, dates or fees.
 */

export interface AdmissionStep {
  title: string;
  body: string;
}

export interface AdmissionDocument {
  label: string;
  detail: string;
  url: string;
}

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    title: "Register at the school",
    body: "New registrations and admissions begin with registration at the school — contact the school reception on +91-8295999200 or by mail.",
  },
  {
    title: "Avail the admission form",
    body: "The admission form is issued only after registration at the school.",
  },
  {
    title: "Fee formalities",
    body: "Read the general rules and fee-fixation norms, then use the online fee portal where applicable.",
  },
];

export const ADMISSION_DOCUMENTS: AdmissionDocument[] = [
  {
    label: "General rules and information",
    detail: "PDF · admission rules",
    url: "https://davppspanipat.com/File/64/JGA_rule.pdf",
  },
  {
    label: "Norms for fee fixation",
    detail: "PDF · fee norms",
    url: "https://davppspanipat.com/File/64/Fee%20fixation.pdf",
  },
  {
    label: "Rules to deposit fee",
    detail: "PDF · fee procedure",
    url: "https://davppspanipat.com/File/64/HRH_RULES%20TO%20DEPOSIT%20FEE.pdf",
  },
  {
    label: "Fee structure",
    detail: "PDF · from disclosure records",
    url: "https://davppspanipat.com/File/64/DEJ_Fee%20Structure.pdf",
  },
  {
    label: "Transfer certificate",
    detail: "Reference page · TC information",
    url: "https://davppspanipat.com/Transfer-Certificate",
  },
  {
    label: "Pay online fee",
    detail: "Reference page · fee portal",
    url: "https://davppspanipat.com/13286F5E-5D7D-4807-B036-B2AF829AAFF7/CMS/Page/Pay-Online-Fee",
  },
];

/** Class range verified via the 2026–27 strength statement. */
export const ADMISSION_CLASSES: string[] = [
  "Nursery",
  "LKG",
  "UKG",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];
