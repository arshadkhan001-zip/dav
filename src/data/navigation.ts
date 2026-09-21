export interface NavItem {
  label: string;
  to: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

/** Stage 1 shell navigation — labels/routes only, full design in Stage 2. */
export const PRIMARY_NAV: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Campus", to: "/campus" },
  { label: "Activities", to: "/activities" },
  { label: "Achievements", to: "/achievements" },
  { label: "Gallery", to: "/gallery" },
];

export const SECONDARY_NAV: NavItem[] = [
  { label: "Notices", to: "/notices" },
  { label: "Contact", to: "/contact" },
];

export const ADMISSIONS_CTA: NavItem = { label: "Admissions", to: "/admissions" };

export const FACULTY_LINK: NavItem = { label: "Faculty", to: "/faculty" };

export const DISCLOSURE_LINK: NavItem = { label: "Disclosure", to: "/disclosure" };

export const HELPDESK_LINK: NavItem = { label: "Help Desk", to: "/help-desk" };

/** Desktop "More" menu + drawer info group — no invented items. */
export const MORE_LINKS: NavItem[] = [FACULTY_LINK, DISCLOSURE_LINK, HELPDESK_LINK];

export const FOOTER_GROUPS: NavGroup[] = [
  {
    label: "Explore",
    items: [...PRIMARY_NAV, FACULTY_LINK],
  },
  {
    label: "Admissions & Info",
    items: [ADMISSIONS_CTA, ...SECONDARY_NAV, DISCLOSURE_LINK, HELPDESK_LINK],
  },
];
