import Image from "next/image";
import Link from "next/link";
import { WaButton } from "@/components/wa-button";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { aed, peptideBySlug, PROTOCOL_AED, protocolBySlug, protocols } from "@/data/catalog";
import { Tile, toneStyle } from "@/components/tile";
import { Footer } from "@/components/footer";

type Props = { params: { slug: string } };

export const generateStaticParams = () => protocols.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: Props): Metadata {
  return { title: `${protocolBySlug(params.slug)?.name ?? "Protocol"} | Amino` };
}

export default function ProtocolPage({ params }: Props) {
  const p = protocolBySlug(params.slug);
  if (!p) notFound();
  const tone = toneStyle[p.tone];
  const items = p.peptides.map(peptideBySlug).flatMap((x) => (x ? [x] : []));

  return (
    <main className="pt-24">
      <div className="wrap">
        <section className={`relative flex min-h-[72svh] flex-col justify-end overflow-hidden rounded-tile p-6 sm:p-10 ${tone.ink}`} style={{ background: tone.bg }}>
          <Image src={`/images/protocols/${p.slug}.webp`} alt="" fill priority sizes="100vw" className="object-cover" />
          <h1 className="display relative text-[56px] sm:text-[112px] lg:text-[150px]">{p.name}</h1>
        </section>

        <section className="flex flex-wrap items-end justify-between gap-8 py-14">
          <p className="text-[26px] leading-tight tracking-[-0.02em] sm:text-[34px]">{p.line}</p>
          <div>
            <p className="display text-[44px] sm:text-[60px]">
              <span className="text-[20px] font-medium tracking-[-0.02em] text-navy-600">From </span>
              {aed(PROTOCOL_AED)}
              <span className="text-[20px] font-medium tracking-[-0.02em] text-navy-600">/month</span>
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 md:justify-end">
              <Link href={`/order?item=${p.slug}`} className="btn bg-navy-900 text-white">
                Order now
              </Link>
              <WaButton text={`Hi Amino, I'd like to order ${p.name}.`} />
            </div>
          </div>
        </section>

        <section className="grid gap-3 pb-20 md:grid-cols-2">
          {items.map((x, i) => (
            <Tile key={x.slug} href={`/peptides/${x.slug}`} title={x.name} tag={x.tag} tone={x.tone} seed={i} product={`/images/products/${x.slug}.webp`} />
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
}
