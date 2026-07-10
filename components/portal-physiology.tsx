"use client";

import { Activity, LineChart, Sparkles } from "lucide-react";
import { PeptideBodyMap } from "@/components/peptide-body-map";
import { patient } from "@/data/portal";

// Expected response curves per outcome (percentage of peak effect by week)
type Curve = {
  label: string;
  color: string;
  points: number[]; // one value per week, 0..1
};

const cycleWeeks = patient.protocol.cycleTotal;

const curves: Curve[] = [
  {
    label: "Sleep depth",
    color: "#4F5C42",
    points: [0.1, 0.35, 0.55, 0.72, 0.85, 0.92, 0.95, 0.97],
  },
  {
    label: "Tissue-repair signal",
    color: "#8E6448",
    points: [0.05, 0.2, 0.4, 0.62, 0.78, 0.88, 0.93, 0.96],
  },
  {
    label: "Inflammation (hs-CRP)",
    color: "#B5886A",
    points: [1, 0.85, 0.68, 0.5, 0.38, 0.28, 0.22, 0.18], // inverted — lower is better
  },
  {
    label: "Energy · morning score",
    color: "#8A9A7B",
    points: [0.15, 0.28, 0.42, 0.58, 0.7, 0.8, 0.87, 0.9],
  },
];

export function PortalPhysiology() {
  return (
    <div className="space-y-6">
      {/* Body map */}
      <PeptideBodyMap
        peptides={patient.protocol.peptides}
        title={`Where your ${patient.protocol.name} stack acts`}
        subtitle="A visual read of the tissues each peptide in your protocol signals. Tap a glowing node to see the mechanism at that site."
      />

      {/* Response curve */}
      <ResponseCurve currentWeek={patient.protocol.cycleWeek} />

      {/* Physician read note */}
      <div className="rounded-xl2 border border-sage-deep/15 bg-sage-faint p-6">
        <div className="flex items-start gap-3">
          <Sparkles size={18} className="mt-0.5 shrink-0 text-sage-deep" />
          <div>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-sage-deep">
              What your physician is watching
            </p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal/75">
              You&apos;re in week {patient.protocol.cycleWeek} — the window
              where inflammation typically drops most steeply and tissue-repair
              signalling has fully ramped. Sleep-depth gains are already priced
              in. The re-panel is scheduled for week{" "}
              {patient.protocol.cycleTotal} so we can see the biology, not
              just how you feel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResponseCurve({ currentWeek }: { currentWeek: number }) {
  const width = 600;
  const height = 220;
  const padL = 42;
  const padR = 20;
  const padT = 20;
  const padB = 40;
  const plotW = width - padL - padR;
  const plotH = height - padT - padB;
  const totalWeeks = cycleWeeks;

  const xAt = (weekIdx: number) =>
    padL + (weekIdx / (totalWeeks - 1)) * plotW;
  const yAt = (v: number) => padT + (1 - v) * plotH;

  const buildPath = (points: number[]) => {
    let d = `M ${xAt(0)} ${yAt(points[0])}`;
    for (let i = 1; i < points.length; i++) {
      const px = xAt(i - 1);
      const py = yAt(points[i - 1]);
      const cx = xAt(i);
      const cy = yAt(points[i]);
      const mx = (px + cx) / 2;
      d += ` Q ${mx} ${py}, ${mx} ${(py + cy) / 2} T ${cx} ${cy}`;
    }
    return d;
  };

  return (
    <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-6 shadow-soft sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <LineChart size={13} /> Expected response window
          </p>
          <h3 className="mt-2 font-serif text-[24px] font-medium leading-tight sm:text-[28px]">
            How the protocol{" "}
            <span className="italic text-clay-deep">unfolds over time.</span>
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11.5px] font-medium">
          {curves.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-1.5 text-charcoal/65"
            >
              <span
                className="h-2 w-4 rounded-full"
                style={{ background: c.color }}
              />
              {c.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="min-w-[520px] w-full"
          role="img"
          aria-label="Expected biological response curves across the protocol cycle"
        >
          {/* Grid */}
          {[0, 0.25, 0.5, 0.75, 1].map((g) => (
            <line
              key={g}
              x1={padL}
              y1={yAt(g)}
              x2={width - padR}
              y2={yAt(g)}
              stroke="#2A2A28"
              strokeOpacity={g === 0.5 ? "0.06" : "0.04"}
            />
          ))}

          {/* Y axis label */}
          <text
            x={padL - 8}
            y={yAt(0)}
            fontFamily="var(--font-inter), sans-serif"
            fontSize="9"
            fill="#2A2A2860"
            textAnchor="end"
          >
            0
          </text>
          <text
            x={padL - 8}
            y={yAt(1) + 3}
            fontFamily="var(--font-inter), sans-serif"
            fontSize="9"
            fill="#2A2A2860"
            textAnchor="end"
          >
            Peak
          </text>

          {/* Current week vertical line */}
          <line
            x1={xAt(currentWeek)}
            y1={padT}
            x2={xAt(currentWeek)}
            y2={height - padB}
            stroke="#B5886A"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <text
            x={xAt(currentWeek)}
            y={padT - 6}
            fontFamily="var(--font-inter), sans-serif"
            fontSize="9.5"
            fontWeight="600"
            fill="#8E6448"
            textAnchor="middle"
          >
            You are here · W{currentWeek}
          </text>

          {/* Curves */}
          {curves.map((c) => {
            const d = buildPath(c.points);
            return (
              <g key={c.label}>
                <path
                  d={d}
                  fill="none"
                  stroke={c.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                {/* Marker at current week */}
                <circle
                  cx={xAt(currentWeek)}
                  cy={yAt(c.points[currentWeek] ?? c.points[c.points.length - 1])}
                  r="3.5"
                  fill={c.color}
                  stroke="#FAF7F2"
                  strokeWidth="1.5"
                />
              </g>
            );
          })}

          {/* Week labels */}
          {Array.from({ length: totalWeeks }, (_, i) => (
            <text
              key={i}
              x={xAt(i)}
              y={height - padB + 14}
              fontFamily="var(--font-inter), sans-serif"
              fontSize="9.5"
              fill="#2A2A2860"
              textAnchor="middle"
            >
              W{i}
            </text>
          ))}
        </svg>
      </div>

      <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-charcoal/[0.06] bg-cream p-4">
        <Activity size={14} className="mt-0.5 shrink-0 text-clay-deep" />
        <p className="text-[13px] leading-relaxed text-charcoal/65">
          These are illustrative response curves for the average adherent
          patient on {patient.protocol.name}. Actual response depends on your
          intake, baseline blood panel and adherence. Your physician
          re-benchmarks these at every review.
        </p>
      </div>
    </div>
  );
}
