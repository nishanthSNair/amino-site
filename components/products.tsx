"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Stethoscope } from "lucide-react";
import clsx from "clsx";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { products } from "@/data/products";

const categories = [
  "All",
  "Repair",
  "Longevity",
  "Growth",
  "Metabolic",
  "Cognitive",
  "Sexual Health",
] as const;

type Category = (typeof categories)[number];

export function Products() {
  const [active, setActive] = useState<Category>("All");
  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="relative bg-cream-deep/60 py-24 sm:py-32">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="Individual peptides"
            title={
              <>
                Prescription cellular messengers,{" "}
                <span className="italic text-sage-deep">reviewed one case at a time.</span>
              </>
            }
            intro="Aesop-clean surface, pharmacy-grade rigor beneath. Every peptide requires an intake, a blood panel and a physician's review — there is no add-to-cart."
          />
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={clsx(
                  "rounded-full px-4 py-1.5 text-[13px] font-medium transition-all",
                  active === c
                    ? "bg-charcoal text-cream"
                    : "border border-charcoal/[0.12] bg-white/70 text-charcoal/65 hover:border-charcoal/25"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.03}>
              <Link
                href={`/products/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-charcoal/[0.06] bg-white text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                {/* Product image / visual */}
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-gradient-to-br from-charcoal to-[#1f2b3d]">
                  <span className="absolute left-4 top-4 z-10 rounded-full border border-cream/30 bg-cream/10 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-cream/95 backdrop-blur">
                    Rx
                  </span>
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-serif text-[64px] font-medium text-cream/25">
                      {p.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/45">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-serif text-[24px] font-medium leading-tight">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal/65">
                    {p.benefit}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-5 text-[12.5px] text-charcoal/50">
                    <span className="flex items-center gap-1.5">
                      <Stethoscope size={13} /> Physician-reviewed
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-charcoal/70 transition-colors group-hover:text-clay-deep">
                      View
                      <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
