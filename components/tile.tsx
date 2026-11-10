import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { Tone } from "@/data/catalog";

const tones: Record<Tone, { bg: string; ink: string; tag: string }> = {
  navy: { bg: "linear-gradient(160deg,#12305A 0%,#051126 100%)", ink: "text-white", tag: "bg-white/15 text-white" },
  azure: { bg: "linear-gradient(160deg,#6FBDE8 0%,#1F5F9E 100%)", ink: "text-white", tag: "bg-white/20 text-white" },
  ice: { bg: "linear-gradient(170deg,#A9DFFB 0%,#E8F7FF 100%)", ink: "text-navy-900", tag: "bg-white/50 text-navy-900" },
  frost: { bg: "linear-gradient(170deg,#F1FAFF 0%,#B8E7FF 100%)", ink: "text-navy-900", tag: "bg-navy-900/10 text-navy-900" },
};

const layouts = [
  [{ s: 62, l: 48, t: 22 }, { s: 20, l: 30, t: 62 }, { s: 8, l: 88, t: 14 }],
  [{ s: 46, l: 6, t: 40 }, { s: 28, l: 62, t: 14 }, { s: 7, l: 52, t: 80 }],
  [{ s: 70, l: 20, t: 34 }, { s: 12, l: 80, t: 20 }],
  [{ s: 38, l: 54, t: 46 }, { s: 52, l: -8, t: 10 }, { s: 9, l: 40, t: 18 }],
];

/** Placeholder art: glass spheres, sized so real images can replace them. */
export function GlassArt({ seed = 0 }: { seed?: number }) {
  return (
    <div data-parallax aria-hidden className="absolute inset-0">
      {layouts[seed % layouts.length].map((o, i) => (
        <span
          key={i}
          className="absolute aspect-square rounded-full"
          style={{
            width: `${o.s}%`,
            left: `${o.l}%`,
            top: `${o.t}%`,
            background:
              "radial-gradient(circle at 34% 28%, rgba(255,255,255,.95) 0%, rgba(255,255,255,.28) 26%, rgba(134,214,255,.14) 62%, rgba(255,255,255,.5) 100%)",
            boxShadow: "inset -14px -18px 44px rgba(255,255,255,.3), inset 8px 10px 26px rgba(10,30,61,.1), 0 34px 70px -24px rgba(5,17,38,.4)",
          }}
        />
      ))}
    </div>
  );
}

export function Tile({
  href,
  title,
  tag,
  foot,
  tone,
  seed,
  image,
  product,
  rail,
  className,
}: {
  href: string;
  title: string;
  tag?: string;
  foot?: string;
  tone: Tone;
  seed: number;
  /** Full-bleed photograph. */
  image?: string;
  /** Transparent product cut-out that pops past the corner of the tile. */
  product?: string;
  /** Sized as a swipe card below 1024px. */
  rail?: boolean;
  className?: string;
}) {
  const t = tones[tone];
  return (
    <Link
      href={href}
      data-reveal
      className={clsx(
        "group relative block min-h-[400px] rounded-tile transition-transform duration-200 active:scale-[0.985] lg:min-h-[420px]",
        rail && "w-[76vw] max-w-[340px] shrink-0 snap-start lg:w-auto lg:max-w-none",
        t.ink,
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden rounded-tile" style={{ background: t.bg }}>
        {image ? (
          <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-105">
            <div data-parallax aria-hidden className="absolute -inset-y-[8%] inset-x-0">
              <Image src={image} alt="" fill sizes="(min-width: 1024px) 40vw, 76vw" className="object-cover" />
            </div>
          </div>
        ) : (
          !product && <GlassArt seed={seed} />
        )}
        {product && (
          <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(60% 55% at 62% 62%, rgba(255,255,255,.38), rgba(255,255,255,0) 72%)" }} />
        )}
        {image && t.ink === "text-white" && (
          <div aria-hidden className="absolute inset-x-0 top-0 h-2/5" style={{ background: "linear-gradient(180deg, rgba(5,17,38,.5), rgba(5,17,38,0))" }} />
        )}
      </div>

      {product && (
        <div data-pop-tile aria-hidden className="pop-focus pointer-events-none absolute bottom-[-7%] right-[-3%] top-[33%] z-10 w-[86%] origin-bottom-right will-change-transform">
          <div data-tilt className="relative h-full w-full will-change-transform">
            <Image src={product} alt="" fill sizes="(min-width: 1024px) 34vw, 66vw" className="object-contain object-[right_bottom] drop-shadow-[0_26px_30px_rgba(5,17,38,0.4)]" />
          </div>
        </div>
      )}

      <div className={clsx("relative z-20 p-6 sm:p-8", product && "max-w-[66%]")}>
        <h3 className={clsx("text-[28px] font-semibold leading-[1.05] tracking-[-0.04em] lg:text-[32px]", product && "whitespace-nowrap")}>{title}</h3>
        {tag && <span className={clsx("tag mt-3 inline-block whitespace-nowrap", t.tag)}>{tag}</span>}
        {foot && <p className="mt-3 text-[15px] font-medium opacity-90">{foot}</p>}
      </div>
    </Link>
  );
}

export const toneStyle = tones;
