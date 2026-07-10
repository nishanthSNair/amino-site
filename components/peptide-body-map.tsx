"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { Info } from "lucide-react";

// Anatomical nodes on the front-facing body silhouette
// Coordinates are in the viewBox (200 x 500)
type BodyNode = {
  id: string;
  label: string;
  detail: string;
  x: number;
  y: number;
};

const nodes: BodyNode[] = [
  { id: "brain-pituitary", label: "Pituitary", detail: "Growth-hormone axis, sleep architecture", x: 100, y: 32 },
  { id: "brain-pineal", label: "Pineal", detail: "Circadian rhythm, sleep-onset regulation", x: 108, y: 40 },
  { id: "brain-cortex", label: "Cortex", detail: "Neurotrophic signalling, memory, focus", x: 92, y: 26 },
  { id: "brain-hypothalamus", label: "Hypothalamus", detail: "Melanocortin signalling, libido, appetite", x: 100, y: 46 },
  { id: "thyroid", label: "Thyroid axis", detail: "Metabolic tone, energy setpoint", x: 100, y: 62 },
  { id: "shoulder-l", label: "Left shoulder", detail: "Tendon & rotator-cuff repair signalling", x: 68, y: 85 },
  { id: "shoulder-r", label: "Right shoulder", detail: "Tendon & rotator-cuff repair signalling", x: 132, y: 85 },
  { id: "heart", label: "Cardiovascular", detail: "Angiogenesis, endothelial support", x: 100, y: 118 },
  { id: "muscle-chest", label: "Skeletal muscle", detail: "Satellite-cell recruitment, myogenesis", x: 100, y: 140 },
  { id: "elbow-l", label: "Left elbow", detail: "Ligament & tendon integrity", x: 55, y: 165 },
  { id: "elbow-r", label: "Right elbow", detail: "Ligament & tendon integrity", x: 145, y: 165 },
  { id: "gut", label: "Gut lining", detail: "GI epithelial integrity, inflammation reduction", x: 100, y: 175 },
  { id: "liver-metabolic", label: "Hepatic / metabolic", detail: "Glucose disposal, fat metabolism", x: 88, y: 178 },
  { id: "mitochondria", label: "Mitochondria", detail: "Cellular energy, NAD-dependent pathways", x: 112, y: 205 },
  { id: "hip", label: "Hip / core", detail: "Deep-tissue repair", x: 100, y: 232 },
  { id: "knee-l", label: "Left knee", detail: "Cartilage & connective tissue support", x: 82, y: 320 },
  { id: "knee-r", label: "Right knee", detail: "Cartilage & connective tissue support", x: 118, y: 320 },
  { id: "ankle-l", label: "Left ankle", detail: "Tendon integrity", x: 80, y: 430 },
  { id: "ankle-r", label: "Right ankle", detail: "Tendon integrity", x: 120, y: 430 },
  { id: "skin", label: "Dermal / collagen", detail: "Fibroblast activation, collagen turnover", x: 155, y: 130 },
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

// Peptide → body node mapping
const peptideTargets: Record<string, string[]> = {
  "BPC-157": ["shoulder-l", "shoulder-r", "elbow-l", "elbow-r", "knee-l", "knee-r", "ankle-l", "ankle-r", "gut", "heart"],
  "TB-500": ["muscle-chest", "heart", "shoulder-l", "shoulder-r", "hip"],
  "GHK-Cu": ["skin", "hip"],
  "Ipamorelin": ["brain-pituitary", "muscle-chest"],
  "Sermorelin": ["brain-pituitary", "muscle-chest", "liver-metabolic"],
  "CJC-1295": ["brain-pituitary", "muscle-chest"],
  "NAD+": ["mitochondria", "liver-metabolic", "brain-cortex"],
  "Epithalon": ["brain-pineal", "brain-pituitary"],
  "Semax": ["brain-cortex"],
  "Selank": ["brain-cortex", "brain-hypothalamus"],
  "MOTS-c": ["mitochondria", "muscle-chest", "liver-metabolic"],
  "PT-141": ["brain-hypothalamus"],
  "Tesamorelin": ["brain-pituitary", "liver-metabolic"],
  "KPV": ["gut", "skin"],
};

type PeptideBodyMapProps = {
  peptides: string[];
  className?: string;
  title?: string;
  subtitle?: string;
};

export function PeptideBodyMap({
  peptides,
  className,
  title = "Where your peptides act",
  subtitle,
}: PeptideBodyMapProps) {
  const [active, setActive] = useState<string | null>(null);
  const shouldReduce = useReducedMotion();

  // Compute active nodes (deduped, with which peptides target each)
  const nodeToPeptides = new Map<string, string[]>();
  for (const peptide of peptides) {
    const targets = peptideTargets[peptide] || [];
    for (const t of targets) {
      const arr = nodeToPeptides.get(t) || [];
      arr.push(peptide);
      nodeToPeptides.set(t, arr);
    }
  }
  const activeNodes = [...nodeToPeptides.keys()].filter((id) => nodeMap[id]);

  const activeNode = active ? nodeMap[active] : null;
  const activeNodePeptides = active ? nodeToPeptides.get(active) || [] : [];

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-xl2 border border-charcoal/[0.08] bg-white shadow-soft",
        className
      )}
    >
      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:gap-8">
        {/* Left: text + node list */}
        <div className="flex flex-col">
          <p className="eyebrow">Physiology map</p>
          <h3 className="mt-3 font-serif text-[26px] font-medium leading-tight sm:text-[30px]">
            {title}
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/65">
            {subtitle ||
              "A visual read of where the peptides in your protocol signal. Tap a node to see the mechanism at that site."}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {peptides.map((p) => (
              <span
                key={p}
                className="rounded-full border border-clay/25 bg-clay-soft/60 px-3 py-1 text-[12px] font-medium text-clay-deep"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-charcoal/[0.08] bg-cream p-5">
            {activeNode ? (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-deep">
                  {activeNode.label}
                </p>
                <p className="mt-2 font-serif text-[19px] font-medium leading-snug">
                  {activeNode.detail}
                </p>
                <p className="mt-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">
                  Signalled by
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {activeNodePeptides.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-clay-deep px-2.5 py-1 text-[11.5px] font-medium text-cream"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-clay-soft text-clay-deep">
                  <Info size={12} />
                </span>
                <p className="text-[13px] leading-relaxed text-charcoal/65">
                  {activeNodes.length}{" "}
                  active site{activeNodes.length === 1 ? "" : "s"} highlighted
                  on the body map. Tap any glowing node to see what your stack
                  is signalling there.
                </p>
              </div>
            )}
          </div>

          <p className="mt-4 text-[11px] leading-relaxed text-charcoal/45">
            Illustrative. Actual physiological response depends on your intake,
            baseline blood panel and physician-designed dosing.
          </p>
        </div>

        {/* Right: body SVG */}
        <div className="relative flex justify-center rounded-xl bg-gradient-to-b from-cream-deep/40 to-cream p-4">
          <svg
            viewBox="0 0 200 500"
            className="h-[440px] w-auto max-w-full sm:h-[520px]"
            role="img"
            aria-label="Body map with peptide action sites"
          >
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#B5886A" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#B5886A" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#B5886A" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#2A2A28" stopOpacity="0.6" />
                <stop offset="1" stopColor="#2A2A28" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Body silhouette — front view, pen-line */}
            <g
              fill="none"
              stroke="url(#bodyGrad)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Head */}
              <ellipse cx="100" cy="34" rx="20" ry="26" />
              {/* Neck */}
              <path d="M 90 58 L 88 68 M 110 58 L 112 68" />
              {/* Shoulders + torso */}
              <path d="M 88 68 Q 60 76 55 100 L 62 145 Q 68 175 74 210 Q 78 240 82 260 L 88 300" />
              <path d="M 112 68 Q 140 76 145 100 L 138 145 Q 132 175 126 210 Q 122 240 118 260 L 112 300" />
              {/* Torso center hint */}
              <path d="M 100 80 L 100 175" strokeOpacity="0.35" strokeDasharray="1 3" />
              {/* Arms */}
              <path d="M 55 100 Q 45 130 50 165 Q 55 195 62 220" />
              <path d="M 145 100 Q 155 130 150 165 Q 145 195 138 220" />
              {/* Hands */}
              <circle cx="62" cy="225" r="4" fill="url(#bodyGrad)" fillOpacity="0.3" />
              <circle cx="138" cy="225" r="4" fill="url(#bodyGrad)" fillOpacity="0.3" />
              {/* Hips */}
              <path d="M 88 300 Q 82 315 82 335" />
              <path d="M 112 300 Q 118 315 118 335" />
              {/* Legs */}
              <path d="M 82 335 Q 79 380 80 430 Q 82 460 84 480" />
              <path d="M 118 335 Q 121 380 120 430 Q 118 460 116 480" />
              {/* Feet */}
              <path d="M 82 480 L 76 484 M 118 480 L 124 484" />
            </g>

            {/* Body fill (very subtle) */}
            <path
              d="M 88 68 Q 60 76 55 100 L 62 145 Q 68 175 74 210 Q 78 240 82 260 L 88 300
                 L 82 335 Q 79 380 80 430 Q 82 460 84 480 L 116 480 Q 118 460 120 430 Q 121 380 118 335
                 L 112 300 L 118 260 Q 122 240 126 210 Q 132 175 138 145 L 145 100 Q 140 76 112 68 Z"
              fill="#B5886A"
              fillOpacity="0.02"
            />

            {/* Inactive nodes (all) — very subtle */}
            {nodes
              .filter((n) => !activeNodes.includes(n.id))
              .map((n) => (
                <circle
                  key={n.id}
                  cx={n.x}
                  cy={n.y}
                  r="2"
                  fill="#2A2A28"
                  fillOpacity="0.08"
                />
              ))}

            {/* Active nodes */}
            {activeNodes.map((id, i) => {
              const node = nodeMap[id];
              if (!node) return null;
              const isActive = active === id;
              return (
                <g key={id}>
                  {/* Outer glow */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={isActive ? 22 : 16}
                    fill="url(#nodeGlow)"
                    initial={shouldReduce ? undefined : { opacity: 0.6, scale: 0.8 }}
                    animate={
                      shouldReduce
                        ? undefined
                        : {
                            opacity: [0.55, 0.85, 0.55],
                            scale: [0.95, 1.05, 0.95],
                          }
                    }
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (i % 6) * 0.15,
                    }}
                  />
                  {/* Node dot */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isActive ? 5 : 3.5}
                    fill="#8E6448"
                    stroke="#FAF7F2"
                    strokeWidth={isActive ? 2 : 1.5}
                    className="cursor-pointer transition-all"
                    onClick={() => setActive(id)}
                    onMouseEnter={() => setActive(id)}
                    onFocus={() => setActive(id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${node.label}: ${node.detail}`}
                  />
                </g>
              );
            })}

            {/* Optional active node label callout */}
            {activeNode && (
              <g pointerEvents="none">
                <line
                  x1={activeNode.x}
                  y1={activeNode.y}
                  x2={activeNode.x > 100 ? activeNode.x + 24 : activeNode.x - 24}
                  y2={activeNode.y - 10}
                  stroke="#8E6448"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                />
                <text
                  x={activeNode.x > 100 ? activeNode.x + 26 : activeNode.x - 26}
                  y={activeNode.y - 12}
                  textAnchor={activeNode.x > 100 ? "start" : "end"}
                  fontFamily="var(--font-inter), sans-serif"
                  fontSize="7"
                  fontWeight="600"
                  fill="#2A2A28"
                  letterSpacing="0.5"
                >
                  {activeNode.label.toUpperCase()}
                </text>
              </g>
            )}
          </svg>

          {/* Legend */}
          <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10.5px] font-medium uppercase tracking-[0.12em] text-charcoal/45">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-clay-deep" />
              Active
            </span>
            <span>{activeNodes.length} sites</span>
          </div>
        </div>
      </div>
    </div>
  );
}
