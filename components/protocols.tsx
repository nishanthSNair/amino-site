import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Badge, SectionHeading } from "@/components/ui";
import { protocols } from "@/data/protocols";

export function Protocols() {
  return (
    <section id="protocols" className="relative py-24 sm:py-32">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="Physician-designed protocols"
            title={
              <>
                Protocols, not{" "}
                <span className="italic text-clay-deep">checkouts.</span>
              </>
            }
            intro="Six starting points. Your protocol is designed — or redesigned — by a licensed physician after your intake and blood panel."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {protocols.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link
                href={`/protocols/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-charcoal/[0.06] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                {/* Protocol image */}
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-cream-deep">
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={clsx(
                        "absolute inset-0",
                        p.accent === "clay"
                          ? "bg-gradient-to-br from-clay-soft to-clay/40"
                          : "bg-gradient-to-br from-sage-faint to-sage/40"
                      )}
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/50 to-transparent" />
                  <div
                    className={clsx(
                      "absolute left-4 top-4 h-1.5 w-12 rounded-full",
                      p.accent === "clay" ? "bg-clay" : "bg-sage"
                    )}
                  />
                  <ArrowUpRight
                    size={18}
                    className="absolute right-4 top-4 text-cream/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream"
                  />
                  <p className="absolute bottom-4 left-4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-cream/90">
                    {p.category}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-[26px] font-medium leading-tight">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal/65">
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

                  <div className="mt-auto pt-7">
                    <div className="hairline pt-5">
                      <p className="text-[13px] leading-relaxed text-charcoal/55">
                        <span className="font-medium text-charcoal/70">
                          Who it&apos;s for:
                        </span>{" "}
                        {p.whoFor}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <Badge tone="sage">
                          <BadgeCheck size={12} />
                          Physician-designed
                        </Badge>
                        <span className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-clay-deep transition-opacity group-hover:opacity-100 sm:opacity-70">
                          Take the intake →
                        </span>
                      </div>
                    </div>
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
