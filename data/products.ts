export type ProductCategory =
  | "Repair"
  | "Longevity"
  | "Growth"
  | "Metabolic"
  | "Cognitive"
  | "Sexual Health";

export type MechanismCard = {
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

export type ClaimCard = {
  headline: string;
  body: string;
  source: string;
};

export type Faq = { q: string; a: string };

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  peptideSequence?: string;
  molWeight?: string;
  tagline: string;
  benefit: string;
  mechanism: string;
  requirements: string;
  mechanismCards: [MechanismCard, MechanismCard, MechanismCard];
  claims: [ClaimCard, ClaimCard, ClaimCard];
  dosing: {
    label: string;
    frequency: string;
    delivery: string;
    cycle: string;
    note: string;
  };
  faqs: Faq[];
  relatedProtocolSlugs: string[];
  relatedProductSlugs: string[];
};

export const products: Product[] = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    category: "Repair",
    peptideSequence: "15 amino acids · gastric-derived",
    molWeight: "1419 Da",
    tagline: "A repair-signal peptide, physician-reviewed.",
    benefit:
      "A cellular messenger designed to support connective-tissue repair and gut lining integrity.",
    mechanism:
      "Derived from a gastric peptide sequence, BPC-157 is designed to support angiogenesis and cell migration across musculoskeletal and gastrointestinal tissue.",
    requirements:
      "Requires a health intake, baseline blood panel and physician review. Compounded fresh with a 45-day shelf life and shipped cold-chain.",
    mechanismCards: [
      {
        icon: "regenerate",
        title: "Supports connective-tissue repair",
        body: "A cellular messenger designed to signal fibroblast activity and cell migration at sites of soft-tissue stress.",
      },
      {
        icon: "shield",
        title: "Gut lining integrity",
        body: "Its gastric-derived origin is why it's used inside physician-designed protocols targeting GI resilience.",
      },
      {
        icon: "pulse",
        title: "Angiogenesis signalling",
        body: "Designed to support the formation of small blood vessels — the delivery system your repair pathways depend on.",
      },
    ],
    claims: [
      {
        headline: "Reached for in soft-tissue recovery protocols.",
        body: "One of the most-prescribed peptides inside Amino's Recovery & Repair protocol — used for tendon, ligament and post-training load.",
        source: "Internal — Amino clinical use, H1 2026",
      },
      {
        headline: "Gut-first clinicians pair it with dietary reset.",
        body: "Physicians often layer BPC-157 with a targeted nutrition protocol during weeks when GI markers are the primary lever.",
        source: "Amino physician panel guidance",
      },
      {
        headline: "Preclinical literature supports its repair signalling.",
        body: "A growing body of preclinical work — animal models across tendon, ligament and mucosal repair — informs how Amino physicians use it off-label.",
        source: "Sikiric et al. and related preclinical reviews",
      },
    ],
    dosing: {
      label: "250 mcg",
      frequency: "1× daily",
      delivery: "Subcutaneous · separate pen",
      cycle: "4–8 week cycles with re-review",
      note: "Representative framework. Your physician sets your dose from your intake, labs and case.",
    },
    faqs: [
      {
        q: "Is BPC-157 legal / prescribable in the UAE?",
        a: "BPC-157 is prescribed off-label under the DHA framework by a licensed physician, compounded by a fully licensed UAE compounding pharmacy regulated by MOH and EDE. Every case requires an intake, blood panel and written physician approval.",
      },
      {
        q: "How is it delivered?",
        a: "BPC-157 is compounded fresh into its own pen — separate from any other peptide in your stack. This is a deliberate design choice: cleaner dosing, easier titration and no forced pairings.",
      },
      {
        q: "How long is a typical cycle?",
        a: "Physicians commonly design 4–8 week cycles followed by a review. Cycle length is driven by your goal, the injury or issue being addressed, and — when relevant — repeat markers.",
      },
      {
        q: "What if I've had recent bloodwork?",
        a: "Bring it. Your physician can build from a recent longevity-grade panel. If your labs are older than 12 months, or key markers are missing, Amino will order a baseline panel before any peptide is prescribed.",
      },
    ],
    relatedProtocolSlugs: ["recovery-repair", "longevity-vitality"],
    relatedProductSlugs: ["tb-500", "ghk-cu"],
  },
  {
    slug: "tb-500",
    name: "TB-500",
    category: "Repair",
    peptideSequence: "TB4 fragment · 17 amino acids",
    molWeight: "1751 Da",
    tagline: "A repair-signal peptide, physician-reviewed.",
    benefit:
      "A thymosin-β4 fragment used inside physician-designed recovery protocols.",
    mechanism:
      "TB-500 is designed to support actin regulation, cell migration and wound healing across soft tissue, tendon and ligament.",
    requirements:
      "Requires a health intake, baseline blood panel and physician review. Compounded fresh with a 45-day shelf life and shipped cold-chain.",
    mechanismCards: [
      {
        icon: "waveform",
        title: "Actin regulation",
        body: "Central to cytoskeletal reorganisation — the process cells go through when they migrate to a site of repair.",
      },
      {
        icon: "regenerate",
        title: "Soft-tissue and wound signalling",
        body: "Used inside recovery protocols where tendon, ligament and muscular integrity are the primary levers.",
      },
      {
        icon: "pulse",
        title: "Angiogenesis support",
        body: "Designed to support new-vessel formation alongside BPC-157 in physician-designed pairings.",
      },
    ],
    claims: [
      {
        headline: "Frequently paired with BPC-157.",
        body: "Most physicians on Amino design TB-500 alongside BPC-157 for recovery cases — different mechanisms, complementary signal.",
        source: "Amino physician panel guidance",
      },
      {
        headline: "Used inside 4–8 week recovery windows.",
        body: "Cycles are physician-designed around the injury or goal — not sold as an indefinite subscription.",
        source: "Internal — Amino clinical use",
      },
      {
        headline: "Preclinical work supports its repair signalling.",
        body: "Thymosin-β4 has been studied across cardiac, dermal and musculoskeletal repair models — informing off-label use in physician-designed protocols.",
        source: "Goldstein et al. and related preclinical work",
      },
    ],
    dosing: {
      label: "2 mg",
      frequency: "1–2× weekly",
      delivery: "Subcutaneous · separate pen",
      cycle: "4–8 week cycles with re-review",
      note: "Representative framework. Your physician sets your dose from your intake, labs and case.",
    },
    faqs: [
      {
        q: "Why is TB-500 dosed weekly rather than daily?",
        a: "Its longer effective window means most physicians on Amino design 1–2 doses per week. This is a physician call — your intake and case dictate the frequency.",
      },
      {
        q: "Do I need to pair it with BPC-157?",
        a: "Not always. Some cases pair them; some don't. Your physician decides based on your intake, whether soft tissue or gut lining is the primary lever, and your labs.",
      },
      {
        q: "How is it delivered?",
        a: "TB-500 is compounded fresh into its own pen. Cold-chain shipped, 45-day shelf life.",
      },
      {
        q: "How is safety monitored across a cycle?",
        a: "You'll have direct messaging access to your physician, a mid-cycle check-in and — for longer cycles or high-adherence patients — a repeat panel before extending.",
      },
    ],
    relatedProtocolSlugs: ["recovery-repair"],
    relatedProductSlugs: ["bpc-157", "ghk-cu"],
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    category: "Longevity",
    peptideSequence: "Tripeptide · copper-bound",
    molWeight: "402 Da",
    tagline: "A copper-peptide used inside longevity protocols.",
    benefit:
      "A copper-peptide used to support skin repair, collagen turnover and healthy aging markers.",
    mechanism:
      "GHK-Cu is a cellular messenger implicated in fibroblast activity, angiogenesis and extracellular matrix repair — used inside physician-designed longevity stacks.",
    requirements:
      "Requires a health intake, baseline blood panel and physician review. Compounded fresh with a 45-day shelf life and shipped cold-chain.",
    mechanismCards: [
      {
        icon: "leaf",
        title: "Collagen turnover",
        body: "Implicated in the extracellular matrix rebuild that skin, hair and connective tissue depend on.",
      },
      {
        icon: "regenerate",
        title: "Fibroblast signalling",
        body: "A cellular messenger that appears in Amino longevity stacks where the goal is skin integrity and repair signalling.",
      },
      {
        icon: "pulse",
        title: "Angiogenesis support",
        body: "Designed to support the small-vessel network that keeps repair pathways supplied.",
      },
    ],
    claims: [
      {
        headline: "A staple inside longevity stacks.",
        body: "GHK-Cu appears in the majority of Amino Longevity & Vitality protocols — usually paired with Epithalon and NAD+.",
        source: "Internal — Amino clinical use",
      },
      {
        headline: "Physician-designed dosing sits below cosmetic-clinic ranges.",
        body: "Amino physicians err toward conservative, cycled dosing — never an indefinite refill.",
        source: "Amino physician panel guidance",
      },
      {
        headline: "Preclinical work spans skin, hair and connective tissue.",
        body: "Its published work has informed cosmetic and clinical use for decades and continues to be studied.",
        source: "Pickart & Margolina and related work",
      },
    ],
    dosing: {
      label: "1–2 mg",
      frequency: "1× daily",
      delivery: "Subcutaneous · separate pen",
      cycle: "8–12 week cycles with review",
      note: "Representative framework. Your physician sets your dose from your intake, labs and case.",
    },
    faqs: [
      {
        q: "Is GHK-Cu also used topically?",
        a: "Topical GHK-Cu exists in cosmetic products. Amino's use is prescription-grade subcutaneous, inside a physician-designed longevity protocol — different indication, different dosing, different oversight.",
      },
      {
        q: "How long before I notice anything?",
        a: "Skin quality and recovery are typically the earliest signals across weeks 2–6. Physicians reassess with a repeat panel around week 8–12.",
      },
      {
        q: "Does it stack with other Amino peptides?",
        a: "Yes — most commonly with Epithalon and NAD+ inside the Longevity & Vitality protocol. Every stack is designed one case at a time.",
      },
      {
        q: "How is it shipped?",
        a: "Cold-chain across the UAE and wider GCC, in temperature-monitored packaging. Fresh-compounded with a 45-day shelf life.",
      },
    ],
    relatedProtocolSlugs: ["longevity-vitality"],
    relatedProductSlugs: ["epithalon", "nad-plus"],
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    category: "Growth",
    peptideSequence: "5 amino acids · GH secretagogue",
    molWeight: "712 Da",
    tagline: "Selective GH secretagogue, physician-designed.",
    benefit:
      "A selective growth-hormone secretagogue designed to support the body's own GH pulse.",
    mechanism:
      "Ipamorelin acts on ghrelin receptors as a cellular messenger to the pituitary — designed to preserve the physiological rhythm of GH release rather than replace it.",
    requirements:
      "Requires a health intake, baseline blood panel including IGF-1, and physician review. Compounded fresh with a 45-day shelf life and shipped cold-chain.",
    mechanismCards: [
      {
        icon: "moon",
        title: "Preserves the natural GH pulse",
        body: "Designed to signal — not replace — your body's own pulsatile release of growth hormone.",
      },
      {
        icon: "waveform",
        title: "Selective by design",
        body: "Compared with older secretagogues, Ipamorelin is used for its clean signalling profile.",
      },
      {
        icon: "spark",
        title: "Reads on your IGF-1",
        body: "Physicians track your response with follow-up IGF-1 rather than defaulting to indefinite refills.",
      },
    ],
    claims: [
      {
        headline: "Cycled, not indefinite.",
        body: "Amino physicians design 8–12 week cycles with an IGF-1 re-panel before extending. No auto-refills.",
        source: "Amino physician panel guidance",
      },
      {
        headline: "Often paired with Sermorelin or CJC-1295.",
        body: "Physicians combine a secretagogue with a GHRH analogue where the goal is longer-arc GH signalling.",
        source: "Internal — Amino clinical use",
      },
      {
        headline: "Popular inside post-GLP-1 stacks.",
        body: "Increasingly used to help protect lean mass through and after a GLP-1 taper — under physician review.",
        source: "Internal — Amino clinical use",
      },
    ],
    dosing: {
      label: "200–300 mcg",
      frequency: "1× nightly",
      delivery: "Subcutaneous · separate pen",
      cycle: "8–12 week cycles with re-panel",
      note: "Representative framework. Your physician sets your dose from your intake, labs and case.",
    },
    faqs: [
      {
        q: "Is this the same as taking growth hormone?",
        a: "No. Ipamorelin is a secretagogue — a signal to your body's own pituitary. It's designed to work with your endogenous GH pulse, not replace it.",
      },
      {
        q: "Do you monitor IGF-1?",
        a: "Yes. Baseline and follow-up IGF-1 sit at the centre of how Amino physicians design and re-review this protocol.",
      },
      {
        q: "Why nightly?",
        a: "The physiological GH pulse is strongest around sleep onset. Dosing at night is designed to work with — not against — that rhythm.",
      },
      {
        q: "Will it help with body composition?",
        a: "Amino avoids body-composition promises. It's used inside physician-designed protocols where the intake and labs point toward a GH-signal lever.",
      },
    ],
    relatedProtocolSlugs: ["growth-performance", "metabolic-post-glp1"],
    relatedProductSlugs: ["sermorelin", "cjc-1295"],
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    category: "Growth",
    peptideSequence: "29 amino acids · GHRH analogue",
    molWeight: "3358 Da",
    tagline: "GHRH analogue, physician-designed.",
    benefit:
      "A GHRH analogue used inside physician-designed growth and recovery protocols.",
    mechanism:
      "Sermorelin is a cellular messenger to the pituitary designed to support endogenous GH secretion patterns and long-arc recovery.",
    requirements:
      "Requires a health intake, baseline blood panel including IGF-1, and physician review. Compounded fresh with a 45-day shelf life and shipped cold-chain.",
    mechanismCards: [
      {
        icon: "moon",
        title: "GHRH pathway signal",
        body: "Works upstream of the pituitary to support the endogenous GH release rhythm.",
      },
      {
        icon: "waveform",
        title: "Long-arc pairing",
        body: "Often used with a secretagogue like Ipamorelin to shape both the trigger and the amplitude of GH release.",
      },
      {
        icon: "spark",
        title: "Read alongside IGF-1",
        body: "Your response is tracked in your labs — not assumed.",
      },
    ],
    claims: [
      {
        headline: "Used inside physician-designed recovery stacks.",
        body: "Sermorelin appears in Growth & Performance protocols where the goal is a longer-arc GH signal, not an acute pulse alone.",
        source: "Internal — Amino clinical use",
      },
      {
        headline: "Cycled with re-panel.",
        body: "Amino designs 8–12 week cycles with an IGF-1 re-panel before any decision to extend.",
        source: "Amino physician panel guidance",
      },
      {
        headline: "Long clinical history.",
        body: "Sermorelin has decades of published clinical use, informing how Amino physicians use it off-label under DHA framework.",
        source: "Published clinical literature",
      },
    ],
    dosing: {
      label: "200–500 mcg",
      frequency: "1× nightly",
      delivery: "Subcutaneous · separate pen",
      cycle: "8–12 week cycles with re-panel",
      note: "Representative framework. Your physician sets your dose from your intake, labs and case.",
    },
    faqs: [
      {
        q: "How does Sermorelin differ from Ipamorelin?",
        a: "They act on different pathways. Sermorelin is a GHRH analogue (upstream signal). Ipamorelin is a secretagogue (release signal). Amino physicians often combine them where the goal is a longer, cleaner GH pulse.",
      },
      {
        q: "Do I need bloodwork?",
        a: "Yes — a longevity-grade panel with IGF-1 at minimum. Your physician builds the protocol from that panel and your intake.",
      },
      {
        q: "Is this appropriate long-term?",
        a: "It's cycled, not indefinite. Your physician re-reviews after 8–12 weeks with repeat markers before any decision to extend.",
      },
      {
        q: "Can I stack it with recovery peptides?",
        a: "Yes — physicians often layer it inside broader Growth & Performance protocols where BPC-157 or TB-500 are also being used.",
      },
    ],
    relatedProtocolSlugs: ["growth-performance"],
    relatedProductSlugs: ["ipamorelin", "cjc-1295"],
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    category: "Growth",
    peptideSequence: "30 amino acids · GHRH analogue",
    molWeight: "3647 Da",
    tagline: "Long-acting GHRH analogue.",
    benefit:
      "A long-acting GHRH analogue used alongside a GH secretagogue in physician-designed stacks.",
    mechanism:
      "CJC-1295 is a cellular messenger designed to extend the amplitude of the body's own GH pulse when paired with a secretagogue such as Ipamorelin.",
    requirements:
      "Requires a health intake, baseline blood panel including IGF-1, and physician review. Compounded fresh with a 45-day shelf life and shipped cold-chain.",
    mechanismCards: [
      {
        icon: "moon",
        title: "Extended GHRH signal",
        body: "A longer effective window than Sermorelin — used where a wider GH release amplitude is the physician's goal.",
      },
      {
        icon: "waveform",
        title: "Pairs with a secretagogue",
        body: "Designed to be layered with a release signal like Ipamorelin — different mechanisms, complementary signal.",
      },
      {
        icon: "spark",
        title: "IGF-1 informs the review",
        body: "Your response is tracked in your labs at cycle midpoint and end.",
      },
    ],
    claims: [
      {
        headline: "Paired, not solo.",
        body: "Almost always paired with a secretagogue in Amino's Growth & Performance protocol.",
        source: "Amino physician panel guidance",
      },
      {
        headline: "Longer effective window.",
        body: "Its structural design allows less-frequent dosing than Sermorelin — used where the goal is amplitude, not frequency.",
        source: "Published pharmacology",
      },
      {
        headline: "Re-panel before extension.",
        body: "Amino designs 8–12 week cycles with an IGF-1 re-panel before extending. No auto-refills.",
        source: "Internal — Amino clinical use",
      },
    ],
    dosing: {
      label: "1–2 mg",
      frequency: "1–2× weekly",
      delivery: "Subcutaneous · separate pen",
      cycle: "8–12 week cycles with re-panel",
      note: "Representative framework. Your physician sets your dose from your intake, labs and case.",
    },
    faqs: [
      {
        q: "Do I take CJC-1295 alone?",
        a: "Amino's default is to pair it with a secretagogue like Ipamorelin. Solo use is possible but rarely the physician's design choice.",
      },
      {
        q: "How is it dosed?",
        a: "Typically 1–2× per week under a physician-designed framework — its long effective window is the reason less-frequent dosing works.",
      },
      {
        q: "Do you monitor markers?",
        a: "Yes — IGF-1 baseline and at mid/end of cycle. Your physician re-reviews before extending.",
      },
      {
        q: "Is this appropriate for me?",
        a: "That is the physician's call after your intake and blood panel — it isn't right for every case, and Amino physicians will say so in writing.",
      },
    ],
    relatedProtocolSlugs: ["growth-performance"],
    relatedProductSlugs: ["ipamorelin", "sermorelin"],
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    category: "Longevity",
    peptideSequence: "Coenzyme · NAD⁺",
    molWeight: "663 Da",
    tagline: "A mitochondrial coenzyme, physician-supervised.",
    benefit:
      "A coenzyme central to mitochondrial energy metabolism, used inside longevity and metabolic protocols.",
    mechanism:
      "NAD+ is designed to support the redox and sirtuin pathways implicated in cellular energy, DNA repair signalling and metabolic health.",
    requirements:
      "Requires a health intake, baseline blood panel and physician review. Compounded fresh with a 45-day shelf life and shipped cold-chain.",
    mechanismCards: [
      {
        icon: "flame",
        title: "Mitochondrial energy support",
        body: "Central to the redox reactions that power cellular energy production.",
      },
      {
        icon: "molecule",
        title: "Sirtuin signalling",
        body: "Implicated in the pathways studied in cellular aging and DNA repair.",
      },
      {
        icon: "spark",
        title: "Layered inside stacks",
        body: "Amino uses NAD+ inside longevity, metabolic and post-GLP-1 stacks — never as a stand-alone lifestyle drip.",
      },
    ],
    claims: [
      {
        headline: "Layered, not stand-alone.",
        body: "Amino uses NAD+ inside physician-designed stacks — not as a cosmetic drip clinic offering.",
        source: "Amino physician panel guidance",
      },
      {
        headline: "Cycled with clear review.",
        body: "Cycle lengths and cadence are physician-designed, with re-review before any extension.",
        source: "Internal — Amino clinical use",
      },
      {
        headline: "Supported by a large body of preclinical work.",
        body: "Sirtuin and mitochondrial biology inform how Amino physicians use it as part of broader protocols.",
        source: "Published preclinical literature",
      },
    ],
    dosing: {
      label: "100–200 mg",
      frequency: "1–2× weekly",
      delivery: "Subcutaneous · separate pen",
      cycle: "8–12 week cycles with review",
      note: "Representative framework. Your physician sets your dose from your intake, labs and case.",
    },
    faqs: [
      {
        q: "Is this the same as an NAD+ IV drip?",
        a: "No. Amino's use is a physician-designed, subcutaneous, cycled protocol — different indication and different oversight from a cosmetic drip.",
      },
      {
        q: "Can I stack it with peptides?",
        a: "Yes — NAD+ appears inside Longevity, Metabolic and Post-GLP-1 stacks. Every stack is physician-designed.",
      },
      {
        q: "Do you monitor a marker for it?",
        a: "Physicians read energy, sleep and adherence signals alongside your broader panel — no single marker maps directly to NAD+.",
      },
      {
        q: "How long is a cycle?",
        a: "Typically 8–12 weeks with a review before extending. No auto-refills.",
      },
    ],
    relatedProtocolSlugs: [
      "longevity-vitality",
      "metabolic-post-glp1",
    ],
    relatedProductSlugs: ["epithalon", "mots-c"],
  },
  {
    slug: "epithalon",
    name: "Epithalon",
    category: "Longevity",
    peptideSequence: "Tetrapeptide · pineal-derived",
    molWeight: "390 Da",
    tagline: "A pineal-derived longevity peptide.",
    benefit:
      "A pineal-derived cellular messenger used inside physician-designed longevity stacks.",
    mechanism:
      "Epithalon is associated with telomerase regulation and pineal rhythm — designed to support sleep architecture and long-horizon aging markers.",
    requirements:
      "Requires a health intake, baseline blood panel and physician review. Compounded fresh with a 45-day shelf life and shipped cold-chain.",
    mechanismCards: [
      {
        icon: "moon",
        title: "Sleep architecture support",
        body: "Its pineal pathway is why physicians use it where the sleep-depth lever is being addressed.",
      },
      {
        icon: "molecule",
        title: "Telomerase regulation",
        body: "Associated with cellular aging pathways in the published literature.",
      },
      {
        icon: "spark",
        title: "Long-cycle, low-frequency",
        body: "Amino's default framework is short courses across the year — never indefinite dosing.",
      },
    ],
    claims: [
      {
        headline: "Sleep depth is often the earliest signal.",
        body: "Patients on longevity protocols frequently report improvements in sleep depth in weeks 1–2.",
        source: "Internal — Amino clinical use",
      },
      {
        headline: "Short courses, not indefinite.",
        body: "Physicians design short courses (typically 10–20 days) — sometimes repeated across a year — rather than continuous dosing.",
        source: "Amino physician panel guidance",
      },
      {
        headline: "Studied in aging biology.",
        body: "Epithalon has a long publication history in the aging-biology literature that informs off-label use.",
        source: "Anisimov and related work",
      },
    ],
    dosing: {
      label: "5–10 mg",
      frequency: "1× nightly",
      delivery: "Subcutaneous · separate pen",
      cycle: "10–20 day short courses",
      note: "Representative framework. Your physician sets your dose from your intake, labs and case.",
    },
    faqs: [
      {
        q: "Why short courses rather than continuous?",
        a: "Its pineal mechanism is best used in short concentrated windows across the year — that's how the published work frames it, and how Amino physicians design it.",
      },
      {
        q: "Do I need bloodwork?",
        a: "Yes — a longevity-grade panel. Your physician reads the panel alongside your sleep and energy signals when framing the cycle.",
      },
      {
        q: "Will it help me sleep?",
        a: "Amino avoids single-outcome promises. Sleep depth is one signal physicians read alongside broader markers — the physician decides whether it's appropriate.",
      },
      {
        q: "Does it stack with other peptides?",
        a: "Yes — most commonly with GHK-Cu and NAD+ inside the Longevity & Vitality protocol.",
      },
    ],
    relatedProtocolSlugs: ["longevity-vitality"],
    relatedProductSlugs: ["ghk-cu", "nad-plus"],
  },
  {
    slug: "semax",
    name: "Semax",
    category: "Cognitive",
    peptideSequence: "7 amino acids · ACTH fragment",
    molWeight: "813 Da",
    tagline: "A cognitive cellular messenger, physician-reviewed.",
    benefit:
      "A cognitive cellular messenger designed to support attention and BDNF signalling.",
    mechanism:
      "Semax is designed to support BDNF-related pathways and dopaminergic tone — used inside physician-designed cognitive protocols.",
    requirements:
      "Requires a health intake, baseline blood panel and physician review. Compounded fresh with a 45-day shelf life and shipped cold-chain.",
    mechanismCards: [
      {
        icon: "brain",
        title: "BDNF signalling",
        body: "Designed to support brain-derived neurotrophic factor pathways implicated in learning and neural plasticity.",
      },
      {
        icon: "spark",
        title: "Dopaminergic tone",
        body: "Associated with attention and task engagement — Amino's physicians use it as a non-stimulant lever.",
      },
      {
        icon: "waveform",
        title: "Non-stimulant profile",
        body: "Used where the goal is calm-under-load capacity rather than acute stimulation.",
      },
    ],
    claims: [
      {
        headline: "A non-stimulant cognitive lever.",
        body: "Amino physicians use Semax where the goal is sustained attention and calm engagement — not stimulant load.",
        source: "Amino physician panel guidance",
      },
      {
        headline: "Layered with Selank in cognitive protocols.",
        body: "The most common physician design pairs Semax with Selank — attention plus calm.",
        source: "Internal — Amino clinical use",
      },
      {
        headline: "Long publication history in Russia.",
        body: "Semax has decades of published clinical use in cognitive and neurological contexts that inform off-label use.",
        source: "Published clinical literature",
      },
    ],
    dosing: {
      label: "300–600 mcg",
      frequency: "Intranasal · morning",
      delivery: "Compounded intranasal",
      cycle: "4–8 week cycles with review",
      note: "Representative framework. Your physician sets your dose from your intake, labs and case.",
    },
    faqs: [
      {
        q: "How is Semax delivered?",
        a: "Amino's default is intranasal — compounded fresh in its own bottle. Cold-chain shipped, 45-day shelf life.",
      },
      {
        q: "Will it feel like a stimulant?",
        a: "The intended profile is calm, sustained engagement rather than acute stimulation. Physicians adjust dosing based on your response.",
      },
      {
        q: "Do I need to cycle it?",
        a: "Yes — Amino designs 4–8 week cycles with a review before any decision to extend.",
      },
      {
        q: "Can I take it with Selank?",
        a: "The Cognitive & Focus protocol most commonly pairs the two — attention plus GABAergic calm.",
      },
    ],
    relatedProtocolSlugs: ["cognitive-focus"],
    relatedProductSlugs: ["selank"],
  },
  {
    slug: "selank",
    name: "Selank",
    category: "Cognitive",
    peptideSequence: "7 amino acids · tuftsin analogue",
    molWeight: "751 Da",
    tagline: "Calm-under-load, physician-reviewed.",
    benefit:
      "A calm, non-sedative cellular messenger used inside cognitive and mood-stability protocols.",
    mechanism:
      "Selank is designed to support GABAergic tone and is associated with calm-under-load without the sedation profile of anxiolytic medication.",
    requirements:
      "Requires a health intake, baseline blood panel and physician review. Compounded fresh with a 45-day shelf life and shipped cold-chain.",
    mechanismCards: [
      {
        icon: "brain",
        title: "GABAergic tone",
        body: "Associated with a calm, anxiolytic-flavoured profile — without the sedation of benzodiazepine-class drugs.",
      },
      {
        icon: "shield",
        title: "Mood-stability signal",
        body: "Used inside cognitive protocols where the physician wants to protect the ceiling under load.",
      },
      {
        icon: "waveform",
        title: "Pairs with Semax",
        body: "Attention plus calm — the most common physician-designed cognitive pairing on Amino.",
      },
    ],
    claims: [
      {
        headline: "Calm without sedation.",
        body: "Selank is used where the physician wants an anxiolytic-flavoured signal without the sedation footprint of classic anxiolytics.",
        source: "Amino physician panel guidance",
      },
      {
        headline: "Layered with Semax.",
        body: "The default Cognitive & Focus protocol design pairs the two — attention plus calm.",
        source: "Internal — Amino clinical use",
      },
      {
        headline: "Long Russian clinical history.",
        body: "Its publication history informs how Amino physicians use it off-label under DHA framework.",
        source: "Published clinical literature",
      },
    ],
    dosing: {
      label: "250–500 mcg",
      frequency: "Intranasal · as needed / daily",
      delivery: "Compounded intranasal",
      cycle: "4–8 week cycles with review",
      note: "Representative framework. Your physician sets your dose from your intake, labs and case.",
    },
    faqs: [
      {
        q: "Is Selank sedating?",
        a: "Not by design. Its intended profile is calm-under-load without sedation. Physicians adjust dosing if the signal drifts either way.",
      },
      {
        q: "How is it delivered?",
        a: "Intranasal, compounded fresh in its own bottle. Cold-chain shipped, 45-day shelf life.",
      },
      {
        q: "Can it be paired with Semax?",
        a: "Yes — that's the default Cognitive & Focus protocol design.",
      },
      {
        q: "Is it a replacement for anxiolytic medication?",
        a: "No. Selank is used inside a physician-designed cognitive protocol — not as a substitute for medication a physician has already prescribed you.",
      },
    ],
    relatedProtocolSlugs: ["cognitive-focus"],
    relatedProductSlugs: ["semax"],
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    category: "Metabolic",
    peptideSequence: "16 amino acids · mitochondrial-derived",
    molWeight: "2174 Da",
    tagline: "A mitochondrial-derived metabolic peptide.",
    benefit:
      "A mitochondrial-derived cellular messenger used inside metabolic and post-GLP-1 protocols.",
    mechanism:
      "MOTS-c is implicated in insulin sensitivity, exercise capacity and metabolic flexibility — used inside physician-designed metabolic stacks.",
    requirements:
      "Requires a health intake, baseline blood panel including metabolic markers, and physician review. Compounded fresh with a 45-day shelf life and shipped cold-chain.",
    mechanismCards: [
      {
        icon: "flame",
        title: "Metabolic flexibility",
        body: "Implicated in insulin sensitivity and the ability to shift between fuel sources under load.",
      },
      {
        icon: "molecule",
        title: "Mitochondrial-derived",
        body: "A rare mitochondrial-encoded peptide — used where the goal is deeper metabolic signalling.",
      },
      {
        icon: "spark",
        title: "Common in post-GLP-1 stacks",
        body: "Physicians layer it inside taper protocols to protect metabolic markers.",
      },
    ],
    claims: [
      {
        headline: "Popular in post-GLP-1 protocols.",
        body: "Increasingly used to help protect metabolic markers through and after a GLP-1 taper, under physician review.",
        source: "Internal — Amino clinical use",
      },
      {
        headline: "Read on your metabolic panel.",
        body: "HbA1c and lipid trend inform whether the protocol continues — not a subscription default.",
        source: "Amino physician panel guidance",
      },
      {
        headline: "A growing preclinical literature.",
        body: "The published work on mitochondrial-derived peptides continues to inform how they're used off-label.",
        source: "Lee et al. and related work",
      },
    ],
    dosing: {
      label: "5–10 mg",
      frequency: "1× weekly",
      delivery: "Subcutaneous · separate pen",
      cycle: "8–12 week cycles with re-panel",
      note: "Representative framework. Your physician sets your dose from your intake, labs and case.",
    },
    faqs: [
      {
        q: "Is this instead of a GLP-1?",
        a: "No — Amino doesn't position MOTS-c as a GLP-1 replacement. It's used inside metabolic and post-GLP-1 protocols under physician review.",
      },
      {
        q: "Do you monitor a marker?",
        a: "Yes — HbA1c, fasting glucose and lipid panels sit at the centre of how physicians read your response.",
      },
      {
        q: "How is it delivered?",
        a: "Subcutaneous, in its own pen. Cold-chain shipped, 45-day shelf life.",
      },
      {
        q: "How long is a cycle?",
        a: "Typically 8–12 weeks with a metabolic re-panel before any decision to extend.",
      },
    ],
    relatedProtocolSlugs: ["metabolic-post-glp1"],
    relatedProductSlugs: ["ipamorelin", "nad-plus"],
  },
  {
    slug: "pt-141",
    name: "PT-141",
    category: "Sexual Health",
    peptideSequence: "7 amino acids · melanocortin agonist",
    molWeight: "1025 Da",
    tagline: "A centrally-acting sexual-health peptide.",
    benefit:
      "A centrally-acting melanocortin cellular messenger used inside sexual health protocols.",
    mechanism:
      "PT-141 acts on the central melanocortin system — designed to support desire and arousal pathways in the brain rather than the vascular system.",
    requirements:
      "Requires a health intake, cardiovascular screening including blood pressure, and physician review. Compounded fresh with a 45-day shelf life and shipped cold-chain.",
    mechanismCards: [
      {
        icon: "brain",
        title: "Central melanocortin pathway",
        body: "Acts on brain-based desire and arousal circuits — not the vascular system.",
      },
      {
        icon: "shield",
        title: "Physician-screened first",
        body: "Cardiovascular screening including blood pressure is part of eligibility.",
      },
      {
        icon: "waveform",
        title: "Time-of-use dosing",
        body: "Used episodically rather than daily — physicians tune timing and dose across early cycles.",
      },
    ],
    claims: [
      {
        headline: "Central, not vascular.",
        body: "Amino uses PT-141 where the intake and screening point to desire-side rather than vascular-only concerns.",
        source: "Amino physician panel guidance",
      },
      {
        headline: "Screened, not subscription-refilled.",
        body: "Blood pressure and cardiovascular screening are part of eligibility and periodic re-review.",
        source: "Internal — Amino clinical use",
      },
      {
        headline: "Published clinical work exists in the desire-pathway indication.",
        body: "Its mechanism and use are informed by the published literature on central melanocortin agonists.",
        source: "Published clinical literature",
      },
    ],
    dosing: {
      label: "1–2 mg",
      frequency: "As needed",
      delivery: "Subcutaneous · separate pen",
      cycle: "Physician-designed titration",
      note: "Representative framework. Your physician sets your dose from your intake, screening and case.",
    },
    faqs: [
      {
        q: "How is this different from vasoactive medication?",
        a: "PT-141 acts centrally — on the desire and arousal pathways in the brain — rather than on the vascular system. Amino physicians use it where the intake and screening point to a central, not vascular, lever.",
      },
      {
        q: "What screening is required?",
        a: "Cardiovascular screening including blood pressure sits at the centre of eligibility. Some patients are declined — Amino physicians will say so in writing.",
      },
      {
        q: "Is it daily?",
        a: "No — most physicians design PT-141 as time-of-use rather than a daily protocol. Timing and dose are tuned across early cycles.",
      },
      {
        q: "Can I take it with medication I already have?",
        a: "That is exactly the conversation you'll have with your physician on Amino. Nothing is prescribed without a full intake and review.",
      },
    ],
    relatedProtocolSlugs: ["sexual-health"],
    relatedProductSlugs: [],
  },
];
