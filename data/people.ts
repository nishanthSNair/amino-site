export type Physician = {
  initials: string;
  name: string;
  credential: string;
  bio: string;
  image?: string;
  featured?: boolean;
};

export const physicians: Physician[] = [
  {
    initials: "AV",
    name: "Dr. Anant Vinjamoori",
    credential: "Chief Medical Officer · Harvard-trained",
    bio: "Harvard-trained physician and one of the most respected voices in longevity medicine. Dr. Anant has led clinical teams, shaped national health programs, and brought science-backed longevity care to thousands of patients across the U.S. — now leading Amino's clinical direction across the GCC.",
    image: "/images/physicians/anant.png",
    featured: true,
  },
  {
    initials: "RM",
    name: "Dr. Rayan Mohammed",
    credential: "General Practitioner · Functional & Regenerative Medicine (AAFM, ABRM)",
    bio: "Functional medicine physician and regenerative medicine specialist focused on root-cause diagnosis and metabolic health. Specializes in insulin resistance, hormonal imbalances, chronic inflammation, and fatigue — using advanced diagnostics and doctor-guided peptide therapy to build practical, sustainable treatment plans.",
    image: "/images/physicians/rayan.jpg",
  },
  {
    initials: "MM",
    name: "Dr. Mahmoud Musa",
    credential: "General Practitioner · Functional Medicine Coach (MBBCh)",
    bio: "MBBCh from Misr University with experience across patient care and healthcare management. Contributed to humanitarian pediatric health programs during the Syrian crisis. At Amino he interprets labs, develops wellness plans, and leads patient education — ACLS and ITLS certified.",
    image: "/images/physicians/mahmoud.webp",
  },
];
