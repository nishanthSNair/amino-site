// "Find your protocol": four one-tap questions that suggest a starting point.
// A suggestion only. The physician decides at the free consultation.

type Slug = "recovery-repair" | "longevity-vitality" | "metabolic-post-glp1" | "cognitive-focus" | "sexual-health";
type Score = Partial<Record<Slug, number>>;

export type MatchOption = { label: string; score: Score };
export type MatchQuestion = { id: string; title: string; options: MatchOption[] };

export const matchQuestions: MatchQuestion[] = [
  {
    id: "goal",
    title: "What matters most right now?",
    options: [
      { label: "Recovering from an injury", score: { "recovery-repair": 3 } },
      { label: "Ageing well, more energy", score: { "longevity-vitality": 3 } },
      { label: "Weight and metabolism", score: { "metabolic-post-glp1": 3 } },
      { label: "Sharper focus", score: { "cognitive-focus": 3 } },
      { label: "Intimacy", score: { "sexual-health": 3 } },
      { label: "Not sure yet", score: {} },
    ],
  },
  {
    id: "age",
    title: "Your age?",
    options: [
      { label: "18 to 29", score: {} },
      { label: "30 to 44", score: { "metabolic-post-glp1": 0.5 } },
      { label: "45 to 59", score: { "longevity-vitality": 1, "metabolic-post-glp1": 1 } },
      { label: "60 or over", score: { "longevity-vitality": 2 } },
    ],
  },
  {
    id: "training",
    title: "How often do you train?",
    options: [
      { label: "Rarely", score: { "metabolic-post-glp1": 1 } },
      { label: "1 to 3 times a week", score: { "recovery-repair": 1 } },
      { label: "4 or more times a week", score: { "recovery-repair": 2 } },
    ],
  },
  {
    id: "sleep",
    title: "How do you sleep?",
    options: [
      { label: "Well", score: {} },
      { label: "It varies", score: { "cognitive-focus": 0.5, "longevity-vitality": 0.5 } },
      { label: "Poorly", score: { "longevity-vitality": 1, "cognitive-focus": 1 } },
    ],
  },
];

/** Returns the suggested protocol and, when another scores too, a second to ask about. */
export function matchResult(picks: number[]): { main: Slug; also?: Slug } {
  const total: Score = {};
  picks.forEach((pick, q) => {
    const score = matchQuestions[q].options[pick]?.score ?? {};
    for (const [slug, n] of Object.entries(score) as [Slug, number][]) total[slug] = (total[slug] ?? 0) + n;
  });
  const ranked = (Object.entries(total) as [Slug, number][]).filter(([, n]) => n > 0).sort((a, b) => b[1] - a[1]);
  const main = ranked[0]?.[0] ?? "longevity-vitality";
  const also = ranked.find(([slug, n]) => slug !== main && n >= 1)?.[0];
  return { main, also };
}
