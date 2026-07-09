import { ArrowUpRight, BookOpen, ExternalLink, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion";
import { researchLibrary } from "@/data/research";

export function ProductResearch({
  slug,
  productName,
}: {
  slug: string;
  productName: string;
}) {
  const items = researchLibrary[slug];
  if (!items || items.length === 0) return null;

  return (
    <section
      id="research"
      className="scroll-mt-32 border-t border-charcoal/[0.06] bg-cream-deep/40 py-20 sm:py-24"
    >
      <div className="container-content">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow flex items-center gap-2">
                <BookOpen size={13} /> Research library
              </p>
              <h2 className="mt-3 font-serif text-[34px] font-medium leading-[1.08] sm:text-[44px]">
                Peer-reviewed{" "}
                <span className="italic text-sage-deep">
                  research directions.
                </span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-charcoal/60">
                A curated view of the research areas informing how Amino
                physicians think about {productName}. This is not medical
                advice; each patient case is designed from your own intake and
                blood panel.
              </p>
            </div>
            <a
              href="#callback"
              className="hidden items-center gap-1 text-[13.5px] font-medium text-charcoal/70 transition-colors hover:text-clay-deep sm:inline-flex"
            >
              Ask a physician about this
              <ArrowUpRight size={13} />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const CardEl = item.url ? "a" : "div";
            return (
              <Reveal key={item.topic + i} delay={i * 0.04}>
                <CardEl
                  {...(item.url
                    ? {
                        href: item.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="group flex h-full flex-col rounded-xl2 border border-charcoal/[0.06] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-sage-faint px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-sage-deep">
                      {item.year || "Research area"}
                    </span>
                    {item.url ? (
                      <ExternalLink
                        size={15}
                        className="text-charcoal/30 transition-all group-hover:text-charcoal"
                      />
                    ) : (
                      <Sparkles size={14} className="text-charcoal/25" />
                    )}
                  </div>
                  <h3 className="mt-5 font-serif text-[19px] font-medium leading-snug">
                    {item.topic}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-charcoal/65">
                    {item.summary}
                  </p>
                  {(item.authors || item.source) && (
                    <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-charcoal/[0.06] pt-4 text-[12px] text-charcoal/50">
                      {item.authors && (
                        <span className="font-medium text-charcoal/70">
                          {item.authors}
                        </span>
                      )}
                      {item.source && (
                        <span className="italic">{item.source}</span>
                      )}
                    </div>
                  )}
                </CardEl>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 max-w-3xl text-[12.5px] leading-relaxed text-charcoal/50">
            Research summaries reference broad research directions. Peptides
            listed on the Amino platform are prescribed off-label under the DHA
            framework by a licensed physician. Compounding is by a fully
            licensed UAE pharmacy regulated by MOH and EDE.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
