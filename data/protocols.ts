export type PathwayCard = {
  icon:
    | "regenerate"
    | "shield"
    | "spark"
    | "pulse"
    | "moon"
    | "flame"
    | "brain"
    | "leaf"
    | "waveform"
    | "molecule";
  title: string;
  body: string;
};

export type PeptideRole = {
  productSlug: string;
  name: string;
  role: string;
  delivery: string;
  frequency: string;
};

export type Milestone = {
  week: string;
  title: string;
  body: string;
  highlight?: boolean;
};

export type DayBlock = {
  when: string;
  title: string;
  body: string;
};

export type BiomarkerFocus = {
  name: string;
  why: string;
};

export type Faq = { q: string; a: string };

export type Protocol = {
  slug: string;
  name: string;
  category: string;
  outcome: string;
  peptides: string[];
  whoFor: string;
  mechanism: string;
  expect: string[];
  accent: "clay" | "sage";
  cycleWeeks: number;
  pathways: [PathwayCard, PathwayCard, PathwayCard];
  peptideRoles: PeptideRole[];
  timeline: Milestone[];
  day: DayBlock[];
  biomarkers: BiomarkerFocus[];
  faqs: Faq[];
};

export const protocols: Protocol[] = [
  {
    slug: "longevity-vitality",
    name: "Longevity & Vitality",
    category: "Longevity",
    outcome:
      "A physician-designed stack that supports cellular repair, mitochondrial output and healthy aging markers.",
    peptides: ["Epithalon", "NAD+", "GHK-Cu"],
    whoFor:
      "Adults 30+ focused on healthspan — sleep architecture, recovery, skin integrity and long-horizon aging markers on their bloodwork.",
    mechanism:
      "Epithalon acts as a cellular messenger for telomere and pineal regulation. NAD+ replenishes a coenzyme central to mitochondrial energy metabolism. GHK-Cu supports collagen turnover, angiogenesis and skin repair. Together the stack is designed to support the pathways most implicated in cellular aging.",
    expect: [
      "Weeks 1–2: Sleep depth and morning energy tend to improve first.",
      "Weeks 3–6: Skin quality, hair strength and recovery from training typically shift.",
      "Weeks 6–12: Follow-up bloodwork looks at inflammation, hormonal balance and metabolic markers to guide the next cycle.",
    ],
    accent: "sage",
    cycleWeeks: 12,
    pathways: [
      {
        icon: "moon",
        title: "Pineal & sleep architecture",
        body: "Epithalon's pineal signal is designed to support the sleep-depth lever your physician tracks in your intake.",
      },
      {
        icon: "flame",
        title: "Mitochondrial output",
        body: "NAD+ replenishes a coenzyme central to redox and sirtuin pathways — the machinery of cellular energy.",
      },
      {
        icon: "leaf",
        title: "Extracellular repair",
        body: "GHK-Cu supports collagen turnover and small-vessel formation — the visible signals of healthy aging.",
      },
    ],
    peptideRoles: [
      {
        productSlug: "epithalon",
        name: "Epithalon",
        role: "Pineal signal · sleep architecture and long-horizon aging markers.",
        delivery: "Subcutaneous · separate pen",
        frequency: "1× nightly · 10–20 day short courses",
      },
      {
        productSlug: "nad-plus",
        name: "NAD+",
        role: "Mitochondrial coenzyme · cellular energy and DNA repair signalling.",
        delivery: "Subcutaneous · separate pen",
        frequency: "1–2× weekly across the cycle",
      },
      {
        productSlug: "ghk-cu",
        name: "GHK-Cu",
        role: "Copper-peptide · collagen turnover, angiogenesis and skin integrity.",
        delivery: "Subcutaneous · separate pen",
        frequency: "1× daily across the cycle",
      },
    ],
    timeline: [
      {
        week: "Week 0",
        title: "Baseline panel",
        body: "Longevity-grade panel: hormones, inflammation, metabolic and micronutrient markers.",
        highlight: true,
      },
      {
        week: "Weeks 1–2",
        title: "Sleep & energy",
        body: "Sleep depth and morning energy are the earliest signals patients report on this stack.",
      },
      {
        week: "Weeks 3–6",
        title: "Skin & recovery",
        body: "Collagen-driven changes — skin quality, hair strength and recovery from training — start to shift.",
      },
      {
        week: "Week 6",
        title: "Mid-cycle review",
        body: "Physician re-reviews adherence, journal signals and (where relevant) interim markers.",
        highlight: true,
      },
      {
        week: "Weeks 6–12",
        title: "Longer-arc integration",
        body: "The stack settles. Physicians read your journal and adherence into the end-of-cycle review.",
      },
      {
        week: "Week 12",
        title: "Re-panel & next cycle design",
        body: "Longevity-grade re-panel to guide continuation, taper, or a new physician-designed protocol.",
        highlight: true,
      },
    ],
    day: [
      {
        when: "Morning",
        title: "GHK-Cu · post-shower",
        body: "Rotate injection site from the day before. Log site + comfort in the portal.",
      },
      {
        when: "Midday",
        title: "Hydration + light",
        body: "500 ml water; 10 minutes of morning light. Sleep depth compounds on this rhythm.",
      },
      {
        when: "Evening",
        title: "Epithalon · pre-sleep",
        body: "Nightly during the short-course window. Return pen to fridge within 15 minutes.",
      },
      {
        when: "1–2× weekly",
        title: "NAD+ · rest-day evening",
        body: "Physician-designed cadence, timed to your training and travel week.",
      },
    ],
    biomarkers: [
      {
        name: "hs-CRP",
        why: "Systemic inflammation trend — the single most useful longevity signal.",
      },
      {
        name: "HbA1c",
        why: "Metabolic backdrop for how the stack is landing.",
      },
      {
        name: "IGF-1",
        why: "Growth-axis reference — read for baseline, not as an outcome target.",
      },
      {
        name: "Vitamin D · Ferritin",
        why: "Cofactors your physician corrects alongside the peptide stack.",
      },
    ],
    faqs: [
      {
        q: "Is this a lifetime protocol?",
        a: "No. Amino designs cycles with reviews and re-panels. Continuation, taper, or switch is a physician decision at the end of every cycle.",
      },
      {
        q: "Do I need bloodwork before I start?",
        a: "Yes. A longevity-grade panel at baseline is how the protocol is designed — not a checkout quiz.",
      },
      {
        q: "Can I take this alongside a GLP-1?",
        a: "That is exactly the conversation you'll have with your physician on Amino. Many patients do, but the design depends on your intake and labs.",
      },
      {
        q: "How is everything delivered?",
        a: "Each peptide is compounded fresh in its own pen (or bottle), by a fully licensed UAE compounding pharmacy regulated by MOH and EDE, and shipped cold-chain.",
      },
    ],
  },
  {
    slug: "recovery-repair",
    name: "Recovery & Repair",
    category: "Recovery",
    outcome:
      "A targeted protocol built around soft-tissue repair, gut lining integrity and post-injury recovery.",
    peptides: ["BPC-157", "TB-500"],
    whoFor:
      "Active adults, athletes, and patients recovering from tendon, ligament or joint injuries — or persistent gut lining issues flagged in intake.",
    mechanism:
      "BPC-157 is a cellular messenger derived from a gastric peptide sequence that supports angiogenesis and connective-tissue repair. TB-500 (a thymosin-β4 fragment) is designed to support actin regulation, cell migration and wound healing across musculoskeletal tissue.",
    expect: [
      "Weeks 1–2: Reduction in localised inflammation and stiffness is often the first signal.",
      "Weeks 3–6: Soft-tissue and joint discomfort typically continues to decrease across training loads.",
      "Weeks 6–8: Physician reviews progress and decides whether to taper, extend or transition to a maintenance protocol.",
    ],
    accent: "clay",
    cycleWeeks: 8,
    pathways: [
      {
        icon: "regenerate",
        title: "Connective-tissue repair",
        body: "BPC-157 and TB-500 signal at different points of the repair cascade — designed to layer, not overlap.",
      },
      {
        icon: "pulse",
        title: "Angiogenesis support",
        body: "Repair pathways depend on small-vessel supply. The stack is designed to support that supply.",
      },
      {
        icon: "shield",
        title: "GI lining resilience",
        body: "BPC-157's gastric origin is why this protocol also serves patients with GI-lining concerns flagged in intake.",
      },
    ],
    peptideRoles: [
      {
        productSlug: "bpc-157",
        name: "BPC-157",
        role: "Gastric-derived · connective-tissue and GI lining repair signal.",
        delivery: "Subcutaneous · separate pen",
        frequency: "1× daily across the cycle",
      },
      {
        productSlug: "tb-500",
        name: "TB-500",
        role: "Thymosin-β4 fragment · actin regulation and cell-migration repair signal.",
        delivery: "Subcutaneous · separate pen",
        frequency: "1–2× weekly across the cycle",
      },
    ],
    timeline: [
      {
        week: "Week 0",
        title: "Intake + baseline panel",
        body: "Injury history, imaging (if any), and a longevity-grade panel with inflammatory markers.",
        highlight: true,
      },
      {
        week: "Weeks 1–2",
        title: "Local inflammation trend",
        body: "Localised inflammation and stiffness are often the first signals patients report.",
      },
      {
        week: "Weeks 3–4",
        title: "Load re-introduction",
        body: "Physician re-reviews training pattern; discomfort under load typically continues to decrease.",
      },
      {
        week: "Week 4",
        title: "Mid-cycle check-in",
        body: "Adherence, journal signals and — where relevant — imaging repeat.",
        highlight: true,
      },
      {
        week: "Weeks 5–7",
        title: "Consolidation window",
        body: "Deeper repair signalling; physician may taper TB-500 frequency depending on response.",
      },
      {
        week: "Week 8",
        title: "Re-review + panel",
        body: "Decision point: continue, taper, or transition to a maintenance protocol.",
        highlight: true,
      },
    ],
    day: [
      {
        when: "Morning",
        title: "BPC-157 · 250 mcg",
        body: "Subcutaneous, morning. Rotate injection site from the previous day.",
      },
      {
        when: "Midday",
        title: "Hydration + fuel",
        body: "500 ml water with electrolytes before your training block.",
      },
      {
        when: "1–2× weekly",
        title: "TB-500 · 2 mg",
        body: "Evening dosing on rest days is the default physician design.",
      },
      {
        when: "Evening",
        title: "Sleep window",
        body: "Physicians flag sleep as a primary lever for CRP trend across the cycle.",
      },
    ],
    biomarkers: [
      {
        name: "hs-CRP",
        why: "Systemic inflammation trend — the clearest signal of how the stack is landing.",
      },
      {
        name: "Ferritin",
        why: "Iron stores and gut absorption — often shifts alongside GI-side signals.",
      },
      {
        name: "Vitamin D",
        why: "Cofactor for repair; commonly corrected in parallel.",
      },
      {
        name: "Comprehensive metabolic panel",
        why: "Baseline safety and general metabolic backdrop for the cycle.",
      },
    ],
    faqs: [
      {
        q: "Do I need an imaging report to start?",
        a: "Not always — but if you have recent imaging (MRI, ultrasound), bring it. It sharpens the physician's design.",
      },
      {
        q: "Can I train through the protocol?",
        a: "That's part of the physician's design. Load is re-introduced deliberately across the cycle rather than paused entirely.",
      },
      {
        q: "How long is a typical cycle?",
        a: "Amino's default is 8 weeks with a review before any decision to extend. Some cases run 4-week short courses.",
      },
      {
        q: "Is BPC-157 the same as an oral supplement version?",
        a: "No. Amino's use is prescription-grade subcutaneous, compounded fresh by a licensed UAE pharmacy — different indication and different oversight.",
      },
    ],
  },
  {
    slug: "growth-performance",
    name: "Growth & Performance",
    category: "Performance",
    outcome:
      "A growth-hormone-secretagogue stack designed to support lean-mass composition, sleep and training output.",
    peptides: ["Ipamorelin", "Sermorelin", "CJC-1295"],
    whoFor:
      "Adults 28+ with training goals, low-normal IGF-1 on bloodwork, or objectives around body composition, deep sleep and recovery.",
    mechanism:
      "Ipamorelin, Sermorelin and CJC-1295 act as cellular messengers to the pituitary — designed to support the body's own pulsatile release of growth hormone rather than replace it. The stack aims to preserve the physiological rhythm of GH secretion.",
    expect: [
      "Weeks 1–2: Deeper sleep and improved morning readiness are common early signals.",
      "Weeks 3–6: Body composition, recovery quality and training capacity typically shift.",
      "Weeks 6–12: Repeat bloodwork guides physician-led adjustments to dosing and cycle length.",
    ],
    accent: "sage",
    cycleWeeks: 12,
    pathways: [
      {
        icon: "moon",
        title: "Preserved GH pulse",
        body: "The stack is designed to signal — not replace — the pituitary's own pulsatile release of GH.",
      },
      {
        icon: "waveform",
        title: "Trigger + amplitude",
        body: "A GHRH analogue and a secretagogue together shape both the trigger and the amplitude of the pulse.",
      },
      {
        icon: "spark",
        title: "Read on IGF-1",
        body: "Your response is tracked in your labs — not assumed. IGF-1 sits at the centre of every review.",
      },
    ],
    peptideRoles: [
      {
        productSlug: "ipamorelin",
        name: "Ipamorelin",
        role: "Selective secretagogue · triggers the GH pulse.",
        delivery: "Subcutaneous · separate pen",
        frequency: "1× nightly",
      },
      {
        productSlug: "sermorelin",
        name: "Sermorelin",
        role: "GHRH analogue · upstream signal for endogenous GH release.",
        delivery: "Subcutaneous · separate pen",
        frequency: "1× nightly",
      },
      {
        productSlug: "cjc-1295",
        name: "CJC-1295",
        role: "Long-acting GHRH analogue · extends the amplitude of the pulse.",
        delivery: "Subcutaneous · separate pen",
        frequency: "1–2× weekly",
      },
    ],
    timeline: [
      {
        week: "Week 0",
        title: "Baseline panel · IGF-1 anchored",
        body: "Longevity-grade panel with IGF-1 at the centre; body composition captured where relevant.",
        highlight: true,
      },
      {
        week: "Weeks 1–2",
        title: "Sleep depth first",
        body: "Deeper sleep and morning readiness are the earliest signals on this stack.",
      },
      {
        week: "Weeks 3–6",
        title: "Composition & training",
        body: "Recovery quality, work capacity and body-composition signals typically start to shift.",
      },
      {
        week: "Week 6",
        title: "Mid-cycle review + interim IGF-1",
        body: "Physician re-reads adherence, journal signals and (often) an interim IGF-1.",
        highlight: true,
      },
      {
        week: "Weeks 7–11",
        title: "Consolidation",
        body: "Dose or frequency may be adjusted based on your interim marker and journal signals.",
      },
      {
        week: "Week 12",
        title: "Full re-panel",
        body: "IGF-1 re-panel + broader markers to guide continuation, taper, or a new protocol design.",
        highlight: true,
      },
    ],
    day: [
      {
        when: "Morning",
        title: "Training block",
        body: "Physician-designed protocols don't dose in the morning — the anabolic window is at sleep onset.",
      },
      {
        when: "Evening",
        title: "Sleep hygiene",
        body: "Screens off ~60 minutes before dosing. Sleep depth is the earliest read on the stack.",
      },
      {
        when: "Pre-sleep",
        title: "Ipamorelin + Sermorelin",
        body: "Nightly, into your separate pens. Return each pen to the fridge within 15 minutes.",
      },
      {
        when: "1–2× weekly",
        title: "CJC-1295",
        body: "Layered on top of the nightly cadence — physician-designed to your case.",
      },
    ],
    biomarkers: [
      {
        name: "IGF-1",
        why: "The central marker. Baseline, interim and end-of-cycle.",
      },
      {
        name: "Fasting insulin",
        why: "Read alongside IGF-1 to keep the metabolic backdrop clean.",
      },
      {
        name: "hs-CRP",
        why: "Inflammation load informs recovery quality.",
      },
      {
        name: "Total testosterone",
        why: "Baseline reference for the broader endocrine picture.",
      },
    ],
    faqs: [
      {
        q: "Is this the same as taking growth hormone?",
        a: "No. Every peptide in this stack is a signal to your body's pituitary — designed to work with your endogenous GH pulse, not replace it.",
      },
      {
        q: "How is IGF-1 monitored?",
        a: "Baseline, an interim read at week 6, and a full re-panel at week 12. Continuation is decided in writing after that.",
      },
      {
        q: "Can I do this alongside a GLP-1?",
        a: "Often yes — Amino has a dedicated Post-GLP-1 protocol. Your physician designs the sequence based on where you are on the taper curve.",
      },
      {
        q: "Is this appropriate for women?",
        a: "Yes, in physician-designed cases. The dosing and pairing are calibrated differently — that's the physician's design call after your intake.",
      },
    ],
  },
  {
    slug: "metabolic-post-glp1",
    name: "Metabolic & Post-GLP-1",
    category: "Metabolic",
    outcome:
      "A stack designed to support lean-mass preservation, mitochondrial output and metabolic health — during or after a GLP-1.",
    peptides: ["Ipamorelin", "MOTS-c", "NAD+"],
    whoFor:
      "Patients on or transitioning off a GLP-1 who want to preserve lean mass, support metabolic markers and avoid the rebound curve.",
    mechanism:
      "Ipamorelin supports the body's endogenous GH pulse — designed to protect lean tissue in a caloric deficit. MOTS-c is a mitochondrial-derived peptide implicated in insulin sensitivity and metabolic flexibility. NAD+ supports mitochondrial energy metabolism. The stack is designed to support the metabolic system through and after a GLP-1 taper.",
    expect: [
      "Weeks 1–2: Energy stability and recovery quality tend to improve first.",
      "Weeks 3–6: Physician reviews body composition, resting metrics and follow-up labs.",
      "Weeks 6–12: Protocol is adjusted based on whether the patient is on, tapering off, or fully off a GLP-1.",
    ],
    accent: "clay",
    cycleWeeks: 12,
    pathways: [
      {
        icon: "flame",
        title: "Metabolic flexibility",
        body: "MOTS-c is implicated in insulin sensitivity and the ability to shift between fuel sources.",
      },
      {
        icon: "moon",
        title: "Lean-mass protection",
        body: "Ipamorelin's GH signal is designed to help protect lean tissue in a caloric deficit.",
      },
      {
        icon: "molecule",
        title: "Mitochondrial energy",
        body: "NAD+ replenishes a coenzyme central to the redox pathways of cellular energy.",
      },
    ],
    peptideRoles: [
      {
        productSlug: "ipamorelin",
        name: "Ipamorelin",
        role: "GH secretagogue · designed to protect lean mass in a deficit.",
        delivery: "Subcutaneous · separate pen",
        frequency: "1× nightly",
      },
      {
        productSlug: "mots-c",
        name: "MOTS-c",
        role: "Mitochondrial-derived peptide · insulin sensitivity and metabolic flexibility.",
        delivery: "Subcutaneous · separate pen",
        frequency: "1× weekly",
      },
      {
        productSlug: "nad-plus",
        name: "NAD+",
        role: "Coenzyme · mitochondrial energy and redox pathways.",
        delivery: "Subcutaneous · separate pen",
        frequency: "1–2× weekly",
      },
    ],
    timeline: [
      {
        week: "Week 0",
        title: "Baseline metabolic panel",
        body: "HbA1c, fasting glucose, lipid panel, IGF-1 and body composition where relevant.",
        highlight: true,
      },
      {
        week: "Weeks 1–2",
        title: "Energy stability",
        body: "Recovery quality and energy stability are typically the first shifts patients report.",
      },
      {
        week: "Weeks 3–6",
        title: "Composition + metabolic signals",
        body: "Physician reads body composition, resting metrics and interim signals.",
      },
      {
        week: "Week 6",
        title: "Mid-cycle review",
        body: "Physician may adjust based on where you are on the GLP-1 curve (on, tapering, or fully off).",
        highlight: true,
      },
      {
        week: "Weeks 7–11",
        title: "Consolidation",
        body: "Protocol is tuned to the taper phase; lean-mass protection is prioritised.",
      },
      {
        week: "Week 12",
        title: "Full metabolic re-panel",
        body: "HbA1c, lipids, IGF-1 and metabolic re-panel guide the next physician design.",
        highlight: true,
      },
    ],
    day: [
      {
        when: "Morning",
        title: "Protein-forward first meal",
        body: "Lean-mass protection depends as much on the meal plan as on the peptide stack.",
      },
      {
        when: "Midday",
        title: "Resistance training",
        body: "Physician-designed cadence — critical during a GLP-1 taper.",
      },
      {
        when: "Evening",
        title: "Ipamorelin · pre-sleep",
        body: "Nightly, into its separate pen. Deep sleep is a lean-mass lever.",
      },
      {
        when: "Weekly",
        title: "MOTS-c + NAD+",
        body: "Physician-designed cadence, timed to your training week.",
      },
    ],
    biomarkers: [
      {
        name: "HbA1c",
        why: "3-month glucose average — the anchor marker across the cycle.",
      },
      {
        name: "Fasting insulin",
        why: "Read alongside HbA1c for the metabolic backdrop.",
      },
      {
        name: "Lipid panel",
        why: "Trend across the cycle informs continuation and taper design.",
      },
      {
        name: "IGF-1",
        why: "GH-axis reference — read for lean-mass protection.",
      },
    ],
    faqs: [
      {
        q: "Can I take this while I'm on a GLP-1?",
        a: "Yes — that's the entire point of this protocol. Your physician designs the sequence based on where you are on the taper curve.",
      },
      {
        q: "Will this replace my GLP-1?",
        a: "No. Amino doesn't position this stack as a GLP-1 replacement. It's designed to protect metabolic markers through and after the taper.",
      },
      {
        q: "What about lean-mass loss?",
        a: "The Ipamorelin arm is designed specifically to help protect lean mass in a caloric deficit — but the meal plan and training design matter as much as the peptide stack.",
      },
      {
        q: "How is the re-panel scheduled?",
        a: "Week 12 by default, sometimes at week 8 for shorter cycles. Continuation is a physician decision in writing.",
      },
    ],
  },
  {
    slug: "sexual-health",
    name: "Sexual Health",
    category: "Sexual Health",
    outcome:
      "A discreet, physician-designed protocol focused on desire, arousal and confidence.",
    peptides: ["PT-141"],
    whoFor:
      "Adult men and women whose intake and labs point to desire-side rather than vascular-only concerns, and who want a non-vasoactive option reviewed by a physician.",
    mechanism:
      "PT-141 is a melanocortin-receptor cellular messenger that acts centrally rather than on the vascular system. It is designed to support desire and arousal pathways in the brain rather than mimic vasoactive medication.",
    expect: [
      "Onset: Effects are typically time-of-use rather than daily.",
      "Weeks 1–4: The physician calibrates dose and timing based on patient feedback.",
      "Ongoing: Blood-pressure and cardiovascular screening are part of eligibility and re-review.",
    ],
    accent: "clay",
    cycleWeeks: 6,
    pathways: [
      {
        icon: "brain",
        title: "Central melanocortin pathway",
        body: "Acts on desire-and-arousal circuits in the brain — not the vascular system.",
      },
      {
        icon: "shield",
        title: "Cardiovascular screening",
        body: "Blood pressure and cardiovascular screening are part of eligibility.",
      },
      {
        icon: "waveform",
        title: "Time-of-use dosing",
        body: "Physicians tune timing and dose across the first cycles — not a daily protocol.",
      },
    ],
    peptideRoles: [
      {
        productSlug: "pt-141",
        name: "PT-141",
        role: "Central melanocortin agonist · desire and arousal pathways.",
        delivery: "Subcutaneous · separate pen",
        frequency: "Time-of-use, physician-titrated",
      },
    ],
    timeline: [
      {
        week: "Week 0",
        title: "Intake + cardiovascular screening",
        body: "Blood pressure, cardiovascular history and a longevity-grade panel sit at the centre of eligibility.",
        highlight: true,
      },
      {
        week: "Weeks 1–2",
        title: "First titration window",
        body: "Physician calibrates dose and timing based on your feedback and any BP readings.",
      },
      {
        week: "Weeks 3–4",
        title: "Response consolidation",
        body: "Time-of-use profile stabilises; physician confirms the sweet spot.",
      },
      {
        week: "Week 6",
        title: "Re-review",
        body: "Continuation, taper, or discontinuation — decided in writing.",
        highlight: true,
      },
    ],
    day: [
      {
        when: "As needed",
        title: "PT-141 · time-of-use",
        body: "Physician-designed timing. Not a daily protocol.",
      },
      {
        when: "Screening",
        title: "Home BP reading",
        body: "Physician may ask for at-home readings across early cycles.",
      },
      {
        when: "Weekly",
        title: "Message your physician",
        body: "Response, side-effect signal, and any BP concerns are logged in the portal.",
      },
    ],
    biomarkers: [
      {
        name: "Blood pressure",
        why: "The primary safety signal — read at intake and periodically thereafter.",
      },
      {
        name: "Total testosterone",
        why: "Endocrine reference — helps physicians rule vascular-only concerns in or out.",
      },
      {
        name: "Lipid panel",
        why: "Baseline cardiovascular backdrop.",
      },
      {
        name: "Longevity-grade panel",
        why: "General safety and screening — always the starting point.",
      },
    ],
    faqs: [
      {
        q: "How is this different from vasoactive medication?",
        a: "PT-141 acts centrally, on brain-based desire and arousal circuits. Vasoactive medications act on the vascular system. Amino physicians use PT-141 where the intake and screening point to a central lever.",
      },
      {
        q: "What if my blood pressure is elevated?",
        a: "Then your physician will likely decline — in writing. Cardiovascular screening is part of eligibility, not a formality.",
      },
      {
        q: "Is this a daily protocol?",
        a: "No — it's time-of-use. Physicians calibrate dose and timing across the first cycles.",
      },
      {
        q: "Is this for men or women?",
        a: "Both, in physician-designed cases. The screening and titration differ — that's part of the physician's design.",
      },
    ],
  },
  {
    slug: "cognitive-focus",
    name: "Cognitive & Focus",
    category: "Cognitive",
    outcome:
      "A calm, non-stimulant stack designed to support attention, mood stability and cognitive endurance.",
    peptides: ["Semax", "Selank"],
    whoFor:
      "Founders, operators and shift-heavy professionals who want physician-reviewed cognitive support without stimulant load.",
    mechanism:
      "Semax is designed to support BDNF signalling — the brain's neurotrophic pathway. Selank acts on GABAergic tone and is associated with a calm, non-sedative anxiolytic effect. The stack is designed to raise cognitive ceiling without the crash profile of stimulants.",
    expect: [
      "Weeks 1–2: Task engagement and calm-under-load are the earliest signals.",
      "Weeks 3–6: Mood stability, verbal recall and cognitive endurance typically shift.",
      "Weeks 6–8: Physician reviews use pattern and either maintains, cycles or steps down.",
    ],
    accent: "sage",
    cycleWeeks: 8,
    pathways: [
      {
        icon: "brain",
        title: "BDNF signalling",
        body: "Semax is designed to support the neurotrophic pathway implicated in learning and plasticity.",
      },
      {
        icon: "shield",
        title: "GABAergic calm",
        body: "Selank is associated with calm-under-load — without the sedation of anxiolytic medication.",
      },
      {
        icon: "waveform",
        title: "Non-stimulant profile",
        body: "The design goal is a raised ceiling without the crash profile of stimulants.",
      },
    ],
    peptideRoles: [
      {
        productSlug: "semax",
        name: "Semax",
        role: "ACTH-fragment · BDNF signalling and attention.",
        delivery: "Intranasal · compounded bottle",
        frequency: "1× morning",
      },
      {
        productSlug: "selank",
        name: "Selank",
        role: "Tuftsin-analogue · GABAergic calm-under-load.",
        delivery: "Intranasal · compounded bottle",
        frequency: "As needed / daily, physician-designed",
      },
    ],
    timeline: [
      {
        week: "Week 0",
        title: "Baseline panel + intake",
        body: "Longevity-grade panel plus a structured cognitive intake around use pattern and load.",
        highlight: true,
      },
      {
        week: "Weeks 1–2",
        title: "Engagement + calm",
        body: "Task engagement and calm-under-load are the earliest signals patients report.",
      },
      {
        week: "Weeks 3–6",
        title: "Endurance + mood stability",
        body: "Verbal recall, cognitive endurance and mood stability typically shift in this window.",
      },
      {
        week: "Week 4",
        title: "Mid-cycle review",
        body: "Physician reviews use pattern and adherence.",
        highlight: true,
      },
      {
        week: "Weeks 5–7",
        title: "Consolidation",
        body: "Selank cadence may be tuned — daily vs. as-needed — based on your response.",
      },
      {
        week: "Week 8",
        title: "Re-review + decision",
        body: "Maintain, cycle, or step down — decided in writing.",
        highlight: true,
      },
    ],
    day: [
      {
        when: "Morning",
        title: "Semax · intranasal",
        body: "One-side-per-nostril, morning. Log the day's task load in the portal.",
      },
      {
        when: "Midday",
        title: "Load block",
        body: "Physician-designed timing means the peak read is during your deep-work window.",
      },
      {
        when: "As needed",
        title: "Selank · intranasal",
        body: "Physicians tune from as-needed to daily across weeks 1–4 based on your response.",
      },
      {
        when: "Evening",
        title: "Screens off",
        body: "Sleep depth compounds cognitive endurance — a lever the physician tracks.",
      },
    ],
    biomarkers: [
      {
        name: "hs-CRP",
        why: "Inflammation load ties to cognitive endurance — an early lever.",
      },
      {
        name: "Vitamin D",
        why: "Cofactor commonly corrected in parallel.",
      },
      {
        name: "Ferritin",
        why: "Iron stores can silently drive cognitive fatigue.",
      },
      {
        name: "Thyroid panel",
        why: "Baseline endocrine backdrop for cognitive complaints.",
      },
    ],
    faqs: [
      {
        q: "Will this feel like a stimulant?",
        a: "The intended profile is calm, sustained engagement rather than acute stimulation. Physicians adjust dosing if the signal drifts either way.",
      },
      {
        q: "Do I need to cycle it?",
        a: "Yes — Amino designs 4–8 week cycles with a review before extending. Use pattern is part of the physician's read.",
      },
      {
        q: "Can I take it alongside SSRIs or ADHD medication?",
        a: "That is exactly the conversation you'll have with your physician on Amino. Nothing is prescribed without a full intake and review.",
      },
      {
        q: "How is it delivered?",
        a: "Both peptides are compounded fresh into intranasal bottles by a fully licensed UAE pharmacy, cold-chain shipped, 45-day shelf life.",
      },
    ],
  },
];
