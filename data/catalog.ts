export const PRICE_AED = 1500;
export const QUARTER_AED = PRICE_AED * 3;
export const PROTOCOL_AED = 2000;
// 3-month protocol price is assumed to follow the same x3 rule; awaiting confirmation.
export const PROTOCOL_QUARTER_AED = PROTOCOL_AED * 3;
export const BLOOD_TEST_AED = 499;
export const aed = (n: number) => `AED ${n.toLocaleString("en-US")}`;

export type Tone = "navy" | "ice" | "frost" | "azure";

export type Peptide = {
  slug: string;
  name: string;
  fullName?: string;
  tag: string;
  line: string;
  /** Routes from the approved list. null means still to be confirmed. */
  route: string | null;
  tone: Tone;
};

// Lines for Tesamorelin, Thymosin alpha-1, SS-31 and KPV are drafts for
// medical review.
export const peptides: Peptide[] = [
  { slug: "bpc-157", name: "BPC-157", fullName: "BPC-157 acetate", tag: "Repair", line: "Designed to support connective-tissue repair and gut lining integrity.", route: "Subcutaneous or intramuscular", tone: "navy" },
  { slug: "tesamorelin", name: "Tesamorelin", tag: "Metabolic", line: "Designed to support healthy body composition.", route: null, tone: "ice" },
  { slug: "mots-c", name: "MOTS-c", fullName: "MOTS-c acetate", tag: "Metabolic", line: "A mitochondrial-derived cellular messenger.", route: "Subcutaneous or intramuscular", tone: "frost" },
  { slug: "tb-500", name: "TB-500", fullName: "TB-500 acetate", tag: "Repair", line: "A thymosin-β4 fragment used in physician-designed recovery protocols.", route: "Subcutaneous or intramuscular", tone: "azure" },
  { slug: "epitalon", name: "Epitalon", fullName: "Epitalon acetate", tag: "Longevity", line: "A pineal-derived cellular messenger.", route: "Subcutaneous or intramuscular", tone: "frost" },
  { slug: "ss-31", name: "SS-31", fullName: "Elamipretide (SS-31)", tag: "Longevity", line: "Designed to support mitochondrial function.", route: null, tone: "navy" },
  { slug: "pt-141", name: "PT-141", fullName: "Bremelanotide (PT-141)", tag: "Sexual health", line: "A centrally-acting melanocortin cellular messenger.", route: null, tone: "ice" },
  { slug: "semax", name: "Semax", tag: "Focus", line: "Designed to support attention and BDNF signalling.", route: null, tone: "azure" },
  { slug: "thymosin-alpha-1", name: "Thymosin α-1", fullName: "Thymosin alpha-1", tag: "Immune", line: "Designed to support immune signalling.", route: null, tone: "frost" },
  { slug: "kpv", name: "KPV", fullName: "KPV acetate", tag: "Gut & skin", line: "Designed to support a calm gut and skin barrier.", route: "Topical", tone: "navy" },
];

export type Protocol = {
  slug: string;
  name: string;
  line: string;
  peptides: string[];
  tone: Tone;
};

// Only peptides from the approved list remain. Growth & Performance has none
// left, so it is hidden until a physician reassigns the protocols.
export const protocols: Protocol[] = [
  { slug: "recovery-repair", name: "Recovery & Repair", line: "Built around tissue repair.", peptides: ["bpc-157", "tb-500"], tone: "azure" },
  { slug: "longevity-vitality", name: "Longevity & Vitality", line: "Built around healthy aging.", peptides: ["epitalon"], tone: "frost" },
  { slug: "metabolic-post-glp1", name: "Metabolic & Post-GLP-1", line: "Built around metabolic health.", peptides: ["mots-c"], tone: "navy" },
  { slug: "cognitive-focus", name: "Cognitive & Focus", line: "Built around attention.", peptides: ["semax"], tone: "ice" },
  { slug: "sexual-health", name: "Sexual Health", line: "Built around intimacy.", peptides: ["pt-141"], tone: "frost" },
];

export const peptideBySlug = (slug: string) => peptides.find((p) => p.slug === slug);
export const protocolBySlug = (slug: string) => protocols.find((p) => p.slug === slug);
