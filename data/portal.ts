export const patient = {
  firstName: "Ahmed",
  initials: "AK",
  city: "Dubai",
  protocol: {
    name: "Recovery & Repair",
    slug: "recovery-repair",
    cycleWeek: 3,
    cycleTotal: 8,
    startedOn: "2026-06-15",
    peptides: ["BPC-157", "TB-500"],
  },
  physician: {
    name: "Dr. Rayan Mohammed",
    credential: "Lead Peptide Physician · DHA-licensed",
    initials: "RM",
    nextReview: "2026-07-22",
  },
  nextPanel: "2026-08-05",
};

export type ScheduleItem = {
  id: string;
  time: string;
  title: string;
  detail: string;
  kind: "dose" | "task";
  done: boolean;
};

export const todaySchedule: ScheduleItem[] = [
  {
    id: "morning-bpc",
    time: "07:00",
    title: "BPC-157 · 250 mcg",
    detail: "Subcutaneous, morning. Rotate injection site from yesterday.",
    kind: "dose",
    done: true,
  },
  {
    id: "hydration",
    time: "09:30",
    title: "Hydration check",
    detail: "500 ml water with electrolytes before training block.",
    kind: "task",
    done: true,
  },
  {
    id: "training-log",
    time: "17:00",
    title: "Log training session",
    detail: "Note load, discomfort (0–10) and mobility before + after.",
    kind: "task",
    done: false,
  },
  {
    id: "evening-tb",
    time: "21:00",
    title: "TB-500 · 2 mg",
    detail: "Subcutaneous, evening. Return pen to fridge within 15 min.",
    kind: "dose",
    done: false,
  },
  {
    id: "sleep-window",
    time: "23:00",
    title: "Sleep window",
    detail: "Target lights-out. Physician has flagged sleep as a primary lever.",
    kind: "task",
    done: false,
  },
];

export const weekOverview = [
  { label: "Mon", adherence: 100 },
  { label: "Tue", adherence: 100 },
  { label: "Wed", adherence: 90 },
  { label: "Thu", adherence: 100 },
  { label: "Fri", adherence: 100 },
  { label: "Sat", adherence: 80 },
  { label: "Sun", adherence: 40, today: true },
];

export const physicianNote = {
  when: "2 days ago",
  body: "Adherence has been strong across weeks 1–2. Continue current BPC / TB pairing. Flagging: sleep window slipped Sat — protect it into week 4, it's the single biggest lever on your CRP trend. Blood re-panel is scheduled for week 8.",
};

export type JournalEntry = {
  id: string;
  date: string;
  mood: number;
  sleep: number;
  energy: number;
  note: string;
};

export const seedJournal: JournalEntry[] = [
  {
    id: "j1",
    date: "2026-07-05",
    mood: 4,
    sleep: 7.5,
    energy: 4,
    note: "Deep sleep back. Shoulder is quieter through pressing today.",
  },
  {
    id: "j2",
    date: "2026-07-04",
    mood: 4,
    sleep: 6.5,
    energy: 3,
    note: "Slept lighter. Right elbow still tender under load — kept sets short.",
  },
  {
    id: "j3",
    date: "2026-07-03",
    mood: 5,
    sleep: 8,
    energy: 5,
    note: "Best morning in weeks. Full range on squat, zero knee complaint.",
  },
  {
    id: "j4",
    date: "2026-07-02",
    mood: 3,
    sleep: 6,
    energy: 3,
    note: "Travel day. Missed evening dose window by ~40 min, rescheduled with support.",
  },
];

export type BloodMarker = {
  name: string;
  unit: string;
  baseline: number;
  current: number;
  refLow: number;
  refHigh: number;
  optimal?: [number, number];
  direction: "higher-better" | "lower-better" | "range";
  note: string;
};

export const bloodMarkers: BloodMarker[] = [
  {
    name: "hs-CRP",
    unit: "mg/L",
    baseline: 3.4,
    current: 1.8,
    refLow: 0,
    refHigh: 5,
    optimal: [0, 1],
    direction: "lower-better",
    note: "Systemic inflammation marker. Trending toward the low-risk band.",
  },
  {
    name: "IGF-1",
    unit: "ng/mL",
    baseline: 148,
    current: 192,
    refLow: 130,
    refHigh: 260,
    optimal: [180, 240],
    direction: "range",
    note: "Growth-signal proxy. Moved into your age-adjusted optimal band.",
  },
  {
    name: "HbA1c",
    unit: "%",
    baseline: 5.6,
    current: 5.3,
    refLow: 4,
    refHigh: 5.6,
    optimal: [4.5, 5.2],
    direction: "lower-better",
    note: "3-month glucose average. Now inside the low-risk metabolic band.",
  },
  {
    name: "Total Testosterone",
    unit: "ng/dL",
    baseline: 420,
    current: 540,
    refLow: 300,
    refHigh: 1000,
    optimal: [500, 800],
    direction: "range",
    note: "Endogenous — the protocol is designed to support, not replace.",
  },
  {
    name: "Vitamin D (25-OH)",
    unit: "ng/mL",
    baseline: 22,
    current: 46,
    refLow: 30,
    refHigh: 100,
    optimal: [40, 70],
    direction: "range",
    note: "Corrected via cofactor stack alongside the peptide protocol.",
  },
  {
    name: "Ferritin",
    unit: "ng/mL",
    baseline: 65,
    current: 110,
    refLow: 30,
    refHigh: 400,
    optimal: [80, 200],
    direction: "range",
    note: "Iron stores. Steady climb tracks with restored gut absorption.",
  },
];
