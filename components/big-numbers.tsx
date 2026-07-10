import { Reveal } from "@/components/motion";

type Stat = {
  value: string;
  suffix?: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  {
    value: "30,000",
    suffix: "+",
    label: "Patients served",
    detail: "Across the UAE and wider GCC — from Recovery to Longevity to Post-GLP-1 protocols.",
  },
  {
    value: "48",
    suffix: "h",
    label: "Physician review",
    detail: "Time from intake submission to a written physician design, redesign or decline.",
  },
  {
    value: "45",
    suffix: "d",
    label: "Fresh-compounded",
    detail: "Peptides are compounded to order, never back-of-shelf. Cold-chain to your door.",
  },
  {
    value: "100",
    suffix: "%",
    label: "Physician-reviewed",
    detail: "No auto-refill. No black-box protocols. Every case re-read at every cycle.",
  },
];

export function BigNumbers() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-cream sm:py-32">
      {/* Subtle grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/></svg>\")",
        }}
      />
      {/* Warm accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-clay-deep/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-sage-deep/20 blur-3xl"
      />

      <div className="container-content relative">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow !text-clay-light">Amino in numbers</p>
            <h2 className="mt-4 font-serif text-[36px] font-medium leading-[1.06] sm:text-[54px]">
              A clinic, not a{" "}
              <span className="italic text-clay-light">checkout.</span>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-cream/70 sm:text-[17px]">
              Four numbers that separate a physician-led peptide platform from
              everything else on the market.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-cream/10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="flex h-full flex-col bg-charcoal/60 p-8 backdrop-blur-sm transition-colors hover:bg-charcoal/40">
                <p className="flex items-baseline gap-1 font-serif text-[64px] font-medium leading-none tracking-tight text-cream sm:text-[80px]">
                  {s.value}
                  {s.suffix && (
                    <span className="text-[36px] text-clay-light sm:text-[44px]">
                      {s.suffix}
                    </span>
                  )}
                </p>
                <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-clay-light">
                  {s.label}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-cream/65">
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
