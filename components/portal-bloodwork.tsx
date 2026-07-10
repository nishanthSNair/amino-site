"use client";

import clsx from "clsx";
import { ArrowDown, ArrowUp, CalendarClock, Droplet, Flame, Zap, Sparkles, HeartPulse } from "lucide-react";
import { bloodMarkers, patient, type BloodMarker } from "@/data/portal";

// Semantic groupings inspired by Superpower / Function Health
type Group = {
  id: string;
  label: string;
  description: string;
  icon: typeof Flame;
  markers: string[];
};

const groups: Group[] = [
  {
    id: "inflammation",
    label: "Inflammation & metabolic",
    description: "The clearest downstream signal of the recovery-repair protocol.",
    icon: Flame,
    markers: ["hs-CRP", "HbA1c"],
  },
  {
    id: "endocrine",
    label: "Endocrine & growth axis",
    description: "Baseline hormone status and endogenous GH signalling.",
    icon: HeartPulse,
    markers: ["IGF-1", "Total Testosterone"],
  },
  {
    id: "micronutrients",
    label: "Micronutrients",
    description: "Cofactors your physician is actively correcting.",
    icon: Sparkles,
    markers: ["Vitamin D (25-OH)", "Ferritin"],
  },
];

function directionLabel(m: BloodMarker) {
  const delta = m.current - m.baseline;
  const pct = Math.abs((delta / m.baseline) * 100).toFixed(0);
  const improved =
    (m.direction === "lower-better" && delta < 0) ||
    (m.direction === "higher-better" && delta > 0) ||
    (m.direction === "range" &&
      m.optimal &&
      distanceFromRange(m.current, m.optimal) <
        distanceFromRange(m.baseline, m.optimal));
  return { delta, pct, improved };
}

function distanceFromRange(v: number, r: [number, number]) {
  if (v < r[0]) return r[0] - v;
  if (v > r[1]) return v - r[1];
  return 0;
}

function pct(v: number, low: number, high: number) {
  return Math.max(0, Math.min(100, ((v - low) / (high - low)) * 100));
}

export function PortalBloodwork() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <SummaryStat
          label="Baseline panel"
          value="Jun 15"
          sublabel="Week 0"
          tint="charcoal"
        />
        <SummaryStat
          label="Latest panel"
          value="Jul 3"
          sublabel="Week 2 · re-panel"
          tint="clay"
        />
        <SummaryStat
          label="Next panel"
          value="Aug 5"
          sublabel={`Week 8 · scheduled with ${patient.physician.name.replace("Dr. ", "Dr ")}`}
          tint="sage"
        />
      </div>

      <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-7 shadow-soft">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="eyebrow">Longevity-grade panel</p>
            <h3 className="mt-2 font-serif text-[26px] font-medium leading-tight">
              Before &amp; after
            </h3>
          </div>
          <div className="flex items-center gap-4 text-[12px] font-medium text-charcoal/60">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-charcoal bg-cream" />
              Baseline
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-clay" />
              Current
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-4 rounded-full bg-sage/40" />
              Optimal
            </span>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {groups.map((g) => {
            const groupMarkers = bloodMarkers.filter((m) =>
              g.markers.includes(m.name)
            );
            if (!groupMarkers.length) return null;
            const Icon = g.icon;
            return (
              <div key={g.id}>
                <div className="flex items-start gap-3 border-b border-charcoal/[0.06] pb-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-faint text-sage-deep">
                    <Icon size={15} />
                  </span>
                  <div>
                    <p className="font-serif text-[17px] font-medium leading-tight">
                      {g.label}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-charcoal/55">
                      {g.description}
                    </p>
                  </div>
                </div>

                <ul className="divide-y divide-charcoal/[0.06]">
                  {groupMarkers.map((m) => {
                    const dir = directionLabel(m);
                    return (
                      <li
                        key={m.name}
                        className="grid gap-4 py-6 md:grid-cols-[240px_1fr]"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-serif text-[19px] font-medium">
                              {m.name}
                            </p>
                            <span
                              className={clsx(
                                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.12em]",
                                dir.improved
                                  ? "bg-sage-faint text-sage-deep"
                                  : "bg-clay-soft text-clay-deep"
                              )}
                            >
                              {dir.delta > 0 ? (
                                <ArrowUp size={10} />
                              ) : (
                                <ArrowDown size={10} />
                              )}
                              {dir.pct}%
                            </span>
                          </div>
                          <p className="mt-1 text-[12.5px] text-charcoal/55">
                            {m.baseline}
                            <span className="text-charcoal/40"> → </span>
                            <span className="font-medium text-charcoal">
                              {m.current}
                            </span>{" "}
                            {m.unit}
                          </p>
                          <p className="mt-3 text-[13px] leading-relaxed text-charcoal/60">
                            {m.note}
                          </p>
                        </div>

                        <MarkerBar marker={m} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl2 border border-charcoal/[0.08] bg-cream-deep/50 p-6">
        <div className="flex items-start gap-3">
          <CalendarClock size={18} className="mt-0.5 shrink-0 text-clay-deep" />
          <div>
            <p className="text-[14px] font-medium text-charcoal">
              How Amino reads a panel
            </p>
            <p className="mt-1.5 max-w-3xl text-[13.5px] leading-relaxed text-charcoal/65">
              These markers are supportive of the outcomes your protocol is
              designed for. Movement in either direction is discussed with
              your physician at review — no marker is interpreted in
              isolation, and no protocol is auto-refilled without a re-panel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryStat({
  label,
  value,
  sublabel,
  tint,
}: {
  label: string;
  value: string;
  sublabel: string;
  tint: "charcoal" | "clay" | "sage";
}) {
  return (
    <div
      className={clsx(
        "rounded-xl2 border p-6",
        tint === "charcoal" && "border-charcoal/[0.08] bg-white",
        tint === "clay" && "border-clay/20 bg-clay-soft/50",
        tint === "sage" && "border-sage-deep/15 bg-sage-faint"
      )}
    >
      <div className="flex items-center gap-1.5 text-[11.5px] font-medium uppercase tracking-[0.14em] text-charcoal/55">
        <Droplet size={12} />
        {label}
      </div>
      <p className="mt-4 font-serif text-[28px] font-medium leading-none">
        {value}
      </p>
      <p className="mt-2 text-[12.5px] text-charcoal/60">{sublabel}</p>
    </div>
  );
}

function MarkerBar({ marker: m }: { marker: BloodMarker }) {
  const baselinePct = pct(m.baseline, m.refLow, m.refHigh);
  const currentPct = pct(m.current, m.refLow, m.refHigh);
  const optimalStart = m.optimal ? pct(m.optimal[0], m.refLow, m.refHigh) : 0;
  const optimalEnd = m.optimal ? pct(m.optimal[1], m.refLow, m.refHigh) : 0;

  return (
    <div>
      <div className="relative h-11">
        {/* Reference range track */}
        <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-charcoal/[0.06]" />
        {/* Optimal band */}
        {m.optimal && (
          <div
            className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-sage/40"
            style={{
              left: `${optimalStart}%`,
              width: `${optimalEnd - optimalStart}%`,
            }}
          />
        )}
        {/* Connector line */}
        <div
          className="absolute top-1/2 h-0.5 -translate-y-1/2 bg-clay/50"
          style={{
            left: `${Math.min(baselinePct, currentPct)}%`,
            width: `${Math.abs(currentPct - baselinePct)}%`,
          }}
        />
        {/* Baseline dot */}
        <div
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2.5px] border-charcoal bg-cream"
          style={{ left: `${baselinePct}%` }}
          title={`Baseline: ${m.baseline} ${m.unit}`}
        />
        {/* Current dot */}
        <div
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay shadow-soft ring-4 ring-clay/20"
          style={{ left: `${currentPct}%` }}
          title={`Current: ${m.current} ${m.unit}`}
        />
      </div>
      <div className="mt-2 flex justify-between text-[11px] font-medium text-charcoal/45 tabular-nums">
        <span>
          {m.refLow} {m.unit}
        </span>
        {m.optimal && (
          <span className="text-sage-deep">
            optimal {m.optimal[0]}–{m.optimal[1]}
          </span>
        )}
        <span>
          {m.refHigh} {m.unit}
        </span>
      </div>
    </div>
  );
}
