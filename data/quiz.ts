export type Question =
  | {
      id: string;
      kind: "choice";
      title: string;
      subtitle?: string;
      options: string[];
    }
  | {
      id: string;
      kind: "multi";
      title: string;
      subtitle?: string;
      options: string[];
    }
  | {
      id: string;
      kind: "scale";
      title: string;
      subtitle?: string;
      min: number;
      max: number;
      minLabel: string;
      maxLabel: string;
    }
  | {
      id: string;
      kind: "text";
      title: string;
      subtitle?: string;
      placeholder: string;
    }
  | {
      id: string;
      kind: "email";
      title: string;
      subtitle?: string;
      placeholder: string;
    };

export const commonQuestions: Question[] = [
  {
    id: "age",
    kind: "choice",
    title: "What's your age range?",
    subtitle:
      "Amino is prescribed to adults 18 and over. Your physician uses this to set baseline expectations.",
    options: ["18–24", "25–34", "35–44", "45–54", "55+"],
  },
  {
    id: "sex",
    kind: "choice",
    title: "Sex assigned at birth",
    subtitle:
      "Some peptides and blood-panel reference ranges depend on this. You'll clarify identity in your intake call.",
    options: ["Female", "Male", "Prefer not to say"],
  },
  {
    id: "sleep",
    kind: "scale",
    title: "How would you rate your sleep quality?",
    subtitle: "Over the last 30 days on average.",
    min: 1,
    max: 5,
    minLabel: "Poor",
    maxLabel: "Excellent",
  },
  {
    id: "energy",
    kind: "scale",
    title: "How would you rate your day-to-day energy?",
    min: 1,
    max: 5,
    minLabel: "Depleted",
    maxLabel: "Consistent",
  },
  {
    id: "training",
    kind: "choice",
    title: "How often do you train?",
    subtitle: "Any structured physical activity — resistance, cardio, sport.",
    options: [
      "Not currently",
      "1–2× per week",
      "3–4× per week",
      "5+ per week",
    ],
  },
  {
    id: "meds",
    kind: "multi",
    title: "Any of the following apply today?",
    subtitle: "Select all that apply. Nothing is disqualifying at this stage.",
    options: [
      "None",
      "On a GLP-1 (Ozempic / Mounjaro / Wegovy)",
      "Blood-pressure medication",
      "Statin / lipid medication",
      "Thyroid medication",
      "Diagnosed condition (I'll share in intake)",
    ],
  },
  {
    id: "bloodwork",
    kind: "choice",
    title: "Have you had recent bloodwork?",
    subtitle:
      "Amino orders a longevity-grade panel — but if you have recent labs, your physician can build from them.",
    options: [
      "Yes, within the last 3 months",
      "Yes, within the last 12 months",
      "No",
      "Not sure",
    ],
  },
];

export type ProblemQuestion = {
  title: string;
  subtitle?: string;
  options: string[];
};

export const problemByProtocol: Record<string, ProblemQuestion> = {
  "longevity-vitality": {
    title: "Which of these is the strongest signal for you right now?",
    subtitle:
      "Pick the one that matters most — your physician will design around it.",
    options: [
      "Sleep depth and morning energy",
      "Skin, hair, and visible aging markers",
      "Recovery from training and everyday load",
      "Overall healthspan / longevity biomarkers",
    ],
  },
  "recovery-repair": {
    title: "What are you recovering from?",
    options: [
      "Tendon or ligament injury",
      "Joint pain / mobility issue",
      "Gut lining / GI issue",
      "General training load and soft-tissue stress",
    ],
  },
  "growth-performance": {
    title: "Which outcome matters most to you?",
    options: [
      "Body composition and lean mass",
      "Deeper sleep and better recovery",
      "Training output and work capacity",
      "Long-arc growth-hormone support",
    ],
  },
  "metabolic-post-glp1": {
    title: "Where are you in your metabolic journey?",
    subtitle:
      "Your physician tunes the stack around where you are on the GLP-1 curve.",
    options: [
      "Currently on a GLP-1",
      "Tapering off a GLP-1",
      "Fully off a GLP-1 and want to protect gains",
      "Never taken one — general metabolic health",
    ],
  },
  "sexual-health": {
    title: "What best describes your primary concern?",
    subtitle: "This shapes the eligibility conversation with your physician.",
    options: [
      "Desire / arousal",
      "Performance concern",
      "Post-partum or post-menopause changes",
      "General sexual wellbeing",
    ],
  },
  "cognitive-focus": {
    title: "What's the strongest signal you'd like to shift?",
    options: [
      "Sustained attention across a work day",
      "Calm-under-load / stress tolerance",
      "Verbal recall and processing speed",
      "Mood stability and motivation",
    ],
  },
};

export const finalQuestions: Question[] = [
  {
    id: "name",
    kind: "text",
    title: "What should your physician call you?",
    placeholder: "First name",
  },
  {
    id: "email",
    kind: "email",
    title: "Where should we send your onboarding link?",
    subtitle: "One physician will be assigned to your case within 48 hours.",
    placeholder: "you@domain.com",
  },
];
