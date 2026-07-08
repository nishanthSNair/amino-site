import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Beaker,
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

  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div
          aria-hidden
          className={clsx(
            "pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full blur-3xl",
            protocol.accent === "clay" ? "bg-clay/20" : "bg-sage/25"
          )}
        />
        <div className="container-content relative">
          <Reveal>
            <Link
              href="/#protocols"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/55 transition-colors hover:text-charcoal"
            >
              <ArrowLeft size={15} /> All protocols
            </Link>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="max-w-2xl">
              <Reveal>
                <div
                  className={clsx(
                    "mb-6 h-1.5 w-16 rounded-full",
                    protocol.accent === "clay" ? "bg-clay" : "bg-sage"
                  )}
                />
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                  {protocol.category} · {protocol.cycleWeeks}-week cycle
                </p>
                <h1 className="font-serif text-[44px] font-medium leading-[1.02] sm:text-[60px]">
                  {protocol.name}
                </h1>
                <p className="mt-6 text-[17px] leading-relaxed text-charcoal/70 sm:text-[19px]">
                  {protocol.outcome}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-2">
                  <Badge tone="sage">
                    <BadgeCheck size={12} />
                    Physician-designed
                  </Badge>
                  {protocol.peptides.map((pep) => (
                    <span
                      key={pep}
                      className="rounded-full border border-charcoal/10 bg-white px-3 py-1.5 text-[12.5px] font-medium text-charcoal/70"
                    >
                      {pep} · separate pen
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={`/protocols/${protocol.slug}/quiz`}
                    size="lg"
                    showArrow
                  >
                    Take the intake quiz
                  </Button>
                  <Button href="/#products" size="lg" variant="outline">
                    Explore the peptides
                  </Button>
                </div>
                <p className="mt-4 text-[12.5px] text-charcoal/50">
                  A 2-minute intake — no cost, no commitment. Full onboarding
                  opens to the first cohort soon.
                </p>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.1}>
                <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-6 shadow-soft sm:p-7">
                  <p className="eyebrow">Who it&apos;s for</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
                    {protocol.whoFor}
                  </p>
                  <hr className="my-6 border-charcoal/[0.06]" />
                  <ul className="space-y-4 text-[13.5px] text-charcoal/70">
                    <li className="flex items-center justify-between">
                      <span className="text-charcoal/55">Cycle length</span>
                      <span className="font-medium text-charcoal">
                        {protocol.cycleWeeks} weeks
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-charcoal/55">Peptides</span>
                      <span className="font-medium text-charcoal text-right">
                        {protocol.peptideRoles.length}
                        {protocol.peptideRoles.length === 1
                          ? " peptide"
                          : " peptides"}
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-charcoal/55">Bloodwork</span>
                      <span className="font-medium text-charcoal">
                        Baseline + re-panel
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-charcoal/55">Delivery</span>
                      <span className="font-medium text-charcoal">
                        Cold-chain, GCC
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="border-t border-charcoal/[0.06] bg-cream py-24 sm:py-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Pathways</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[36px] font-medium leading-[1.08] sm:text-[46px]">
              How the stack{" "}
              <span className="italic text-sage-deep">signals.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {protocol.pathways.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-xl2 border border-charcoal/[0.06] bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-faint text-sage-deep">
                    <PathwayIcon name={card.icon} size={18} />
                  </div>
                  <h3 className="mt-6 font-serif text-[22px] font-medium leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal/65">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 max-w-3xl text-[15px] leading-relaxed text-charcoal/60">
              {protocol.mechanism}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PEPTIDES IN THIS STACK */}
      <section className="py-24 sm:py-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Inside the stack</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[36px] font-medium leading-[1.08] sm:text-[46px]">
              Every peptide,{" "}
              <span className="italic text-clay-deep">its own role.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-charcoal/65">
              Each peptide is compounded in its own pen — no forced stacks, no
              blended formulations. Cleaner dosing, cleaner titration.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {protocol.peptideRoles.map((pep, i) => {
              const product = products.find((p) => p.slug === pep.productSlug);
              return (
                <Reveal key={pep.name} delay={i * 0.05}>
                  <Link
                    href={product ? `/products/${product.slug}` : "#"}
                    className="group flex h-full flex-col rounded-xl2 border border-charcoal/[0.06] bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="font-serif text-[26px] font-medium leading-tight">
                        {pep.name}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-charcoal/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-charcoal"
                      />
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal/70">
                      {pep.role}
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4 border-t border-charcoal/[0.06] pt-5">
                      <div>
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                          Delivery
                        </p>
                        <p className="mt-1 text-[13px] font-medium text-charcoal/80">
                          {pep.delivery}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                          Frequency
                        </p>
                        <p className="mt-1 text-[13px] font-medium text-charcoal/80">
                          {pep.frequency}
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

      {/* TIMELINE */}
      <section className="py-24 sm:py-28 bg-cream-deep/50">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Week-by-week</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[36px] font-medium leading-[1.08] sm:text-[46px]">
              {protocol.cycleWeeks} weeks,{" "}
              <span className="italic text-sage-deep">read by a physician.</span>
            </h2>
          </Reveal>

          <ol className="mt-12 relative">
            <div
              aria-hidden
              className="pointer-events-none absolute left-4 top-2 bottom-2 w-px bg-charcoal/[0.1] sm:left-6"
            />
            {protocol.timeline.map((m, i) => (
              <Reveal key={m.week + m.title} delay={i * 0.04} as="li">
                <div className="relative flex gap-4 pb-8 sm:gap-6">
                  <div className="relative z-10 shrink-0">
                    <span
                      className={clsx(
                        "flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-semibold uppercase tracking-[0.1em] sm:h-12 sm:w-12 sm:text-[11px]",
                        m.highlight
                          ? "bg-sage-deep text-cream shadow-soft"
                          : "border border-charcoal/15 bg-cream text-charcoal/60"
                      )}
                    >
                      {m.week.replace("Week ", "W").replace("Weeks ", "W")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 rounded-xl2 border border-charcoal/[0.06] bg-white p-6 shadow-soft">
                    <div className="flex items-center gap-2">
                      <p className="font-serif text-[13px] text-charcoal/50">
                        {m.week}
                      </p>
                      {m.highlight && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-sage-deep px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-cream">
                          <Sparkles size={9} /> Physician gate
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 font-serif text-[20px] font-medium leading-snug">
                      {m.title}
                    </p>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal/65">
                      {m.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* A DAY ON THIS PROTOCOL */}
      <section className="py-24 sm:py-28">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow">A day on this protocol</p>
              <h2 className="mt-4 font-serif text-[36px] font-medium leading-[1.08] sm:text-[44px]">
                Rhythm,{" "}
                <span className="italic text-clay-deep">not friction.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-charcoal/65">
                A physician-designed protocol only works if it fits inside your
                day. Here&apos;s how patients on Amino typically run this
                stack.
              </p>
            </Reveal>

            <div className="space-y-4">
              {protocol.day.map((d, i) => (
                <Reveal key={d.when + d.title} delay={i * 0.04}>
                  <div className="grid grid-cols-[110px_1fr] gap-6 rounded-xl2 border border-charcoal/[0.06] bg-white p-6 shadow-soft sm:grid-cols-[140px_1fr]">
                    <p className="font-serif text-[13px] font-medium uppercase tracking-[0.14em] text-charcoal/50">
                      {d.when}
                    </p>
                    <div>
                      <p className="font-serif text-[19px] font-medium leading-snug">
                        {d.title}
                      </p>
                      <p className="mt-1.5 text-[14.5px] leading-relaxed text-charcoal/65">
                        {d.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHYSICIAN MONITORS */}
      <section className="py-24 sm:py-28 bg-sage-faint/40">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <Stethoscope size={13} /> What your physician monitors
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-[36px] font-medium leading-[1.08] sm:text-[46px]">
              Markers we read across the cycle.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {protocol.biomarkers.map((b, i) => (
              <Reveal key={b.name} delay={i * 0.04}>
                <div className="flex gap-5 rounded-xl2 border border-charcoal/[0.06] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clay-soft text-clay-deep">
                    <Droplet size={16} />
                  </div>
                  <div>
                    <p className="font-serif text-[19px] font-medium leading-snug">
                      {b.name}
                    </p>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-charcoal/65">
                      {b.why}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex items-start gap-3 rounded-xl2 border border-charcoal/[0.08] bg-white p-5">
              <Beaker size={16} className="mt-0.5 shrink-0 text-clay-deep" />
              <p className="text-[13.5px] leading-relaxed text-charcoal/65">
                Peptides and dosing shown here are a representative framework.
                Your physician designs your actual protocol from your health
                intake and baseline blood panel — and may redesign it,
                substitute peptides, or decline it entirely if it isn&apos;t
                appropriate for you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-28">
        <div className="container-content">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[360px_1fr] lg:gap-16">
              <div>
                <p className="eyebrow">Protocol FAQ</p>
                <h2 className="mt-4 font-serif text-[36px] font-medium leading-[1.08] sm:text-[42px]">
                  Common questions on {protocol.name}.
                </h2>
              </div>
              <div>
                <FaqAccordion items={protocol.faqs} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="pb-8">
        <div className="container-content">
          <Reveal>
            <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-8 text-center shadow-soft sm:p-12">
              <p className="eyebrow">Next step</p>
              <h3 className="mx-auto mt-4 max-w-2xl font-serif text-[30px] font-medium leading-[1.1] sm:text-[38px]">
                Start with the {protocol.name} intake.
              </h3>
              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-charcoal/65">
                A 2-minute intake — no cost, no commitment. A physician will
                design, redesign, or decline your protocol in writing.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href={`/protocols/${protocol.slug}/quiz`}
                  size="lg"
                  showArrow
                >
                  Take the intake quiz
                </Button>
                <Button href="/#products" size="lg" variant="outline">
                  Explore the peptides
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}
