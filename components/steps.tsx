"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Pen } from "@/components/pen";
import { Rail } from "@/components/rail";

const steps = [
  { word: "Order.", line: "Choose a peptide or protocol." },
  { word: "Test.", line: "A baseline blood panel comes first." },
  { word: "Review.", line: "A licensed physician approves or declines." },
  { word: "Delivered.", line: "Cold-chain to your door." },
];

export function Steps() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mm = gsap.matchMedia(root);
    mm.add("(min-width: 1024px)", () => {
      const track = root.current!.querySelector<HTMLElement>("[data-track]")!;
      const pen = root.current!.querySelector<HTMLElement>("[data-step-pen]")!;
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: root.current, start: "top 72%", end: "bottom 62%", scrub: 0.8, invalidateOnRefresh: true },
      });
      tl.fromTo("[data-track-fill]", { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0).fromTo(pen, { x: 0 }, { x: () => track.offsetWidth - pen.offsetWidth, duration: 1 }, 0);
      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el, i) => {
        tl.fromTo(el, { opacity: 0.18 }, { opacity: 1, duration: 0.18 }, i * 0.24);
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="how-it-works" className="wrap scroll-mt-24 py-16 lg:py-24">
      <div data-track className="relative mb-8 h-8 lg:h-12">
        <div className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-ice-100" />
        <div data-track-fill className="step-fill absolute inset-x-0 top-1/2 h-[3px] origin-left -translate-y-1/2 rounded-full bg-ice-400" />
        <div data-step-pen className="step-pen absolute left-0 top-0 h-full w-[170px] will-change-transform lg:w-[280px]">
          <div className="absolute left-1/2 top-1/2 h-[170px] -translate-x-1/2 -translate-y-1/2 rotate-90 lg:h-[280px]">
            <Pen />
          </div>
        </div>
      </div>
      <Rail className="lg:grid lg:grid-cols-4 lg:gap-8">
        {steps.map((s, i) => (
          <div key={s.word} data-step className="w-[66vw] max-w-[280px] shrink-0 snap-start lg:w-auto lg:max-w-none">
            <p className="font-mono text-xs text-navy-600">{i + 1} of 4</p>
            <p className="display mt-3 text-[48px] lg:text-[60px] xl:text-[76px]">{s.word}</p>
            <p className="mt-3 text-[17px] leading-snug text-navy-600 lg:text-xl">{s.line}</p>
          </div>
        ))}
      </Rail>
    </section>
  );
}
