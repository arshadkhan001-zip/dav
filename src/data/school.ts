/**
 * Verified school identity only (source: davppspanipat.com header/footer).
 * Anything not verified lives nowhere — no invented numbers.
 */
export const SCHOOL = {
  name: "DAV Police Public School",
  place: "Panipat",
  addressLines: ["New Police Lines, G.T. Road,", "Panipat — 132103, Haryana"],
  phone: "+91-8295999200",
  phoneHref: "tel:+918295999200",
  email: "davpps.pnp@gmail.com",
  emailHref: "mailto:davpps.pnp@gmail.com",
  website: "davppspanipat.com",
  affiliation: "Affiliated to CBSE, New Delhi for Senior Secondary Level",
  facebook: "https://www.facebook.com/davppspanipat/",
  atlFacebook: "https://www.facebook.com/ATLDAVPPSPNP",
} as const;

export interface SchoolStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
}

/**
 * Homepage introduction — verified facts only.
 * Sources: davppspanipat.com ("About School", "At a Glance 2025",
 * "Tentative Student Strength 2026-27"). Headline is design copy,
 * not an official school slogan.
 */
export const INTRO = {
  eyebrow: "About DAV Police Public School",
  headingLines: ["Education that extends", "beyond the classroom."],
  body: [
    "DAV Police Public School, Panipat is a Senior Secondary school affiliated to the Central Board of Secondary Education, New Delhi, run under the D.A.V. College Managing Committee at New Police Lines, G.T. Road, Panipat.",
    "Its first session began in April 2011 with 354 students and 11 staff members. The school has since grown to around 2,600 students and some 104 staff across an eleven-acre campus.",
  ],
  link: { label: "Discover the school", to: "/about" },
} as const;

/**
 * Key facts — every value verified in "DAVPPS at a Glance 2025".
 * Unverifiable figures are omitted entirely (Stage 4 rule).
 */
export const STATS: SchoolStat[] = [
  {
    value: 2011,
    label: "Established",
    sub: "First session · April 2011",
  },
  {
    value: 11,
    suffix: " acres",
    label: "Campus",
    sub: "Area covered · approx.",
  },
  {
    value: 2600,
    prefix: "~",
    label: "Students",
    sub: "On roll · around 2,600",
  },
  {
    value: 104,
    prefix: "~",
    label: "Staff members",
    sub: "Teaching + support · approx.",
  },
];

export const STATS_SOURCE = "Figures from the school's “At a Glance 2025” overview.";
