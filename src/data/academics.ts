/**
 * Academics data — verified facts only.
 * Sources (davppspanipat.com):
 * - "Subject Combination" page (Class XI streams + subjects)
 * - "Curriculum" page (I–VIII via DAV CAE, IX–XII via CBSE)
 * - "Tentative Student Strength 2026-27" (class range Nursery–XII)
 * - Academic Planner / PTM schedule / Book list / 3-year result PDFs
 *
 * Level groupings (Primary I–V, Middle VI–VIII, Secondary IX–X,
 * Senior Secondary XI–XII) follow the standard CBSE/DAV division and the
 * site's verified I–VIII / IX–XII curriculum split. No subjects are listed
 * for levels where the source publishes none.
 */

export interface SubjectRow {
  /** One subject slot; multiple options = verified alternatives ("A / B"). */
  options: string[];
}

export interface Stream {
  name: string;
  blurb: string;
  subjects: SubjectRow[];
}

export interface AcademicLevel {
  id: string;
  label: string;
  classes: string;
  curriculum: string;
  curriculumUrl?: string;
  note: string;
  streams?: Stream[];
}

export interface AcademicResource {
  label: string;
  detail: string;
  url: string;
}

const s = (options: string[]): SubjectRow => ({ options });

export const ACADEMIC_LEVELS: AcademicLevel[] = [
  {
    id: "primary",
    label: "Primary",
    classes: "I – V",
    curriculum: "DAV curriculum",
    curriculumUrl: "http://davcae.net.in/",
    note: "Classes I to V follow the DAV curriculum with continuous classroom assessment.",
  },
  {
    id: "middle",
    label: "Middle",
    classes: "VI – VIII",
    curriculum: "DAV curriculum",
    curriculumUrl: "http://davcae.net.in/",
    note: "Classes VI to VIII follow the DAV curriculum, building towards CBSE secondary study.",
  },
  {
    id: "secondary",
    label: "Secondary",
    classes: "IX – X",
    curriculum: "CBSE curriculum",
    curriculumUrl: "https://cbseacademic.nic.in/curriculum_2027.html",
    note: "Classes IX and X follow the CBSE curriculum, leading to the Class X board examination.",
  },
  {
    id: "senior",
    label: "Senior Secondary",
    classes: "XI – XII",
    curriculum: "CBSE curriculum",
    curriculumUrl: "https://cbseacademic.nic.in/curriculum_2027.html",
    note: "Classes XI and XII follow the CBSE curriculum with three elective streams.",
    streams: [
      {
        name: "Science",
        blurb: "Physics, Chemistry and a choice of Biology or Mathematics.",
        subjects: [
          s(["English"]),
          s(["Physics"]),
          s(["Chemistry"]),
          s(["Biology", "Mathematics"]),
          s(["Physical Education", "Informatics Practices"]),
          s(["Painting", "Artificial Intelligence"]),
        ],
      },
      {
        name: "Commerce",
        blurb: "Business Studies, Accountancy and Economics at the core.",
        subjects: [
          s(["English"]),
          s(["Business Studies"]),
          s(["Accountancy"]),
          s(["Economics"]),
          s(["Physical Education", "Informatics Practices", "Mathematics"]),
          s(["Painting", "Artificial Intelligence", "Banking"]),
        ],
      },
      {
        name: "Humanities",
        blurb: "Political Science and History with flexible electives.",
        subjects: [
          s(["English"]),
          s(["Political Science"]),
          s(["History"]),
          s(["Hindi", "Economics", "Mathematics"]),
          s(["Physical Education", "Informatics Practices"]),
          s(["Painting", "Artificial Intelligence"]),
        ],
      },
    ],
  },
];

export const EARLY_YEARS_NOTE =
  "Early years — the school also runs Nursery, LKG and UKG.";

export const ACADEMIC_RESOURCES: AcademicResource[] = [
  {
    label: "Academic planner 2026–27",
    detail: "PDF · school calendar",
    url: "https://davppspanipat.com/File/64/DEA_ACADEMIC%20CALENDER%202026-27.pdf",
  },
  {
    label: "Assessment & PTM schedule",
    detail: "PDF · assessments and meetings",
    url: "https://davppspanipat.com/File/64/MZF_PTM%20and%20schedule.pdf",
  },
  {
    label: "List of textbooks",
    detail: "PDF · prescribed books",
    url: "https://davppspanipat.com/File/64/96W_BOOK%20LIST.pdf",
  },
  {
    label: "Consolidated result, last 3 years",
    detail: "PDF · board outcomes",
    url: "https://davppspanipat.com/File/64/LGR_LAST%203%20YEAR%20RESULT.pdf",
  },
];

/**
 * Academic documents shelf — every URL verified on the reference site.
 * Holiday Homework links out to the reference HHW page (class-wise PDFs live there).
 */
export interface AcademicDocument {
  label: string;
  detail: string;
  url: string;
}

export const ACADEMIC_DOCUMENTS: AcademicDocument[] = [
  ...ACADEMIC_RESOURCES,
  {
    label: "Holiday Homework 2026–27",
    detail: "Reference page · class-wise PDFs, Nursery–XII",
    url: "https://davppspanipat.com/1F8D5C1A-FF78-4F8A-AD60-DB6F571ABB7F/CMS/Page/Holiday-Home-Work(2026-27)",
  },
];
