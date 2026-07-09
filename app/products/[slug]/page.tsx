import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ClipboardList,
  Droplet,
  FlaskConical,
  PhoneCall,
  Snowflake,
  Stethoscope,
  Video,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/motion";
import { Badge, Button } from "@/components/ui";
import { ProductVisual } from "@/components/product-visual";
import { PathwayIcon } from "@/components/pathway-icon";
import { FaqAccordion } from "@/components/faq-accordion";
import { StickySubnav } from "@/components/protocol-subnav";
import { ProductResearch } from "@/components/product-research";
import { ProductCallback } from "@/components/product-callback";
import { products } from "@/data/products";
import { protocols } from "@/data/protocols";
import { researchLibrary } from "@/data/research";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);
  return {
    title: p ? `${p.name} — Amino` : "Product — Amino",
    description: p?.benefit,
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const relatedProtocols = protocols.filter((p) =>
    product.relatedProtocolSlugs.includes(p.slug)
  );
  const relatedProducts = products.filter((p) =>
    product.relatedProductSlugs.includes(p.slug)
  );
  const hasResearch = Boolean(researchLibrary[product.slug]?.length);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "mechanism", label: "Mechanism" },
    { id: "dosing", label: "Dosing" },
    ...(hasResearch ? [{ id: "research", label: "Research" }] : []),
    ...(relatedProtocols.length
      ? [{ id: "protocol", label: "In protocols" }]
      : []),
    { id: "callback", label: "Callback" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <main className="bg-cream pb-24 md:pb-0">
      <Nav />

      {/* ========== HERO ========== */}
      <section
        id="overview"
        className="scroll-mt-32 pt-28 pb-14 sm:pt-32 sm:pb-16"
      >
        <div className="container-content">
          <Reveal>
            <Link
              href="/#products"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/55 transition-colors hover:text-charcoal"
            >
              <ArrowLeft size={15} /> All peptides
            </Link>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            {/* LEFT — product photo */}
            <Reveal>
              <ProductVisual product={product} className="group" />
            </Reveal>

            {/* RIGHT — info + CTAs */}
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                  {product.category}
                </p>
                <h1 className="mt-3 font-serif text-[44px] font-medium leading-[1.02] tracking-tight sm:text-[58px]">
                  {product.name}
                </h1>
                <p className="mt-5 font-serif text-[19px] italic leading-snug text-clay-deep">
                  {product.tagline}
                </p>
                <p className="mt-5 text-[16px] leading-relaxed text-charcoal/70 sm:text-[17px]">
                  {product.benefit}
                </p>

                {/* Trust badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge tone="clay">Rx · physician-reviewed</Badge>
                  <Badge tone="sage">
                    <Snowflake size={12} />
                    Cold-chain
                  </Badge>
                  <Badge tone="outline">
                    <FlaskConical size={12} />
                    45-day fresh
                  </Badge>
                  <Badge tone="outline">
                    <BadgeCheck size={12} />
                    Separate pen
                  </Badge>
                </div>

                {/* Spec grid — inline, dense */}
                <dl className="mt-7 grid grid-cols-2 gap-2.5 rounded-xl2 border border-charcoal/[0.08] bg-white p-4 sm:grid-cols-4">
                  <SpecInline label="Dose" value={product.dosing.label} />
                  <SpecInline
                    label="Frequency"
                    value={product.dosing.frequency.split(" · ")[0]}
                  />
                  <SpecInline
                    label="Delivery"
                    value={product.dosing.delivery.split(" · ")[0]}
                  />
                  <SpecInline
                    label="Cycle"
                    value={product.dosing.cycle.split(" · ")[0]}
                  />
                </dl>

                {/* THE TWO PRIMARY CTAs */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href="#callback"
                    size="lg"
                    className="!bg-charcoal !text-cream hover:!bg-charcoal/90"
                  >
                    <PhoneCall size={16} />
                    Buy now — get a callback
                  </Button>
                  <Button
                    href="/consultation"
                    size="lg"
                    variant="outline"
                  >
                    <Video size={16} />
                    Book a consultation
                  </Button>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-charcoal/50">
                  <span className="flex items-center gap-1">
                    <Stethoscope size={12} /> Team calls back within 24 hours
                  </span>
                  <span>·</span>
                  <span>
                    Or{" "}
                    {relatedProtocols[0] ? (
                      <Link
                        href={`/protocols/${relatedProtocols[0].slug}/quiz`}
                        className="text-charcoal/75 underline decoration-clay/50 underline-offset-4 hover:decoration-clay"
                      >
                        take the 2-min intake quiz
                      </Link>
                    ) : (
                      <Link
                        href="/#cta"
                        className="text-charcoal/75 underline decoration-clay/50 underline-offset-4 hover:decoration-clay"
                      >
                        take the 2-min intake quiz
                      </Link>
                    )}
                  </span>
                </div>

                <p className="mt-6 text-[12.5px] leading-relaxed text-charcoal/50">
                  Every peptide requires a health intake, baseline blood panel
                  and physician review. Compounded fresh by a licensed UAE
                  compounding pharmacy regulated by MOH and EDE.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== STICKY SUB-NAV ========== */}
      <StickySubnav sections={sections} />

      {/* ========== MECHANISM ========== */}
      <section
        id="mechanism"
        className="scroll-mt-32 border-t border-charcoal/[0.06] bg-white py-20 sm:py-24"
      >
        <div className="container-content">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Mechanism of action</p>
                <h2 className="mt-3 font-serif text-[34px] font-medium leading-[1.08] sm:text-[44px]">
                  How {product.name}{" "}
                  <span className="italic text-sage-deep">signals.</span>
                </h2>
              </div>
              <p className="max-w-md text-[14.5px] leading-relaxed text-charcoal/60">
                {product.mechanism}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {product.mechanismCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.04}>
                <div className="flex h-full flex-col rounded-xl2 border border-charcoal/[0.06] bg-cream p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-faint text-sage-deep">
                    <PathwayIcon name={card.icon} size={16} />
                  </div>
                  <h3 className="mt-5 font-serif text-[19px] font-medium leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/65">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Compact why-physicians-reach strip */}
          <Reveal>
            <div className="mt-10 grid gap-4 rounded-xl2 border border-charcoal/[0.08] bg-cream p-6 md:grid-cols-3 md:p-8">
              <div className="md:col-span-1">
                <p className="eyebrow">Why physicians reach for it</p>
                <p className="mt-2 font-serif text-[20px] font-medium leading-snug">
                  A prescription-grade lever,{" "}
                  <span className="italic text-clay-deep">used with restraint.</span>
                </p>
              </div>
              <div className="grid gap-4 md:col-span-2 md:grid-cols-3">
                {product.claims.map((claim) => (
                  <div
                    key={claim.headline}
                    className="rounded-xl border border-charcoal/[0.06] bg-white p-4"
                  >
                    <p className="font-serif text-[14.5px] font-medium leading-snug">
                      {claim.headline}
                    </p>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-charcoal/60">
                      {claim.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== DOSING ========== */}
      <section
        id="dosing"
        className="scroll-mt-32 border-t border-charcoal/[0.06] bg-sage-faint/40 py-20 sm:py-24"
      >
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow">Dosing framework</p>
              <h2 className="mt-3 font-serif text-[34px] font-medium leading-[1.08] sm:text-[42px]">
                A framework,{" "}
                <span className="italic text-sage-deep">
                  not a prescription.
                </span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/65">
                Below is a representative framework Amino physicians work from.
                Your actual protocol is designed — dose, frequency, cycle
                length, delivery — from your intake and baseline blood panel.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-7 shadow-soft sm:p-8">
                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                  <DoseSpec
                    label="Dose"
                    value={product.dosing.label}
                    icon={<Droplet size={14} />}
                  />
                  <DoseSpec
                    label="Frequency"
                    value={product.dosing.frequency}
                    icon={<ClipboardList size={14} />}
                  />
                  <DoseSpec
                    label="Delivery"
                    value={product.dosing.delivery}
                    icon={<FlaskConical size={14} />}
                  />
                  <DoseSpec
                    label="Cycle"
                    value={product.dosing.cycle}
                    icon={<Stethoscope size={14} />}
                  />
                </div>
                <div className="mt-8 flex items-start gap-3 rounded-xl bg-sage-faint p-4">
                  <BadgeCheck
                    size={15}
                    className="mt-0.5 shrink-0 text-sage-deep"
                  />
                  <p className="text-[13px] leading-relaxed text-sage-deep">
                    {product.dosing.note}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== RESEARCH ========== */}
      {hasResearch && (
        <ProductResearch
          slug={product.slug}
          productName={product.name}
        />
      )}

      {/* ========== IN PROTOCOLS ========== */}
      {relatedProtocols.length > 0 && (
        <section
          id="protocol"
          className="scroll-mt-32 border-t border-charcoal/[0.06] bg-white py-20 sm:py-24"
        >
          <div className="container-content">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="eyebrow">Where it sits</p>
                  <h2 className="mt-3 font-serif text-[34px] font-medium leading-[1.08] sm:text-[44px]">
                    {product.name} inside{" "}
                    <span className="italic text-clay-deep">
                      physician-designed protocols.
                    </span>
                  </h2>
                </div>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {relatedProtocols.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <Link
                    href={`/protocols/${p.slug}`}
                    className="group flex h-full flex-col rounded-xl2 border border-charcoal/[0.06] bg-cream p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`h-1.5 w-12 rounded-full ${
                          p.accent === "clay" ? "bg-clay" : "bg-sage"
                        }`}
                      />
                      <ArrowUpRight
                        size={18}
                        className="text-charcoal/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-charcoal"
                      />
                    </div>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/45">
                      {p.category}
                    </p>
                    <h3 className="mt-1 font-serif text-[22px] font-medium leading-tight">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-charcoal/65">
                      {p.outcome}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.peptides.map((pep) => (
                        <span
                          key={pep}
                          className="rounded-full border border-charcoal/[0.08] bg-white px-2.5 py-1 text-[11.5px] font-medium text-charcoal/70"
                        >
                          {pep}
                        </span>
                      ))}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== CALLBACK FORM ========== */}
      <ProductCallback productName={product.name} />

      {/* ========== FAQ ========== */}
      <section
        id="faq"
        className="scroll-mt-32 border-t border-charcoal/[0.06] bg-cream-deep/40 py-20 sm:py-24"
      >
        <div className="container-content">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:gap-16">
              <div>
                <p className="eyebrow">FAQ</p>
                <h2 className="mt-3 font-serif text-[34px] font-medium leading-[1.08] sm:text-[42px]">
                  Common questions on{" "}
                  <span className="italic text-clay-deep">
                    {product.name}.
                  </span>
                </h2>
                <p className="mt-6 text-[14.5px] leading-relaxed text-charcoal/60">
                  Still unsure? A physician will review your case within 48
                  hours — no cost, no commitment.
                </p>
              </div>
              <div>
                <FaqAccordion items={product.faqs} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== SAFETY ========== */}
      <section className="border-t border-charcoal/[0.06] py-12">
        <div className="container-content">
          <Reveal>
            <div className="flex items-start gap-4 rounded-xl2 border border-charcoal/[0.08] bg-white p-6">
              <Stethoscope
                size={20}
                className="mt-0.5 shrink-0 text-clay-deep"
              />
              <div>
                <p className="font-medium text-charcoal">
                  Safety & eligibility
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-charcoal/65">
                  Amino serves adults 18+ following medical review. Peptides
                  are not appropriate during pregnancy or breastfeeding. Your
                  physician may decline your case at any point. Off-label
                  prescribing is conducted under the DHA framework by a
                  licensed physician; compounding is by a fully licensed UAE
                  pharmacy regulated by MOH and EDE.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== RELATED PEPTIDES ========== */}
      {relatedProducts.length > 0 && (
        <section className="pb-20 pt-8 sm:pb-24">
          <div className="container-content">
            <Reveal>
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="eyebrow">Related peptides</p>
                  <h2 className="mt-3 font-serif text-[28px] font-medium leading-tight sm:text-[34px]">
                    Physicians often pair {product.name} with these.
                  </h2>
                </div>
                <Link
                  href="/#products"
                  className="hidden text-[13.5px] font-medium text-charcoal/60 transition-colors hover:text-charcoal sm:inline-flex sm:items-center sm:gap-1"
                >
                  All peptides <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.04}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="group flex h-full flex-col rounded-xl2 border border-charcoal/[0.06] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="flex items-start justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/45">
                        {p.category}
                      </p>
                      <span className="rounded-full border border-clay/20 bg-clay-soft/60 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-clay-deep">
                        Rx
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-[22px] font-medium leading-tight">
                      {p.name}
                    </h3>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-charcoal/65">
                      {p.benefit}
                    </p>
                    <p className="mt-5 border-t border-charcoal/[0.06] pt-4 text-[12.5px] font-medium text-charcoal/50 transition-colors group-hover:text-clay-deep">
                      View peptide →
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Cta />
      <Footer />

      {/* ========== MOBILE STICKY CTA BAR ========== */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/[0.08] bg-cream/95 backdrop-blur-md md:hidden">
        <div className="container-content flex items-center gap-2 py-3">
          <Link
            href="#callback"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-charcoal px-4 py-2.5 text-[13px] font-medium text-cream shadow-soft"
          >
            <PhoneCall size={14} /> Callback
          </Link>
          <Link
            href="/consultation"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-charcoal/15 bg-white/80 px-4 py-2.5 text-[13px] font-medium text-charcoal"
          >
            <Video size={14} /> Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}

function SpecInline({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal/45">
        {label}
      </p>
      <p className="mt-0.5 truncate font-serif text-[14px] font-medium text-charcoal">
        {value}
      </p>
    </div>
  );
}

function DoseSpec({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-deep">
        {icon}
        {label}
      </p>
      <p className="mt-2 font-serif text-[22px] font-medium leading-tight">
        {value}
      </p>
    </div>
  );
}
