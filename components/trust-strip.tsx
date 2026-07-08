import { Marquee } from "@/components/motion";
import { site } from "@/data/site";

export function TrustStrip() {
  const items = [
    ...site.trustStrip,
    "Blood-panel-first",
    "48-hour physician review",
    "Fresh-compounded",
    "Separate-pen protocols",
  ];

  return (
    <section
      aria-label="Amino credentials"
      className="relative border-y border-charcoal/[0.06] bg-cream-deep/50 py-6"
    >
      <Marquee speed={45}>
        {items.map((item) => (
          <span
            key={item}
            className="flex items-center gap-6 font-serif text-[19px] text-charcoal/50 sm:text-[22px]"
          >
            {item}
            <span aria-hidden className="text-clay/60">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
