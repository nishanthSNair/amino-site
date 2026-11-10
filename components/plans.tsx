"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { aed, BLOOD_TEST_AED, PRICE_AED, QUARTER_AED } from "@/data/catalog";
import { Pen } from "@/components/pen";

export function Plans() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-land]", {
        y: "-90vh",
        rotate: -24,
        ease: "sine.out",
        scrollTrigger: { trigger: root.current, start: "top 85%", end: "top 15%", scrub: 0.8 },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="plans" className="overflow-hidden bg-navy-950 py-16 text-white lg:py-24">
      <div className="wrap">
        <h2 data-split className="display text-center text-[52px] sm:text-[80px] lg:text-[112px]">Two plans.</h2>
        <div className="relative mt-10 grid gap-4 md:grid-cols-[1fr_170px_1fr] md:items-center lg:grid-cols-[1fr_230px_1fr]">
          <div className="rounded-tile bg-navy-800 p-8 sm:p-10">
            <p className="tag inline-block bg-white/10">Monthly</p>
            <p className="display mt-8 text-[48px] sm:text-[64px]">{aed(PRICE_AED)}</p>
            <p className="mt-2 text-ice-200">per month. Blood test {aed(BLOOD_TEST_AED)}, or use a previous one.</p>
            <Link href="/order?plan=monthly" className="btn mt-10 w-full bg-white text-navy-900">
              Order monthly
            </Link>
          </div>

          <div className="hidden h-[400px] justify-center md:flex lg:h-[460px]">
            <div data-land className="h-full">
              <div className="pen-float h-full">
                <Pen />
              </div>
            </div>
          </div>

          <div className="rounded-tile p-8 text-navy-900 sm:p-10" style={{ background: "linear-gradient(170deg,#A9DFFB 0%,#E8F7FF 100%)" }}>
            <p className="tag inline-block bg-white/60">3 months · Free blood test</p>
            <p className="display mt-8 text-[48px] sm:text-[64px]">{aed(QUARTER_AED)}</p>
            <p className="mt-2 text-navy-800">paid upfront. Blood test included.</p>
            <Link href="/order?plan=quarter" className="btn mt-10 w-full bg-navy-900 text-white">
              Order 3 months
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center text-lg text-ice-200">Doctor consultation always free. Full refund if your doctor declines.</p>
      </div>
    </section>
  );
}
