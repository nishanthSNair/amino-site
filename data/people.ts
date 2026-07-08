export type Physician = {
  initials: string;
  name: string;
  credential: string;
  bio: string;
};

export const physicians: Physician[] = [
  {
    initials: "RM",
    name: "Dr. Rayan Mohammed",
    credential: "Lead Peptide Physician · DHA-licensed",
    bio: "Internal medicine physician who designs and reviews every Amino protocol. Focused on longevity-grade panels and off-label peptide use under the DHA framework.",
  },
  {
    initials: "AK",
    name: "Dr. Alia Karim",
    credential: "Chief Medical Officer · Harvard-trained",
    bio: "Preventive medicine and longevity physician. Sets Amino's clinical standards for intake, panel design, and prescribing thresholds.",
  },
  {
    initials: "OS",
    name: "Dr. Omar Saeed",
    credential: "MOHAP-licensed Clinical Pharmacologist",
    bio: "Clinical pharmacologist overseeing compounding standards, dosing accuracy and the separate-pen model that underpins every Amino stack.",
  },
];

export type Testimonial = {
  name: string;
  goal: string;
  quote: string;
  stars: number;
  highlight?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed",
    goal: "Recovery",
    quote:
      "Two prior clinics sold me a stack in a checkout. Amino ordered bloodwork first and the physician actually changed what I asked for — and explained why.",
    stars: 5,
    highlight: true,
  },
  {
    name: "Layla",
    goal: "Longevity",
    quote:
      "The intake was serious. The panel was serious. The follow-up call with the physician was serious. Everything about it feels like a clinic, not a store.",
    stars: 5,
  },
  {
    name: "Karim",
    goal: "Performance",
    quote:
      "Deeper sleep by week two. But what I actually value is that a physician re-reviews my case every cycle instead of auto-refilling.",
    stars: 5,
  },
  {
    name: "Noura",
    goal: "Post-GLP-1",
    quote:
      "I came off a GLP-1 and did not want the rebound. The Amino physician designed a taper protocol I could not have found anywhere else in the UAE.",
    stars: 5,
  },
  {
    name: "Yousef",
    goal: "Cognitive",
    quote:
      "Wanted focus without stimulants. The physician spent 40 minutes on my intake before prescribing anything. That's the bar I'd been looking for.",
    stars: 5,
  },
  {
    name: "Mariam",
    goal: "Vitality",
    quote:
      "Cold-chain delivery, separate pens, clear dosing labels. It feels engineered by pharmacists and doctors — because it is.",
    stars: 5,
  },
];
