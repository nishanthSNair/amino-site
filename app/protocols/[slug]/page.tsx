import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Beaker,
  ChevronDown,
  Droplet,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import clsx from "clsx";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Cta } from "@/components/cta";
import { Badge, Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { PathwayIcon } from "@/components/pathway-icon";
import { FaqAccordion } from "@/components/faq-accordion";
import { ProtocolSubnav } from "@/components/protocol-subnav";
import { protocols } from "@/data/protocols";
import { products } from "@/data/products";

export function generateStaticParams() {
  return protocols.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const protocol = protocols.find((p) => p.slug === params.slug);
  return {
    title: protocol ? `${protocol.name} — Amino` : "Protocol — Amino",
    description: protocol?.outcome,
  };
}

export default function ProtocolPage({
  params,
}: {
  params: { slug: string };
}) {
  const protocol = protocols.find((p) => p.slug === params.slug);
  if (!protocol) notFound();

  const accentBg = protocol.accent === "clay" ? "bg-clay" : "bg-sage";
  const accentText =
    protocol.accent === "clay" ? "text-clay-deep" : "text-sage-deep";
  const accentSoft =
    protocol.accent === "clay" ? "bg-clay-soft" : "bg-sage-faint";

  return (
    <main className="bg-cream">
      <Nav />

      {/* ========== HERO (single-screen) ========== */}
      <section className="relative overflow-hidden pt-28 sm:pt-36">
        {/* Accent glow */}
        <div
          aria-hidden
          className={clsx(
            "pointer-events-none absolute -top-40 right-0 h-[540px] w-[540px] rounded-full opacity-30 blur-3xl",
            accentBg
          )}
        />

        <div className="container-content relative pb-14 sm:pb-20">
          <Reveal>
            <Link
              href="/#protocols"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/55 transition-colors hover:text-charcoal"
            >
              <ArrowLeft size={15} /> All protocols
            </Link>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
            {/* LEFT: title + outcome + cta */}
            <div>
              <Reveal>
                <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                  <span
                    className={clsx("h-1.5 w-1.5 rounded-full", accentBg)}
                  />
                  {protocol.category} · {protocol.cycleWeeks}-week cycle
                </p>
                <h1 className="font-serif text-[48px] font-medium leading-[1.02] tracking-tight sm:text-[68px] md:text-[80px]">
                  {protocol.name}
                </h1>
                <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-charcoal/70 sm:text-[20px]">
                  {protocol.outcome}
                </p>

                {/* Quick stats strip */}
                <dl className="mt-8 grid max-w-xl grid-cols-3 gap-x-4 gap-y-3 border-t border-charcoal/[0.08] pt-6">
                  <div>
                    <dt className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                      Cycle
                    </dt>
                    <dd className="mt-1 font-serif text-[22px] font-medium">
                      {protocol.cycleWeeks}w
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                      Peptides
                    </dt>
                    <dd className="mt-1 font-serif text-[22px] font-medium">
                      {protocol.peptideRoles.length}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                      Bloodwork
                    </dt>
                    <dd className="mt-1 font-serif text-[16px] font-medium leading-tight">
                      Baseline<br />+ re-panel
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={`/protocols/${protocol.slug}/quiz`}
                    size="lg"
                    showArrow
                  >
                    Take the intake quiz
                  </Button>
                  <Button href="#stack" size="lg" variant="outline">
                    See the stack
                  </Button>
                </div>
                <p className="mt-3 text-[12.5px] text-charcoal/50">
                  2-minute intake · No cost · Physician-reviewed within 48
                  hours.
                </p>
              </Reveal>
            </div>

            {/* RIGHT: sticky-feeling info card */}
            <div className="lg:pl-6">
              <Reveal delay={0.1}>
                <div className="rounded-xl2 border border-charcoal/[0.08] bg-white p-6 shadow-lift sm:p-7">
                  <div className="flex items-center justify-between">
                    <Badge tone="sage">
                      <BadgeCheck size={12} />
                      Physician-designed
                    </Badge>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/45">
                      Ships cold-chain
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                      Who it&apos;s for
                    </p>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal/75">
                      {protocol.whoFor}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-charcoal/[0.08] pt-5">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                      In the stack
                    </p>
                    <ul className="mt-3 space-y-2">
                      {protocol.peptideRoles.map((pep) => (
                        <li
                          key={pep.name}
                          className="flex items-center justify-between text-[13.5px]"
                        >
                          <span className="font-medium text-charcoal">
                            {pep.name}
                          </span>
                          <span className="text-charcoal/50">
                            {pep.frequency.split(" ")[0]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-charcoal/[0.08] pt-5">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                      What patients report
                    </p>
                    <ul className="mt-3 space-y-2 text-[13.5px] leading-relaxed text-charcoal/70">
                      {protocol.expect.slice(0, 2).map((e) => (
                        <li key={e} className="flex gap-2">
                          <span className={clsx("mt-1.5 h-1 w-1 shrink-0 rounded-full", accentBg)} />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STICKY SUBNAV ========== */}
      <ProtocolSubnav />

      {/* ========== 1. OVERVIEW BENTO (pathways + expected outcomes) ========== */}
      <section id="overview" className="scroll-mt-32 py-20 sm:py-24">
        <div className="container-content">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <p className="eyebrow">How the stack signals</p>
                <h2 className="mt-3 font-serif text-[34px] font-medium leading-[1.08] sm:text-[44px]">
                  Three pathways.{" "}
                  <span className={clsx("italic", accentText)}>
                    One protocol.
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-[14.5px] leading-relaxed text-charcoal/60">
                {protocol.mechanism}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-[2fr_1fr]">
            {/* Pathway cards row */}
            <div className="grid gap-4 sm:grid-cols-3">
              {protocol.pathways.map((card, i) => (
                <Reveal key={card.title} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-xl2 border border-charcoal/[0.06] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <div
                      className={clsx(
                        "flex h-10 w-10 items-center justify-center rounded-full",
                        accentSoft,
                        accentText
                      )}
                    >
                      <PathwayIcon name={card.icon} size={16} />
                    </div>
                    <h3 className="mt-5 font-serif text-[18px] font-medium leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-charcoal/65">
                      {card.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Expected outcomes side card */}
            <Reveal delay={0.15}>
              <div
                className={clsx(
                  "flex h-full flex-col rounded-xl2 border p-6 shadow-soft",
                  protocol.accent === "clay"
                    ? "border-clay/20 bg-clay-soft/40"
                    : "border-sage-deep/15 bg-sage-faint"
                )}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className={accentText} />
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/60">
                    What to expect
                  </p>
                </div>
                <ul className="mt-4 space-y-3.5">
                  {protocol.expect.map((e) => (
                    <li
                      key={e}
                      className="flex gap-3 text-[13.5px] leading-relaxed text-charcoal/75"
                    >
                      <span
                        className={clsx(
                          "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                          accentBg
                        )}
                      />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== 2. THE STACK ========== */}
      <section
        id="stack"
        className="scroll-mt-32 border-t border-charcoal/[0.06] bg-white py-20 sm:py-24"
      >
        <div className="container-content">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">The stack</p>
                <h2 className="mt-3 font-serif text-[34px] font-medium leading-[1.08] sm:text-[44px]">
                  Each peptide,{" "}
                  <span className="italic text-clay-deep">its own pen.</span>
                </h2>
              </div>
              <p className="max-w-sm text-[14.5px] leading-relaxed text-charcoal/60">
                No forced stacks. No blended formulations. Cleaner dosing and
                cleaner titration, cycle after cycle.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {protocol.peptideRoles.map((pep, i) => {
              const product = products.find(
                (p) => p.slug === pep.productSlug
              );
              return (
                <Reveal key={pep.name} delay={i * 0.04}>
                  <Link
                    href={product ? `/products/${product.slug}` : "#"}
                    className="group relative flex h-full flex-col overflow-hidden rounded-xl2 border border-charcoal/[0.08] bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    {/* Big serif initial */}
                    <div
                      aria-hidden
                      className={clsx(
                        "pointer-events-none absolute -right-4 -top-6 font-serif text-[140px] font-medium leading-none opacity-[0.06]",
                        accentText
                      )}
                    >
                      {pep.name.charAt(0)}
                    </div>
                    <div className="flex items-start justify-between">
                      <h3 className="font-serif text-[28px] font-medium leading-tight">
                        {pep.name}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-charcoal/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-charcoal"
                      />
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
                      {pep.role}
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-3 border-t border-charcoal/[0.08] pt-4 text-[12px]">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal/45">
                          Delivery
                        </p>
                        <p className="mt-0.5 font-medium text-charcoal/85">
                          {pep.delivery.split(" · ")[0]}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal/45">
                          Frequency
                        </p>
                        <p className="mt-0.5 font-medium text-charcoal/85">
                          {pep.frequency.split(" · ")[0]}
                        </p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== 3. HORIZONTAL CYCLE TIMELINE ========== */}
      <section
        id="cycle"
        className="scroll-mt-32 border-t border-charcoal/[0.06] py-20 sm:py-24"
      >
        <div className="container-content">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">The {protocol.cycleWeeks}-week cycle</p>
                <h2 className="mt-3 font-serif text-[34px] font-medium leading-[1.08] sm:text-[44px]">
                  Read by a physician,{" "}
                  <span className="italic text-sage-deep">week by week.</span>
                </h2>
              </div>
              <p className="max-w-sm text-[14.5px] leading-relaxed text-charcoal/60">
                Every gated checkpoint is a written physician review — not an
                auto-refill.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 relative">
            {/* Progress line */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-4 hidden h-px bg-charcoal/[0.1] md:block"
            />
            <ol className="grid gap-4 md:grid-cols-4 lg:grid-cols-5">
              {protocol.timeline.map((m, i) => (
                <Reveal key={m.week + m.title} delay={i * 0.04} as="li">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
                      <span
                        className={clsx(
                          "relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-semibold uppercase tracking-[0.08em]",
                          m.highlight
                            ? "bg-sage-deep text-cream shadow-soft"
                            : "border border-charcoal/15 bg-cream text-charcoal/60"
                        )}
                      >
                        {m.week
                          .replace("Week ", "W")
                          .replace("Weeks ", "W")}
                      </span>
                      {m.highlight && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-sage-deep/10 px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-sage-deep md:hidden">
                          Gate
                        </span>
                      )}
                    </div>
                    <div className="mt-4 flex-1 rounded-xl2 border border-charcoal/[0.06] bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                      <p className="font-serif text-[11.5px] uppercase tracking-[0.14em] text-charcoal/45">
                        {m.week}
                      </p>
                      <p className="mt-1.5 font-serif text-[17px] font-medium leading-snug">
                        {m.title}
                      </p>
                      <p className="mt-2 text-[13px] leading-relaxed text-charcoal/60">
                        {m.body}
                      </p>
                      {m.highlight && (
                        <span className="mt-3 hidden items-center gap-1 rounded-full bg-sage-deep/10 px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-sage-deep md:inline-flex">
                          <Sparkles size={9} /> Physician gate
                        </span>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ========== 4. MARKERS (compact chip grid) ========== */}
      <section
        id="markers"
        className="scroll-mt-32 border-t border-charcoal/[0.06] bg-sage-faint/40 py-20 sm:py-24"
      >
        <div className="container-content">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow flex items-center gap-2">
                  <Stethoscope size={13} /> Physician-monitored
                </p>
                <h2 className="mt-3 font-serif text-[34px] font-medium leading-[1.08] sm:text-[44px]">
                  Markers we read{" "}
                  <span className="italic text-sage-deep">across the cycle.</span>
                </h2>
              </div>
              <div className="flex items-start gap-2.5 rounded-xl2 border border-charcoal/[0.08] bg-white/70 px-4 py-3 text-[12.5px] leading-relaxed text-charcoal/65 sm:max-w-sm">
                <Beaker size={14} className="mt-0.5 shrink-0 text-clay-deep" />
                <span>
                  Framework only. Your physician designs your actual protocol
                  from your intake and baseline panel.
                </span>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {protocol.biomarkers.map((b, i) => (
              <Reveal key={b.name} delay={i * 0.03}>
                <div className="flex gap-4 rounded-xl border border-charcoal/[0.06] bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clay-soft text-clay-deep">
                    <Droplet size={14} />
                  </div>
                  <div>
                    <p className="font-serif text-[16px] font-medium leading-snug">
                      {b.name}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-charcoal/60">
                      {b.why}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 5. DAILY RHYTHM (collapsible) ========== */}
      <section
        id="day"
        className="scroll-mt-32 border-t border-charcoal/[0.06] py-20 sm:py-24"
      >
        <div className="container-content">
          <details className="group rounded-xl2 border border-charcoal/[0.08] bg-white shadow-soft transition-shadow open:shadow-lift">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 sm:p-8">
              <div>
                <p className="eyebrow">A day on this protocol</p>
                <h2 className="mt-3 font-serif text-[28px] font-medium leading-[1.08] sm:text-[34px]">
                  Rhythm,{" "}
                  <span className="italic text-clay-deep">not friction.</span>
                </h2>
                <p className="mt-2 text-[14px] text-charcoal/55">
                  How Amino patients typically run this stack in a day.
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/10 bg-cream text-charcoal/60 transition-transform duration-300 group-open:rotate-180">
                <ChevronDown size={18} />
              </span>
            </summary>
            <div className="grid gap-3 border-t border-charcoal/[0.06] p-6 sm:grid-cols-2 sm:p-8">
              {protocol.day.map((d) => (
                <div
                  key={d.when + d.title}
                  className="grid grid-cols-[100px_1fr] gap-4 rounded-xl border border-charcoal/[0.06] bg-cream p-5"
                >
                  <p className="font-serif text-[11.5px] font-medium uppercase tracking-[0.14em] text-charcoal/50">
                    {d.when}
                  </p>
                  <div>
                    <p className="font-serif text-[16.5px] font-medium leading-snug">
                      {d.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-charcoal/60">
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* ========== 6. FAQ ========== */}
      <section
        id="faq"
        className="scroll-mt-32 border-t border-charcoal/[0.06] bg-cream-deep/40 py-20 sm:py-24"
      >
        <div className="container-content">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-16">
              <div>
                <p className="eyebrow">Protocol FAQ</p>
                <h2 className="mt-3 font-serif text-[34px] font-medium leading-[1.08] sm:text-[42px]">
                  Common questions on{" "}
                  <span className="italic text-clay-deep">
                    {protocol.name}.
                  </span>
                </h2>
                <p className="mt-6 text-[14.5px] leading-relaxed text-charcoal/60">
                  Still unsure? A physician will review your case within 48
                  hours — no cost, no commitment.
                </p>
              </div>
              <div>
                <FaqAccordion items={protocol.faqs} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section className="pb-8 pt-6">
        <div className="container-content">
          <Reveal>
            <div
              className={clsx(
                "relative overflow-hidden rounded-xl2 border p-8 shadow-soft sm:p-12",
                protocol.accent === "clay"
                  ? "border-clay/20 bg-clay-soft/50"
                  : "border-sage-deep/15 bg-sage-faint"
              )}
            >
              <div className="relative z-10 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
                <div>
                  <p className="eyebrow">Next step</p>
                  <h3 className="mt-3 font-serif text-[28px] font-medium leading-[1.08] sm:text-[36px]">
                    Start with the{" "}
                    <span className={clsx("italic", accentText)}>
                      {protocol.name}
                    </span>{" "}
                    intake.
                  </h3>
                  <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-charcoal/65">
                    2-minute intake. A physician will design, redesign, or
                    decline your protocol in writing.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                  <Button
                    href={`/protocols/${protocol.slug}/quiz`}
                    size="lg"
                    showArrow
                  >
                    Take the intake quiz
                  </Button>
                  <Button href="/#products" size="lg" variant="outline">
                    Explore peptides
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mobile sticky CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/[0.08] bg-cream/95 backdrop-blur-md md:hidden">
        <div className="container-content flex items-center justify-between gap-3 py-3">
          <div className="min-w-0 flex-1">
            <p className="truncate font-serif text-[13.5px] font-medium leading-tight">
              {protocol.name}
            </p>
            <p className="text-[11px] text-charcoal/55">
              {protocol.cycleWeeks}w · {protocol.peptideRoles.length} peptides
            </p>
          </div>
          <Button
            href={`/protocols/${protocol.slug}/quiz`}
            size="md"
            showArrow
          >
            Start intake
          </Button>
        </div>
      </div>

      <Cta />
      <Footer />
    </main>
  );
}
