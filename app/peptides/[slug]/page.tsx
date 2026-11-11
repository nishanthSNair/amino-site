import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { aed, hasPen, peptideBySlug, peptides, PRICE_AED } from "@/data/catalog";
import { PEN_VIDEO } from "@/data/videos";
import { YouTubeTile } from "@/components/youtube-tile";
import { researchLibrary } from "@/data/research";
import { toneStyle } from "@/components/tile";
import { Footer } from "@/components/footer";

type Props = { params: { slug: string } };

export const generateStaticParams = () => peptides.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: Props): Metadata {
  return { title: `${peptideBySlug(params.slug)?.name ?? "Peptide"} | Amino` };
}

export default function PeptidePage({ params }: Props) {
  const p = peptideBySlug(params.slug);
  if (!p) notFound();
  const tone = toneStyle[p.tone];
  const research = researchLibrary[p.slug] ?? [];

  return (
    <main className="pt-24">
      <div className="wrap">
        <section className="relative mt-16 h-[58svh] min-h-[380px] rounded-tile sm:mt-24 sm:h-[68svh]">
          <div className="absolute inset-0 overflow-hidden rounded-tile" style={{ background: tone.bg }}>
            <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(50% 60% at 50% 55%, rgba(255,255,255,.4), rgba(255,255,255,0) 72%)" }} />
          </div>
          <div data-pop className="absolute inset-x-0 -top-20 bottom-[-4%] z-10 will-change-transform sm:-top-28">
            <Image src={`/images/products/${p.slug}.webp`} alt={`Amino ${p.name}`} fill priority sizes="100vw" className="object-contain drop-shadow-[0_30px_34px_rgba(5,17,38,0.4)]" />
          </div>
          <span className={`tag absolute left-6 top-6 z-20 sm:left-8 sm:top-8 ${tone.tag}`}>{p.tag}</span>
        </section>

        <section className="grid gap-8 py-14 md:grid-cols-2 md:items-end">
          <div>
            <h1 className="display text-[64px] sm:text-[104px] lg:text-[128px]">{p.name}</h1>
            <p className="mt-5 text-[22px] leading-tight tracking-[-0.02em] sm:text-[28px]">{p.line}</p>
            {p.fullName && <p className="mt-4 font-mono text-[13px] text-navy-600">{p.fullName}</p>}
            {p.route && <p className="mt-1 font-mono text-[13px] text-navy-600">{p.route}</p>}
          </div>
          <div className="md:text-right">
            <p className="display text-[44px] sm:text-[60px]">
              {aed(PRICE_AED)}
              <span className="text-[20px] font-medium tracking-[-0.02em] text-navy-600">/month</span>
            </p>
            <Link href={`/order?item=${p.slug}`} className="btn mt-5 bg-navy-900 text-white">
              Order now
            </Link>
          </div>
        </section>

        {hasPen(p.slug) && (
          <section className="grid gap-8 border-t border-navy-900/10 py-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
            <YouTubeTile {...PEN_VIDEO} full />
            <div className="order-first lg:order-none">
              <h2 className="display text-[44px] sm:text-[64px]">How to use your pen.</h2>
              <p className="mt-4 max-w-[38ch] text-lg text-navy-600">A short guide from the Valeo Health clinical team. Your {p.name} comes in its own capped pen.</p>
              <Link href="/consult" className="btn mt-7 border border-navy-900/15 text-navy-900 hover:bg-ice-50">
                Questions? Book a free call
              </Link>
            </div>
          </section>
        )}

        {research.length > 0 && (
          <section className="grid gap-3 pb-20 md:grid-cols-3">
            {research.map((r) => (
              <article key={r.topic} className="rounded-3xl bg-ice-50 p-7">
                <h2 className="text-xl font-semibold tracking-[-0.02em]">{r.topic}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-600">{r.summary}</p>
              </article>
            ))}
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}
