export const site = {
  name: "Amino",
  wordmark: "Amino.",
  tagline: "The UAE's first blood-panel-led, physician-designed peptide protocol platform.",
  nav: [
    { label: "Protocols", href: "/#protocols" },
    { label: "Products", href: "/#products" },
    { label: "Science", href: "/#science" },
    { label: "Testimonials", href: "/#testimonials" },
  ],
  portalLink: { label: "Patient portal", href: "/portal" },
  primaryCta: { label: "Find my protocol", href: "/#cta" },
  announcement: {
    text: "New: baseline blood panel included in every protocol.",
    href: "/#how-it-works",
    cta: "See how it works",
  },
  hero: {
    eyebrow: "UAE's #1 Peptide Clinic",
    title: "Trusted by 30,000+ customers.",
    titleAccent: "30,000+ customers.",
    subtitle:
      "Matched to your goals. Overseen by licensed physicians. Delivered to your door.",
    ctaPrimary: { label: "Find my protocol", href: "/#cta" },
    ctaSecondary: { label: "How it works", href: "/#how-it-works" },
    trustBadges: [
      "DHA-aligned",
      "MOHAP-licensed pharmacy",
      "Physician-reviewed",
    ],
    media: {
      video: "/videos/Hero/Jogging.mp4",
      poster: "",
      image: "",
    },
    stats: [
      { value: "30,000+", label: "Customers served" },
      { value: "Physician", label: "Reviewed cases" },
      { value: "Cold-chain", label: "Delivered UAE-wide" },
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Five steps between you and a physician-designed protocol.",
    steps: [
      {
        n: "01",
        title: "Tell us your goal",
        body: "Recovery, longevity, sexual health, cognition, metabolic — start with the outcome that matters to you.",
        highlight: false,
      },
      {
        n: "02",
        title: "Complete your health intake",
        body: "A 6-minute clinical intake covering history, medications, sleep, training and recent labs. Encrypted end-to-end.",
        highlight: false,
      },
      {
        n: "03",
        title: "Baseline blood panel",
        body: "We order a longevity-grade panel — hormones, inflammation, metabolic and micronutrient markers — at a partnered UAE lab.",
        highlight: true,
        badge: "The Amino difference",
      },
      {
        n: "04",
        title: "Physician designs your protocol",
        body: "A licensed physician reviews your intake and labs and either designs your protocol, redesigns it, or declines it — in writing.",
        highlight: true,
        badge: "The Amino difference",
      },
      {
        n: "05",
        title: "Compounded & delivered cold-chain",
        body: "Peptides are compounded fresh by a licensed UAE pharmacy in separate pens, then shipped cold-chain across the GCC.",
        highlight: false,
      },
    ],
  },
  trustStrip: [
    "Licensed UAE compounding pharmacy",
    "Cold-chain delivery",
    "Physician-led",
    "Off-label under DHA framework",
  ],
  stats: [
    { value: "12x", label: "Growth in 6 months" },
    { value: "30+", label: "Physician-designed protocols" },
    { value: "100%", label: "Physician-reviewed cases" },
    { value: "GCC", label: "Cold-chain delivery" },
  ],
  finalCta: {
    eyebrow: "Ready to start?",
    title: "Find your protocol.",
    body: "Leave your email — we'll send your onboarding link and a physician will be assigned to your case within 48 hours.",
    placeholder: "you@domain.com",
    button: "Request access",
    success: "Thank you. A physician will reach out within 48 hours.",
  },
  compliance:
    "Peptides are compounded by a fully licensed UAE compounding pharmacy regulated by MOH and EDE. Prescription products; physician review required. Off-label prescribing is conducted under the DHA framework. Not for use during pregnancy or breastfeeding.",
} as const;
