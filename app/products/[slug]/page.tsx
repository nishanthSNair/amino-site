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
  Snowflake,
  Stethoscope,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/motion";
import { Badge, Button } from "@/components/ui";
import { ProductVisual } from "@/components/product-visual";
import { PathwayIcon } from "@/components/pathway-icon";
import { FaqAccordion } from "@/components/faq-accordion";
import { products } from "@/data/products";
import { protocols } from "@/data/protocols";

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

  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-content">
          <Reveal>
            <Link
              href="/#products"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/55 transition-colors hover:text-charcoal"
            >
              <ArrowLeft size={15} /> All peptides
            </Link>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <ProductVisual product={product} />
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex h-full flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                  {product.category}
                </p>
                <h1 className="mt-3 font-serif text-[44px] font-medium leading-[1.02] sm:text-[58px]">
                  {product.name}
                </h1>
                <p className="mt-5 font-serif text-[19px] italic leading-snug text-clay-deep">
                  {product.tagline}
                </p>
                <p className="mt-5 text-[16px] leading-relaxed text-charcoal/70 sm:text-[17px]">
                  {product.benefit}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
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

                <dl className="mt-8 grid grid-cols-2 gap-3">
                  <SpecCell
                    label="Dose"
                    value={product.dosing.label}
                  />
                  <SpecCell
                    label="Frequency"
                    value={product.dosing.frequency}
                  />
                  <SpecCell
                    label="Delivery"
                    value={product.dosing.delivery}
                  />
                  <SpecCell
                    label="Cycle"
                    value={product.dosing.cycle}
                  />
                </dl>

                {relatedProtocols[0] && (
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                      href={`/protocols/${relatedProtocols[0].slug}/quiz`}
                      size="lg"
                      showArrow
                    >
                      Take the intake quiz
                    </Button>
                    <Button
                      href={`/protocols/${relatedProtocols[0].slug}`}
                      size="lg"
                      variant="outline"
                    >
                      See it in a protocol
                    </Button>
                  </div>
                )}
                <p className="mt-4 text-[12.5px] leading-relaxed text-charcoal/50">
                  Every peptide requires a health intake, baseline blood panel
                  and physician review. Compounded fresh by a fully licensed
                  UAE compounding pharmacy regulated by MOH and EDE.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MECHANISM CARDS */}
      <section className="border-t border-charcoal/[0.06] bg-cream py-24 sm:py-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Mechanism of action</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[36px] font-medium leading-[1.08] sm:text-[46px]">
              How {product.name}{" "}
              <span className="italic text-sage-deep">signals.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {product.mechanismCards.map((card, i) => (
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
              {product.mechanism}
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY PHYSICIANS REACH FOR IT */}
      <section className="py-24 sm:py-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Why physicians reach for it</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[36px] font-medium leading-[1.08] sm:text-[46px]">
              A prescription-grade lever,{" "}
              <span className="italic text-clay-deep">used with restraint.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {product.claims.map((claim, i) => (
              <Reveal key={claim.headline} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-xl2 border border-charcoal/[0.06] bg-cream/60 p-8 transition-all duration-300 hover:bg-cream hover:shadow-soft">
                  <h3 className="font-serif text-[22px] font-medium leading-snug">
                    {claim.headline}
                  </h3>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-charcoal/70">
                    {claim.body}
                  </p>
                  <p className="mt-6 border-t border-charcoal/[0.08] pt-4 text-[11.5px] font-medium uppercase tracking-[0.12em] text-charcoal/45">
                    Source · {claim.source}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOSING FRAMEWORK */}
      <section className="py-24 sm:py-28 bg-sage-faint/40">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow">Dosing framework</p>
              <h2 className="mt-4 font-serif text-[36px] font-medium leading-[1.08] sm:text-[44px]">
                A framework,{" "}
                <span className="italic text-sage-deep">not a prescription.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-charcoal/65">
                What you see below is a representative framework Amino
                physicians work from. Your actual protocol is designed —
                dose, frequency, cycle length, delivery — from your intake
                and baseline blood panel.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-8 shadow-soft sm:p-10">
                <div className="grid grid-cols-2 gap-x-8 gap-y-8">
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
                <div className="mt-10 flex items-start gap-3 rounded-xl2 bg-sage-faint p-5">
                  <BadgeCheck
                    size={16}
                    className="mt-0.5 shrink-0 text-sage-deep"
                  />
                  <p className="text-[13.5px] leading-relaxed text-sage-deep">
                    {product.dosing.note}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE AMINO WAY */}
      <section className="py-24 sm:py-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">The Amino way</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[36px] font-medium leading-[1.08] sm:text-[46px]">
              Three gates before a peptide is compounded.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <StepCard
              n="01"
              title="Intake"
              body="A 6-minute clinical intake covering history, medications, sleep, training and recent labs."
            />
            <StepCard
              n="02"
              title="Blood panel"
              body="A longevity-grade panel — hormones, inflammation, metabolic and micronutrient markers — at a partnered UAE lab."
              highlight
            />
            <StepCard
              n="03"
              title="Physician review"
              body="A licensed physician designs, redesigns, or declines your protocol — in writing, within 48 hours."
              highlight
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-28 bg-cream-deep/50">
        <div className="container-content">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[360px_1fr] lg:gap-16">
              <div>
                <p className="eyebrow">FAQ</p>
                <h2 className="mt-4 font-serif text-[36px] font-medium leading-[1.08] sm:text-[42px]">
                  Common questions about {product.name}.
                </h2>
              </div>
              <div>
                <FaqAccordion items={product.faqs} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SAFETY */}
      <section className="py-16">
        <div className="container-content">
          <Reveal>
            <div className="flex items-start gap-4 rounded-xl2 border border-charcoal/[0.08] bg-white p-6">
              <Stethoscope size={20} className="mt-0.5 shrink-0 text-clay-deep" />
              <div>
                <p className="font-medium text-charcoal">Safety & eligibility</p>
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

      {/* ALSO INSIDE THESE PROTOCOLS */}
      {relatedProtocols.length > 0 && (
        <section className="py-24 sm:py-28">
          <div className="container-content">
            <Reveal>
              <p className="eyebrow">Also inside these protocols</p>
              <h2 className="mt-4 max-w-3xl font-serif text-[36px] font-medium leading-[1.08] sm:text-[44px]">
                Where {product.name} is designed to sit.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {relatedProtocols.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <Link
                    href={`/protocols/${p.slug}`}
                    className="group flex h-full flex-col rounded-xl2 border border-charcoal/[0.06] bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
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
                    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/45">
                      {p.category}
                    </p>
                    <h3 className="mt-1 font-serif text-[24px] font-medium leading-tight">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal/65">
                      {p.outcome}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.peptides.map((pep) => (
                        <span
                          key={pep}
                          className="rounded-full border border-charcoal/[0.08] bg-cream px-2.5 py-1 text-[11.5px] font-medium text-charcoal/70"
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

      {/* RELATED PEPTIDES */}
      {relatedProducts.length > 0 && (
        <section className="pb-24 sm:pb-28">
          <div className="container-content">
            <Reveal>
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="eyebrow">Related peptides</p>
                  <h2 className="mt-4 font-serif text-[28px] font-medium leading-tight sm:text-[34px]">
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

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
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
    </main>
  );
}

function SpecCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-4">
      <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
        {label}
      </p>
      <p className="mt-1.5 font-serif text-[15px] font-medium leading-snug text-charcoal">
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
      <p className="mt-2 font-serif text-[24px] font-medium leading-tight">
        {value}
      </p>
    </div>
  );
}

function StepCard({
  n,
  title,
  body,
  highlight,
}: {
  n: string;
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={`flex h-full flex-col rounded-xl2 border p-8 transition-all duration-300 ${
          highlight
            ? "border-sage-deep/15 bg-sage-faint shadow-soft hover:-translate-y-1 hover:shadow-lift"
            : "border-charcoal/[0.06] bg-white shadow-soft hover:-translate-y-1 hover:shadow-lift"
        }`}
      >
        <p
          className={`font-serif text-sm ${
            highlight ? "text-sage-deep" : "text-charcoal/45"
          }`}
        >
          {n}
        </p>
        <h3 className="mt-3 font-serif text-[22px] font-medium leading-snug">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-charcoal/65">
          {body}
        </p>
      </div>
    </Reveal>
  );
}
