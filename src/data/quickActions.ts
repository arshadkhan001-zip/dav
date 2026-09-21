/**
 * Quick actions — the reference homepage's five shortcuts with their real,
 * verified destinations on davppspanipat.com. All external; nothing invented.
 */

export type QuickActionIcon = "briefcase" | "receipt" | "globe" | "card" | "building";

export interface QuickActionItem {
  title: string;
  detail: string;
  href: string;
  icon: QuickActionIcon;
}

export const QUICK_ACTIONS: QuickActionItem[] = [
  {
    title: "Vacancies",
    detail: "Open posts & recruitment",
    href: "https://davppspanipat.com/8895CBE6-AFC3-4EDF-8870-2B8EA4C80586/CMS/Page/Vacancies",
    icon: "briefcase",
  },
  {
    title: "Rules to Deposit Fee",
    detail: "Fee procedure · PDF",
    href: "https://davppspanipat.com/File/64/HRH_RULES%20TO%20DEPOSIT%20FEE.pdf",
    icon: "receipt",
  },
  {
    title: "Our Facebook Page",
    detail: "Photos & announcements",
    href: "https://www.facebook.com/davppspanipat/",
    icon: "globe",
  },
  {
    title: "Pay Online Fee",
    detail: "Fee portal",
    href: "https://davppspanipat.com/13286F5E-5D7D-4807-B036-B2AF829AAFF7/CMS/Page/Pay-Online-Fee",
    icon: "card",
  },
  {
    title: "Infrastructure",
    detail: "Campus & facilities",
    href: "/campus",
    icon: "building",
  },
];
