import Image from "next/image";
import Link from "next/link";
import { aed, peptides, PRICE_AED, PROTOCOL_AED, protocols } from "@/data/catalog";
import { physicians } from "@/data/people";
import { HeroScene } from "@/components/hero-scene";
import { Tile } from "@/components/tile";
import { Rail } from "@/components/rail";
import { Steps } from "@/components/steps";
import { Plans } from "@/components/plans";
import { FilmSection } from "@/components/film-section";
import { ConsultCta } from "@/components/consult-cta";
import { MatchTeaser } from "@/components/match-teaser";
import { Press } from "@/components/press";
import { Footer } from "@/components/footer";

const heading = "display text-[52px] sm:text-[80px] lg:text-[112px]";
const peptideSpans = ["lg:col-span-6", "lg:col-span-3", "lg:col-span-3", "lg:col-span-3", "lg:col-span-3", "lg:col-span-6", "lg:col-span-3", "lg:col-span-3", "lg:col-span-3", "lg:col-span-3"];

const trust = [
  ["Physician", "reviewed, every order"],
  ["Blood panel", "before any prescription"],
  ["Licensed UAE", "compounding pharmacy"],
  ["Compounded fresh,", "45-day shelf life"],
  ["Cold-chain", "to your door"],
  ["Ongoing support", "at every step"],
];

export default function Home() {
  return (
    <main>
      <HeroScene />

      <section id="peptides" className="wrap relative z-10 scroll-mt-24 pt-14 motion-safe:-mt-[50svh] lg:pt-20">
        <h2 data-split className={heading}>
          Ten peptides.
        </h2>
        <Rail className="mt-7 lg:grid lg:grid-cols-12 lg:gap-x-4 lg:gap-y-9">
          {peptides.map((p, i) => (
            <Tile
              key={p.slug}
              rail
              href={`/peptides/${p.slug}`}
              title={p.name}
              tag={p.tag}
              foot={`${aed(PRICE_AED)}/month`}
              tone={p.tone}
              seed={i}
              product={`/images/products/${p.slug}.webp`}
              className={peptideSpans[i]}
            />
          ))}
        </Rail>
      </section>

      <Steps />

      <section id="protocols" className="wrap scroll-mt-24 pb-16 lg:pb-24">
        <h2 data-split className={heading}>
          Protocols.
        </h2>
        <Rail className="mt-7 lg:gap-3">
          {protocols.map((p, i) => (
            <Tile
              key={p.slug}
              rail
              href={`/protocols/${p.slug}`}
              title={p.name}
              foot={`From ${aed(PROTOCOL_AED)}/month`}
              tone={p.tone}
              seed={i + 2}
              image={`/images/protocols/${p.slug}.webp`}
              className="lg:min-h-[460px] lg:min-w-0 lg:flex-1 lg:transition-[flex-grow] lg:duration-700 lg:ease-[cubic-bezier(.22,1,.36,1)] lg:hover:flex-[2.1]"
            />
          ))}
        </Rail>
      </section>

      <MatchTeaser />

      <ConsultCta />

      <Plans />

      <section className="wrap py-16 lg:py-24">
        <h2 data-split className={heading}>
          Built right.
        </h2>
        <Rail className="mt-7 lg:grid lg:grid-cols-6 lg:gap-4">
          {trust.map(([strong, rest], i) => (
            <div key={strong} data-reveal className="w-[56vw] max-w-[240px] shrink-0 snap-start lg:w-auto lg:max-w-none">
              <div className="relative aspect-square overflow-hidden rounded-[26px] bg-ice-100">
                <Image src={`/images/trust/${i + 1}.webp`} alt="" fill sizes="240px" className="object-cover" />
              </div>
              <p className="mt-4 text-center text-[16px] leading-snug tracking-[-0.01em]">
                <strong className="font-semibold">{strong}</strong>
                <br />
                <span className="text-navy-600">{rest}</span>
              </p>
            </div>
          ))}
        </Rail>
      </section>

      <section className="wrap pb-16 lg:pb-24">
        <h2 data-split className={heading}>
          Our doctors.
        </h2>
        <Rail className="mt-7 lg:grid lg:grid-cols-3 lg:gap-4">
          {physicians.map((d) => (
            <article key={d.name} data-reveal className="flex h-[470px] w-[76vw] max-w-[340px] shrink-0 snap-start flex-col overflow-hidden rounded-tile bg-ice-100 lg:h-[520px] lg:w-auto lg:max-w-none">
              <div className="p-7">
                <h3 className="text-[28px] font-semibold leading-[1.05] tracking-[-0.04em]">{d.name}</h3>
                <p className="mt-2 text-[15px] font-medium text-navy-600">{d.credential}</p>
              </div>
              <div className="relative min-h-0 flex-1">
                {d.image && <Image src={d.image} alt={d.name} fill sizes="(min-width: 1024px) 33vw, 76vw" className="object-cover object-top" />}
              </div>
            </article>
          ))}
        </Rail>
      </section>

      <FilmSection />

      <Press />

      <section className="wrap text-center">
        <h2 data-split className={heading}>
          Start today.
        </h2>
        <Link href="/order" className="btn mt-8 bg-navy-900 text-white">
          Order now · {aed(PRICE_AED)}/month
        </Link>
      </section>

      <Footer />
    </main>
  );
}
