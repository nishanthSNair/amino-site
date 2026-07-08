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
                className="group flex h-full flex-col rounded-xl2 border border-charcoal/[0.06] bg-white p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/45">
                      {p.category}
                    </p>
                    <h3 className="mt-1 font-serif text-[24px] font-medium leading-tight">
                      {p.name}
                    </h3>
                  </div>
                  <span className="rounded-full border border-clay/20 bg-clay-soft/60 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-clay-deep">
                    Rx
                  </span>
                </div>
                <p className="mt-4 text-[14.5px] leading-relaxed text-charcoal/65">
                  {p.benefit}
                </p>
                <div className="mt-auto pt-5 hairline pt-4 flex items-center justify-between text-[12.5px] text-charcoal/50">
                  <span className="flex items-center gap-1.5">
                    <Stethoscope size={13} /> Physician-reviewed
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-charcoal/70 transition-colors group-hover:text-clay-deep">
                    View peptide
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
