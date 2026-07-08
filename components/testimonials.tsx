import clsx from "clsx";
import { Star, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { testimonials } from "@/data/people";
import { site } from "@/data/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title={
              <>
                Patients who wanted{" "}
                <span className="italic text-clay-deep">a clinic, not a checkout.</span>
              </>
            }
            intro="A snapshot of what patients say about the physician-led, blood-panel-first experience."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + t.goal} delay={i * 0.04}>
              <div
                className={clsx(
                  "relative h-full rounded-xl2 border p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
                  t.highlight
                    ? "border-sage-deep/20 bg-sage-faint"
                    : "border-charcoal/[0.06] bg-white"
                )}
              >
                {t.highlight && (
                  <span className="absolute -top-2.5 left-6 inline-flex items-center gap-1 rounded-full bg-sage-deep px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream">
                    <Sparkles size={10} /> The Amino difference
                  </span>
                )}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star
                      key={si}
                      size={13}
                      className="fill-clay text-clay"
                    />
                  ))}
                </div>
                <p className="mt-5 font-serif text-[19px] leading-snug text-charcoal">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-[13px] font-medium text-charcoal/55">
                  {t.name} · {t.goal}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <div className="bg-sage-deep">
          <div className="container-content py-16 sm:py-20">
            <Reveal>
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
                {site.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-[42px] font-medium leading-none text-cream sm:text-[56px]">
                      {s.value}
                    </p>
                    <p className="mt-3 text-[13px] font-medium uppercase tracking-[0.14em] text-cream/70">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
