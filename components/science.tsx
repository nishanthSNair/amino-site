import {
  Beaker,
  Droplet,
  Snowflake,
  Stethoscope,
  Timer,
  ShieldAlert,
} from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { physicians } from "@/data/people";

const pillars = [
  {
    icon: Droplet,
    title: "Blood panels, first.",
    body: "Every case starts with a longevity-grade panel — hormones, inflammation, metabolic and micronutrient markers — read by a physician before anything is prescribed.",
  },
  {
    icon: Stethoscope,
    title: "Physician review, every case.",
    body: "A licensed physician reviews your intake and labs and either designs, redesigns, or declines your protocol — in writing.",
  },
  {
    icon: Beaker,
    title: "Separate-pen compounding.",
    body: "Every peptide is compounded in its own pen. Better dosing accuracy, cleaner titration, and no forced-stack economics.",
  },
  {
    icon: Timer,
    title: "45-day fresh compounding.",
    body: "Peptides are compounded to order with a 45-day shelf life. No back-of-shelf inventory, no shortcut on potency.",
  },
  {
    icon: Snowflake,
    title: "Cold-chain delivery.",
    body: "Temperature-monitored shipping across the UAE and the wider GCC. Traceable from pharmacy to your door.",
  },
];

export function Science() {
  return (
    <section id="science" className="relative py-24 sm:py-32">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="Our clinical approach"
            title={
              <>
                Built like a clinic,{" "}
                <span className="italic text-sage-deep">not a supplement shop.</span>
              </>
            }
            intro="Five non-negotiables that separate a physician-led peptide platform from a checkout quiz."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <div className="h-full rounded-xl2 border border-charcoal/[0.06] bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-faint text-sage-deep">
                  <p.icon size={18} />
                </div>
                <h3 className="mt-6 font-serif text-[22px] font-medium leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal/65">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24">
            <p className="eyebrow mb-4">Meet the physicians</p>
            <h3 className="max-w-2xl font-serif text-[30px] font-medium leading-tight sm:text-[36px]">
              The doctors behind every Amino protocol.
            </h3>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {physicians.map((doc, i) => (
            <Reveal key={doc.name} delay={i * 0.05}>
              <div className="h-full rounded-xl2 border border-charcoal/[0.06] bg-white p-7 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-clay-soft font-serif text-lg font-medium text-clay-deep">
                    {doc.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-serif text-[18px] font-medium leading-tight">
                      {doc.name}
                    </p>
                    <p className="text-[12.5px] font-medium text-sage-deep">
                      {doc.credential}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[14.5px] leading-relaxed text-charcoal/65">
                  {doc.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex items-start gap-4 rounded-xl2 border border-charcoal/[0.08] bg-white/70 p-6">
            <ShieldAlert size={20} className="mt-0.5 shrink-0 text-clay-deep" />
            <div>
              <p className="font-medium text-charcoal">Safety & eligibility</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-charcoal/65">
                Amino serves adults 18+ following medical review. Peptides are
                not appropriate during pregnancy or breastfeeding. Your
                physician may decline your case at any point. Off-label
                prescribing is conducted under the DHA framework.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
