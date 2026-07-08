import clsx from "clsx";
import {
  ClipboardList,
  Compass,
  Droplet,
  Package,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { site } from "@/data/site";

const stepIcons = [Compass, ClipboardList, Droplet, Stethoscope, Package];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionHeading
                eyebrow={site.howItWorks.eyebrow}
                title={site.howItWorks.title}
                intro="Every Amino patient goes through the same clinical pathway. Two of the steps are ours alone."
              />
            </Reveal>
          </div>

          <ol className="flex flex-col gap-4">
            {site.howItWorks.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <Reveal key={step.n} delay={i * 0.05} as="li">
                  <div
                    className={clsx(
                      "group relative rounded-xl2 border p-7 transition-all duration-300",
                      step.highlight
                        ? "border-sage-deep/15 bg-sage-faint shadow-soft hover:-translate-y-1 hover:shadow-lift"
                        : "border-charcoal/[0.07] bg-white/80 hover:-translate-y-1 hover:shadow-soft"
                    )}
                  >
                    {step.highlight && step.badge && (
                      <span className="absolute -top-2.5 right-6 inline-flex items-center gap-1 rounded-full bg-sage-deep px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream">
                        <Sparkles size={10} /> {step.badge}
                      </span>
                    )}
                    <div className="flex items-start gap-5">
                      <div
                        className={clsx(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                          step.highlight
                            ? "bg-sage-deep text-cream"
                            : "bg-cream-deep text-charcoal/70"
                        )}
                      >
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-3">
                          <span
                            className={clsx(
                              "font-serif text-sm",
                              step.highlight
                                ? "text-sage-deep"
                                : "text-charcoal/45"
                            )}
                          >
                            {step.n}
                          </span>
                          <h3 className="font-serif text-[22px] font-medium leading-snug">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-2 text-[15px] leading-relaxed text-charcoal/70">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <Reveal>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-full border border-charcoal/[0.06] bg-white/70 px-6 py-4">
            {site.trustStrip.map((item, i) => (
              <span
                key={item}
                className="flex items-center gap-3 text-[13px] font-medium text-charcoal/60"
              >
                {i > 0 && (
                  <span className="hidden h-1 w-1 rounded-full bg-charcoal/25 sm:block" />
                )}
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
