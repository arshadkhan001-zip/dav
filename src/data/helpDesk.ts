/**
 * Help desk data — only intentionally published contact points.
 * The reference Help Desk hub is a link collection (Contact page, PTM chart,
 * Terms, Facebook pages); it hosts no enquiry form, so none is recreated.
 * Email verified via the SARAS disclosure + strength statement.
 */

export interface HelpContact {
  label: string;
  value: string;
  href: string;
}

export interface HelpLink {
  label: string;
  detail: string;
  url: string;
  external: boolean;
}

export const HELP_CONTACTS: HelpContact[] = [
  { label: "School reception", value: "+91-8295999200", href: "tel:+918295999200" },
  { label: "Email", value: "davpps.pnp@gmail.com", href: "mailto:davpps.pnp@gmail.com" },
  {
    label: "Address",
    value: "New Police Lines, G.T. Road, Panipat — 132103, Haryana",
    href: "/contact",
  },
];

export const HELP_LINKS: HelpLink[] = [
  {
    label: "Admissions enquiry",
    detail: "Internal · procedure and demo enquiry form",
    url: "/admissions",
    external: false,
  },
  {
    label: "Pay online fee",
    detail: "Reference page · fee portal",
    url: "https://davppspanipat.com/13286F5E-5D7D-4807-B036-B2AF829AAFF7/CMS/Page/Pay-Online-Fee",
    external: true,
  },
  {
    label: "Parent–teacher meeting chart",
    detail: "Image · PTM schedule",
    url: "https://davppspanipat.com/File/64/ptm.jpg",
    external: true,
  },
  {
    label: "Terms and conditions",
    detail: "Reference page",
    url: "https://davppspanipat.com/AEBC81D2-11D1-4353-82BB-A54BC8CD3FD9/CMS/Page/Terms-and-Conditions",
    external: true,
  },
  {
    label: "School Facebook page",
    detail: "Photos and announcements",
    url: "https://www.facebook.com/davppspanipat/",
    external: true,
  },
  {
    label: "ATL Facebook page",
    detail: "Atal Tinkering Lab updates",
    url: "https://www.facebook.com/ATLDAVPPSPNP",
    external: true,
  },
];
