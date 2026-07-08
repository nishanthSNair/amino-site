import { BadgeCheck, ShieldCheck, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { site } from "@/data/site";

const badgeIcons = [ShieldCheck, BadgeCheck, Stethoscope];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* soft ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-clay/25 blur-3xl animate-floatSlow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[480px] w-[480px] rounded-full bg-sage/25 blur-3xl animate-floatSlow"
        style={{ animationDelay: "-4s" }}
      />

      <div className="container-content relative">
        <Reveal>
          <p className="eyebrow mb-6 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
            {site.hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="max-w-4xl font-serif text-[44px] font-medium leading-[1.03] sm:text-[68px] md:text-[80px]">
            Peptide therapy,{" "}
            <span className="italic text-sage-deep">advised</span>{" "}
            <span className="italic text-clay-deep">by doctors.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-charcoal/70 sm:text-lg">
            {site.hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={site.hero.ctaPrimary.href} size="lg" showArrow>
              {site.hero.ctaPrimary.label}
            </Button>
            <Button href={site.hero.ctaSecondary.href} size="lg" variant="outline">
              {site.hero.ctaSecondary.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3">
            {site.hero.trustBadges.map((badge, i) => {
              const Icon = badgeIcons[i % badgeIcons.length];
              return (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-[13px] font-medium text-charcoal/60"
                >
                  <Icon size={15} className="text-sage-deep" />
                  {badge}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
