/**
 * Faculty data — transcribed from the reference "Staff Faculty" page
 * ("STAFF DETAIL as on September 2026").
 * Fields reproduced: name, designation, qualification, professional
 * qualification. TeacherId and gender columns are omitted as non-essential.
 * No portraits exist on the source; none added. 104 members total,
 * consistent with the school's "~104 staff" figure.
 */

export interface FacultyMember {
  name: string;
  qualification: string;
  professionalQualification?: string;
}

export interface FacultyGroup {
  id: string;
  title: string;
  members: FacultyMember[];
}

const m = (name: string, qualification: string, professionalQualification?: string): FacultyMember => ({
  name,
  qualification,
  professionalQualification,
});

export const PRINCIPAL: FacultyMember & { role: string } = {
  name: "Ms. Sumita Arora",
  role: "Principal",
  qualification: "M.Phil Geography, UGC NET",
  professionalQualification: "M.Ed",
};

export const FACULTY_GROUPS: FacultyGroup[] = [
  {
    id: "pgt",
    title: "Post Graduate Teachers (PGT)",
    members: [
      m("Vikram Singh Mann", "M.A", "B.Ed"),
      m("Poonam Taneja", "M.Sc", "B.Ed"),
      m("Poonam Wasan", "Post Graduate", "B.Ed"),
      m("Prachi Punyani", "M.Sc", "B.Ed"),
      m("Preeti Chutani", "Ph.D", "Ph.D"),
      m("Rajni", "Post Graduate", "B.Ed"),
      m("Rekha Sharma", "Post Graduate", "B.Ed"),
      m("Shivam Verma", "M.Sc", "B.Ed"),
      m("Sushil Mishra", "M.Sc", "B.Ed"),
      m("Sushma Devi", "Post Graduate", "B.Ed"),
      m("Parul Madaan", "Post Graduate", "B.Ed"),
      m("Pooja Rani", "M.A", "B.Ed"),
      m("Usha Rani", "Post Graduate", "B.Ed"),
      m("Anju Bala", "M.A", "B.Ed"),
      m("Ashu Tyagi", "M.A Music", "B.Ed"),
      m("Dalip Kumar", "MFA", "MFA"),
      m("Lavisha", "M.Com", "B.Ed"),
      m("Ananya", "B.A, M.A English, B.Ed", "B.A, M.A English, B.Ed"),
    ],
  },
  {
    id: "tgt",
    title: "Trained Graduate Teachers (TGT)",
    members: [
      m("Anil Kumari", "M.A", "B.Ed"),
      m("Anu", "M.Com", "B.Ed"),
      m("Bhanwati", "Post Graduate", "B.Ed"),
      m("Dimple Chhabra", "Post Graduate", "B.Ed"),
      m("Himanshi Chawla", "M.A", "B.Ed"),
      m("Jagriti Luthra", "Post Graduate", "B.Ed"),
      m("Jaswinder Kaur", "M.A.", "B.Ed"),
      m("Jyoti Grewal", "B.A", "B.Ed"),
      m("Kavita Devi", "Post Graduate", "B.Ed"),
      m("Khushboo Saini", "B.Ed", "B.Tech"),
      m("Khushbu Gandhi", "M.Sc", "B.Ed"),
      m("Kiran Bala", "M.A", "B.Ed"),
      m("Kiran Malik", "Post Graduate", "B.Ed"),
      m("Komal Rani", "M.A. English", "M.A. English"),
      m("Manisha Sharma", "M.A.", "B.Ed"),
      m("Manju Rani", "M.A.", "B.Ed"),
      m("Meenakshi Sharma", "Post Graduate", "B.Ed"),
      m("Minakshi", "M.A., B.Ed.", "B.Ed."),
      m("Mukesh Devi", "Post Graduate", "B.Ed"),
      m("Neelam Hooda", "M.A Hindi", "B.Ed"),
      m("Neha Kaushik", "M.Com", "B.Ed"),
      m("Nidhi Sehrawat", "B.Sc", "B.Ed"),
      m("Pikanshu Gahlawat", "M.A", "B.Ed"),
      m("Pooja", "Post Graduate", "B.Ed"),
      m("Prince Kumari", "Post Graduate", "B.Ed"),
      m("Priyanka Sethi", "M.A", "B.Ed"),
      m("Pushpa", "Graduate", "B.Ed"),
      m("Rama Sharma", "M.A.", "B.Ed, D.Ed"),
      m("Ravi", "BCA", "BCA, B.Ed"),
      m("Riya Kadian", "M.Sc Maths", "M.Sc Maths"),
      m("Santosh Rohilla", "M.Phil", "B.Ed"),
      m("Seema Rohilla", "M.A", "B.Ed"),
      m("Sheetal", "Post Graduate", "B.Ed"),
      m("Suman Kumari", "Post Graduate", "B.Ed"),
      m("Suman Rani", "Post Graduate", "B.Ed"),
    ],
  },
  {
    id: "prt",
    title: "Primary Teachers (PRT)",
    members: [
      m("Anju Sandhu", "M.Sc", "B.Ed"),
      m("Anu", "Graduate", "B.Ed"),
      m("Ayushi", "Post Graduate", "B.Ed"),
      m("Deepak", "BPA", "B.Ed"),
      m("Deepika", "M.Phil", "B.Ed"),
      m("Kanwaljeet", "B.A", "JBT"),
      m("Kareena", "Post Graduate", "M.F.A."),
      m("Kavita Dhaiya", "Graduate", "B.Ed"),
      m("Mamta", "B.A", "B.Ed"),
      m("Monika Jaglan", "M.Sc", "B.Ed"),
      m("Mukesh Kumari", "Graduate", "B.Ed"),
      m("Nancy", "Post Graduation", "B.Ed"),
      m("Neeru Rawal", "Graduate", "B.Ed"),
      m("Neeti", "Graduate", "B.Ed"),
      m("Poonam Kadyan", "Post Graduate", "B.Ed"),
      m("Rachana", "M.A", "B.Ed"),
      m("Savita", "M.A", "M.Ed"),
      m("Seema Dixit", "Post Graduate", "B.Ed"),
      m("Suman Sharma", "Post Graduate", "B.Ed"),
      m("Sunil Kumar", "M.Phil", "B.Ed"),
      m("Sunita Sharma", "Post Graduate", "B.Ed"),
      m("Vanya Verma", "B.A", "B.Ed"),
    ],
  },
  {
    id: "ntt",
    title: "Nursery Trained Teachers (NTT)",
    members: [
      m("Monika", "M.A", "B.Ed."),
      m("Sapna Rani", "M.A.MC", "M.A.MC"),
    ],
  },
  {
    id: "pet",
    title: "Physical Education Teachers (PET)",
    members: [
      m("Aditya Rathee", "Graduation", "BPED"),
      m("Anju Bala", "Post Graduate", "M.P.Ed"),
      m("Sanju", "B.Ped", "B.Ped"),
      m("Sumit Kadyan", "BPED", "BPED"),
      m("Urmila", "B.A", "B.Ped"),
    ],
  },
  {
    id: "counsellors",
    title: "Career Counsellors",
    members: [
      m("Anil Kumar", "Graduation", "BCA"),
      m("Ankush Vats", "Bachelor of Arts", "Bachelor of Arts"),
      m("Puspa", "M.A", "Co-ordinator"),
      m("Reena Rani", "M.B.A", "M.B.A"),
      m("Suchitra Boora", "M.Com", "B.Ed"),
    ],
  },
  {
    id: "wellness",
    title: "Wellness Teachers",
    members: [
      m("Manju Gupta", "Post Graduate", "B.Ed"),
      m("Pardeep Kumar", "M.Sc", "B.Ed"),
      m("Parveen", "Graduate", "B.Ed"),
      m("Simran Rohilla", "Masters in Clinical Psychology", "PG Diploma"),
      m("Sonia Kumari", "B.A", "GNM"),
    ],
  },
  {
    id: "librarians",
    title: "Librarians",
    members: [
      m("Jayant Kumar", "Graduation", "B.Lib"),
      m("Usha Rani", "Post Graduate", "B.Ed"),
    ],
  },
  {
    id: "special-educator",
    title: "Special Educator",
    members: [m("Neelam", "Post Graduate", "B.Ed")],
  },
  {
    id: "support",
    title: "Support Staff",
    members: [
      m("Manjeet", "8", "—"),
      m("Neelam", "6", "NA"),
      m("Nitu", "8", "0"),
      m("Priti", "Post Graduate", "M.Com"),
      m("Raguvir", "12", "—"),
      m("Rekha", "12", "12"),
      m("Sarita", "Post Graduate", "M.Com"),
    ],
  },
];

export interface TrainingDoc {
  label: string;
  url: string;
}

/** Training session records linked from the reference Faculty submenu. */
export const TRAINING_DOCS: TrainingDoc[] = [
  { label: "Training sessions 2024–25", url: "https://davppspanipat.com/File/64/A2J_Training%202024-25...pdf" },
  { label: "Workshop details 2023–24", url: "https://davppspanipat.com/File/64/YTT_WORKSHOP%20DETAILS%202023-24.pdf" },
  { label: "Workshops 2021–23", url: "https://davppspanipat.com/File/64/F43_workshop%2021-23.pdf" },
  { label: "Training sessions 2020–21", url: "https://davppspanipat.com/File/64/2020-21.pdf" },
  { label: "Training sessions 2019–20", url: "https://davppspanipat.com/File/64/2019-20.pdf" },
  { label: "Training sessions 2018–19", url: "https://davppspanipat.com/File/64/2018-19.pdf" },
];
