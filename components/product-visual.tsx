import clsx from "clsx";
import type { Product } from "@/data/products";

export function ProductVisual({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const accent = product.category === "Cognitive" ? "sage" : "clay";
  const liquidColor = accent === "clay" ? "#B5886A" : "#8A9A7B";
  const liquidTop = accent === "clay" ? "#D9BFA8" : "#B7C4A6";
  const hasImage = Boolean(product.image);

  return (
    <div
      className={clsx(
        "relative aspect-[4/5] w-full overflow-hidden rounded-xl2 bg-cream-deep",
        className
      )}
    >
      {/* soft ambient orbs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-clay/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sage/15 blur-3xl" />

      {/* Grain */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06] mix-blend-multiply"
        aria-hidden
      >
        <filter id={`grain-${product.slug}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${product.slug})`} />
      </svg>

      {/* Editorial marks */}
      <div className="absolute inset-0 p-8 sm:p-10">
        <div className="flex items-baseline justify-between font-serif text-[13px] tracking-tight text-charcoal/50">
          <span>Amino<span className="text-clay">.</span></span>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em]">
            {product.category}
          </span>
        </div>
      </div>

      <div className="absolute inset-x-8 bottom-8 sm:inset-x-10 sm:bottom-10">
        <div className="flex items-end justify-between gap-4 font-serif text-[13px] tracking-tight text-charcoal/50">
          <span className="max-w-[60%] leading-tight">
            {product.peptideSequence}
          </span>
          {product.molWeight && (
            <span className="tabular-nums">{product.molWeight}</span>
          )}
        </div>
      </div>

      {hasImage ? (
        // Real product photograph
        <div className="absolute inset-0 flex items-center justify-center px-6 py-16 sm:px-8 sm:py-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-auto max-w-full object-contain drop-shadow-[0_18px_36px_rgba(42,42,40,0.18)] transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        // Fallback: illustrated vial
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 220 320"
            className="h-[68%] w-auto drop-shadow-[0_14px_32px_rgba(42,42,40,0.14)]"
            aria-hidden
          >
            <defs>
              <linearGradient id={`glass-${product.slug}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.75" />
                <stop offset="0.35" stopColor="#ffffff" stopOpacity="0.15" />
                <stop offset="0.7" stopColor="#ffffff" stopOpacity="0.05" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient
                id={`liquid-${product.slug}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0" stopColor={liquidTop} />
                <stop offset="1" stopColor={liquidColor} />
              </linearGradient>
            </defs>
            <rect x="85" y="14" width="50" height="30" rx="6" fill="#3E4A34" />
            <rect x="82" y="44" width="56" height="10" rx="2" fill="#2f3a26" />
            <path
              d="M60 74 Q60 60 78 60 L142 60 Q160 60 160 74 L160 298 Q160 306 152 306 L68 306 Q60 306 60 298 Z"
              fill="#EFE8DA"
              stroke="rgba(42,42,40,0.12)"
              strokeWidth="1.4"
            />
            <path
              d="M68 138 L152 138 L152 298 Q152 302 148 302 L72 302 Q68 302 68 298 Z"
              fill={`url(#liquid-${product.slug})`}
              opacity="0.92"
            />
            <path
              d="M60 74 Q60 60 78 60 L142 60 Q160 60 160 74 L160 298 Q160 306 152 306 L68 306 Q60 306 60 298 Z"
              fill={`url(#glass-${product.slug})`}
            />
            <rect
              x="72"
              y="172"
              width="76"
              height="98"
              rx="4"
              fill="#FAF7F2"
              opacity="0.94"
            />
            <text
              x="110"
              y="200"
              textAnchor="middle"
              fontFamily="var(--font-fraunces), serif"
              fontSize="10"
              letterSpacing="1.6"
              fill="#4F5C42"
            >
              AMINO
            </text>
            <line x1="82" y1="208" x2="138" y2="208" stroke="rgba(42,42,40,0.15)" />
            <text
              x="110"
              y="234"
              textAnchor="middle"
              fontFamily="var(--font-fraunces), serif"
              fontSize="16"
              fontWeight="500"
              fill="#2A2A28"
            >
              {product.name}
            </text>
            <text
              x="110"
              y="252"
              textAnchor="middle"
              fontFamily="var(--font-inter), sans-serif"
              fontSize="7.4"
              letterSpacing="1.2"
              fill="rgba(42,42,40,0.55)"
            >
              Rx · PHYSICIAN-REVIEWED
            </text>
            <text
              x="110"
              y="264"
              textAnchor="middle"
              fontFamily="var(--font-inter), sans-serif"
              fontSize="6.4"
              letterSpacing="1.2"
              fill="rgba(42,42,40,0.4)"
            >
              COMPOUNDED · UAE
            </text>
          </svg>
        </div>
      )}

      {/* Molecular decoration */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 text-charcoal/[0.10]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        <circle cx="20" cy="80" r="3" fill="currentColor" />
        <circle cx="40" cy="60" r="3" fill="currentColor" />
        <circle cx="60" cy="72" r="3" fill="currentColor" />
        <circle cx="30" cy="40" r="3" fill="currentColor" />
        <circle cx="70" cy="48" r="3" fill="currentColor" />
        <circle cx="55" cy="30" r="3" fill="currentColor" />
        <line x1="20" y1="80" x2="40" y2="60" />
        <line x1="40" y1="60" x2="60" y2="72" />
        <line x1="40" y1="60" x2="30" y2="40" />
        <line x1="30" y1="40" x2="55" y2="30" />
        <line x1="55" y1="30" x2="70" y2="48" />
        <line x1="70" y1="48" x2="60" y2="72" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-4 -right-4 h-32 w-32 text-charcoal/[0.08]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        <circle cx="30" cy="30" r="2.5" fill="currentColor" />
        <circle cx="50" cy="20" r="2.5" fill="currentColor" />
        <circle cx="70" cy="30" r="2.5" fill="currentColor" />
        <circle cx="80" cy="55" r="2.5" fill="currentColor" />
        <circle cx="60" cy="60" r="2.5" fill="currentColor" />
        <line x1="30" y1="30" x2="50" y2="20" />
        <line x1="50" y1="20" x2="70" y2="30" />
        <line x1="70" y1="30" x2="80" y2="55" />
        <line x1="80" y1="55" x2="60" y2="60" />
      </svg>
    </div>
  );
}
