"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui";
import { Reveal, Counter } from "@/components/motion";
import { site } from "@/data/site";

export function Hero() {
  const { media } = site.hero;
  const hasVideo = Boolean(media.video);
  const ref = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? ["0%", "0%"] : ["0%", "20%"]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? ["0%", "0%"] : ["0%", "-8%"]
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-charcoal text-cream"
    >
      {/* Background media layer with parallax */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 h-[120%]"
      >
        {hasVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={media.poster || undefined}
            className="h-full w-full object-cover"
          >
            <source src={media.video} type="video/mp4" />
          </video>
        ) : (
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(120% 80% at 20% 10%, #8E6448 0%, #5c3f2c 45%, #2A2A28 100%)",
            }}
          />
        )}
        {/* Warm gradient wash for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/85" />
        {/* Subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/></svg>\")",
          }}
        />
      </motion.div>

      {/* Spacer for fixed announcement bar (40px) + nav (68px) */}
      <div className="h-[108px]" />

      {/* Main hero content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-content relative flex flex-1 flex-col justify-end pb-16 pt-12 sm:pb-24 sm:pt-20"
      >
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-cream/95 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-clay-light" />
            {site.hero.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-4xl font-serif text-[46px] font-medium leading-[1.02] tracking-tight sm:text-[76px] md:text-[92px]">
            <span className="italic">Trusted</span> by{" "}
            <Counter
              value={30000}
              suffix="+"
              className="text-clay-light"
              duration={1.6}
            />{" "}
            customers.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-cream/80 sm:text-[18px]">
            {site.hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              href={site.hero.ctaPrimary.href}
              size="lg"
              showArrow
              className="!bg-cream !text-charcoal hover:!bg-white"
            >
              {site.hero.ctaPrimary.label}
            </Button>
            <Button
              href={site.hero.ctaSecondary.href}
              size="lg"
              className="!bg-transparent !border !border-cream/30 !text-cream hover:!bg-cream/10"
            >
              {site.hero.ctaSecondary.label}
            </Button>
          </div>
        </Reveal>

        {/* Floating stat pills */}
        <Reveal delay={0.25}>
          <div className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-cream/15 bg-cream/[0.06] backdrop-blur-md sm:mt-20">
            {site.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col justify-center bg-charcoal/20 px-5 py-5 transition-colors hover:bg-charcoal/10 sm:px-7 sm:py-6"
              >
                <p className="font-serif text-[22px] font-medium leading-none text-cream sm:text-[28px]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-cream/65 sm:text-[12px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
      >
        <motion.div
          animate={shouldReduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-cream/50"
        >
          Scroll
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
