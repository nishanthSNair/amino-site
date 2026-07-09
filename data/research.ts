export type ResearchItem = {
  topic: string;
  summary: string;
  authors?: string;
  year?: string;
  source?: string;
  url?: string;
};

// Research directions for each peptide.
// Populate `url` with PubMed / DOI links as citations are gathered.
export const researchLibrary: Record<string, ResearchItem[]> = {
  "bpc-157": [
    {
      topic: "Tendon & ligament repair",
      summary:
        "Body of preclinical work on BPC-157's role in supporting angiogenesis, fibroblast migration and tendon-to-bone healing after acute injury.",
      authors: "Sikiric et al.",
      source: "Journal of Applied Physiology",
      url: "",
    },
    {
      topic: "Gastrointestinal integrity",
      summary:
        "Preclinical studies on BPC-157's protective effects on gastric and intestinal mucosa across inflammatory and stress models.",
      authors: "Sikiric et al.",
      source: "Current Pharmaceutical Design",
      url: "",
    },
    {
      topic: "Vascular & muscle recovery",
      summary:
        "Research on BPC-157's role in angiogenic signalling and muscle-injury recovery kinetics in animal models.",
      source: "Frontiers in Pharmacology",
      url: "",
    },
  ],

  "tb-500": [
    {
      topic: "Thymosin β4 and tissue repair",
      summary:
        "Foundational work on thymosin β4 (parent peptide) and its role in actin sequestration, cell migration and tissue repair signalling.",
      authors: "Goldstein et al.",
      source: "Annals of the NY Academy of Sciences",
      url: "",
    },
    {
      topic: "Cardiac & vascular repair models",
      summary:
        "Preclinical research on thymosin β4-driven angiogenesis, epicardial progenitor recruitment and post-infarction remodelling.",
      source: "Nature",
      url: "",
    },
    {
      topic: "Skeletal muscle regeneration",
      summary:
        "Studies exploring thymosin β4's role in myogenesis, muscle satellite cell recruitment and post-strain recovery.",
      source: "American Journal of Physiology",
      url: "",
    },
  ],

  "ghk-cu": [
    {
      topic: "Collagen synthesis & skin remodelling",
      summary:
        "Foundational Pickart-lab work on GHK-Cu's role in stimulating collagen, glycosaminoglycan and elastin turnover in dermal fibroblasts.",
      authors: "Pickart et al.",
      source: "BioMed Research International",
      url: "",
    },
    {
      topic: "Gene expression modulation",
      summary:
        "Transcriptomic research suggesting GHK modulates a broad set of genes associated with tissue repair and inflammation resolution.",
      authors: "Pickart & Margolina",
      source: "International Journal of Molecular Sciences",
      url: "",
    },
    {
      topic: "Wound healing & angiogenesis",
      summary:
        "Preclinical evidence on GHK-Cu's contribution to wound-healing kinetics and small-vessel formation.",
      source: "Cellular and Molecular Life Sciences",
      url: "",
    },
  ],

  "ipamorelin": [
    {
      topic: "Selective GHRH-secretagogue action",
      summary:
        "Original characterization of ipamorelin as a highly selective growth-hormone secretagogue with minimal cortisol or prolactin impact.",
      authors: "Raun et al.",
      source: "European Journal of Endocrinology",
      url: "",
    },
    {
      topic: "GH pulse architecture",
      summary:
        "Research on how ipamorelin preserves physiologic GH pulsatility versus continuous stimulation.",
      source: "Journal of Clinical Endocrinology & Metabolism",
      url: "",
    },
    {
      topic: "Post-operative GI motility (animal)",
      summary:
        "Preclinical exploration of ipamorelin in models of gastric motility and post-surgical ileus.",
      source: "Neurogastroenterology & Motility",
      url: "",
    },
  ],

  "sermorelin": [
    {
      topic: "GHRH analogue mechanism",
      summary:
        "Foundational work on GHRH(1–29) analogues and pulsatile GH release along the hypothalamic-pituitary axis.",
      authors: "Guillemin et al.",
      source: "Science",
      url: "",
    },
    {
      topic: "Diagnostic use in adult GH sufficiency",
      summary:
        "Clinical work on sermorelin as a diagnostic tool for adult growth-hormone deficiency and pituitary function.",
      source: "Journal of Clinical Endocrinology & Metabolism",
      url: "",
    },
    {
      topic: "Body composition & sleep architecture",
      summary:
        "Studies exploring long-cycle GH restoration and downstream effects on lean mass and sleep quality.",
      source: "Endocrine Reviews",
      url: "",
    },
  ],

  "cjc-1295": [
    {
      topic: "Long-acting GHRH design",
      summary:
        "Original characterization of CJC-1295 as a long-acting GHRH analogue with sustained GH/IGF-1 elevation in humans.",
      authors: "Teichman et al.",
      source: "Journal of Clinical Endocrinology & Metabolism",
      url: "",
    },
    {
      topic: "Pharmacokinetics & half-life",
      summary:
        "Human PK data on drug-affinity-complex extension and prolonged GH-axis activation.",
      source: "Clinical Pharmacology & Therapeutics",
      url: "",
    },
    {
      topic: "Combined GHS-R agonism",
      summary:
        "Preclinical rationale for pairing GHRH analogues with selective GH-secretagogues to preserve pulsatility.",
      source: "Growth Hormone & IGF Research",
      url: "",
    },
  ],

  "nad-plus": [
    {
      topic: "Sirtuin regulation & aging",
      summary:
        "Sinclair-lab body of work on NAD+ decline with age and its effects on sirtuin-mediated DNA repair and metabolic signalling.",
      authors: "Sinclair et al.",
      source: "Cell",
      url: "",
    },
    {
      topic: "Mitochondrial function",
      summary:
        "Research on NAD+ precursors and mitochondrial biogenesis, oxidative phosphorylation and energy metabolism.",
      authors: "Guarente et al.",
      source: "Cell Metabolism",
      url: "",
    },
    {
      topic: "Human safety and pharmacokinetics",
      summary:
        "Early human studies on NAD+ precursor supplementation, safety profiles and cellular uptake.",
      source: "Nature Communications",
      url: "",
    },
  ],

  "epithalon": [
    {
      topic: "Pineal signalling & circadian",
      summary:
        "Khavinson-lab work on epithalon (epitalon) as a pineal-regulating tetrapeptide and its effect on melatonin rhythms.",
      authors: "Khavinson et al.",
      source: "Neuroendocrinology Letters",
      url: "",
    },
    {
      topic: "Telomere biology (preclinical)",
      summary:
        "Preclinical research on epithalon's effect on telomerase activity and cellular replicative capacity.",
      source: "Bulletin of Experimental Biology and Medicine",
      url: "",
    },
    {
      topic: "Longevity animal models",
      summary:
        "Long-cycle rodent research on epithalon and lifespan-related endpoints.",
      source: "Mechanisms of Ageing and Development",
      url: "",
    },
  ],

  "semax": [
    {
      topic: "BDNF and neurotrophic signalling",
      summary:
        "Russian-lab body of work on Semax (ACTH 4-10 analogue) and induction of brain-derived neurotrophic factor.",
      authors: "Ashmarin et al.",
      source: "Neuroscience & Behavioral Physiology",
      url: "",
    },
    {
      topic: "Ischemic stroke recovery",
      summary:
        "Clinical research on intranasal Semax as an adjunct in acute ischemic stroke recovery in Russia.",
      source: "Stroke Journal",
      url: "",
    },
    {
      topic: "Attention & working memory",
      summary:
        "Studies on Semax and cognitive endpoints — attention, working memory, executive function.",
      source: "Behavioural Brain Research",
      url: "",
    },
  ],

  "selank": [
    {
      topic: "Anxiolytic profile without sedation",
      summary:
        "Research on Selank (tuftsin analogue) and its GABAergic modulation without benzodiazepine-class sedation.",
      authors: "Ashmarin et al.",
      source: "Bulletin of Experimental Biology and Medicine",
      url: "",
    },
    {
      topic: "Generalized anxiety clinical work",
      summary:
        "Russian clinical studies on intranasal Selank in generalized anxiety and adjustment disorders.",
      source: "Zhurnal Nevrologii i Psikhiatrii",
      url: "",
    },
    {
      topic: "Enkephalin-degrading enzyme inhibition",
      summary:
        "Preclinical mechanism work on Selank's inhibition of enkephalin degradation and downstream mood effects.",
      source: "Neuropsychopharmacology",
      url: "",
    },
  ],

  "mots-c": [
    {
      topic: "Mitochondrial-derived peptide discovery",
      summary:
        "Original characterization of MOTS-c as a mitochondrial-encoded peptide with insulin-sensitizing and metabolic effects.",
      authors: "Lee et al.",
      source: "Cell Metabolism",
      url: "",
    },
    {
      topic: "Exercise mimetic pathways",
      summary:
        "Research linking MOTS-c to AMPK activation, glucose disposal and exercise-mimicking metabolic signatures.",
      source: "Nature Communications",
      url: "",
    },
    {
      topic: "Aging and metabolic decline",
      summary:
        "Studies on age-related decline in MOTS-c levels and correlations with insulin resistance and mitochondrial dysfunction.",
      source: "Aging Cell",
      url: "",
    },
  ],

  "pt-141": [
    {
      topic: "Melanocortin-4 receptor pathway",
      summary:
        "Foundational work on bremelanotide (PT-141) as a selective MC4R agonist and central-acting sexual response modulator.",
      authors: "Diamond et al.",
      source: "International Journal of Impotence Research",
      url: "",
    },
    {
      topic: "HSDD in premenopausal women",
      summary:
        "Phase-3 clinical trials on bremelanotide in hypoactive sexual desire disorder in premenopausal women.",
      source: "Obstetrics & Gynecology",
      url: "",
    },
    {
      topic: "Erectile response (non-vascular pathway)",
      summary:
        "Research on central MC4R mechanisms of erectile response, distinct from PDE-5 vascular pathways.",
      source: "Journal of Sexual Medicine",
      url: "",
    },
  ],
};
