import Link from "next/link";
import { HERO_GRADIENT } from "@/data/hero";

const preview = ["Recovering from an injury", "Ageing well, more energy", "Sharper focus"];

/** Homepage entry to the 30-second protocol match. */
export function MatchTeaser() {
  return (
    <section className="wrap pb-16 lg:pb-24">
      <Link
        href="/match"
        data-reveal
        className="group relative grid items-center gap-8 overflow-hidden rounded-tile p-7 text-white sm:p-10 md:grid-cols-[1fr_minmax(0,380px)] lg:p-14"
        style={{ background: HERO_GRADIENT }}
      >
        <div>
          <p className="font-mono text-[12px] text-ice-200">4 taps · 30 seconds</p>
          <h2 className="display mt-3 text-[44px] leading-[0.95] sm:text-[64px] lg:text-[80px]">Find your match.</h2>
          <p className="mt-3 max-w-[30ch] text-[17px] text-ice-100">A suggested protocol in four taps. Your doctor confirms.</p>
          <span className="btn mt-7 bg-white text-navy-900 group-hover:scale-[1.04]">Start</span>
        </div>
        <div aria-hidden className="relative hidden h-[300px] md:block">
          <div className="absolute inset-x-6 top-0 flex gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={`h-[3px] flex-1 rounded-full ${i < 1 ? "bg-white" : "bg-white/25"}`} />
            ))}
          </div>
          <p className="absolute inset-x-6 top-8 text-[26px] font-semibold leading-tight tracking-[-0.03em]">What matters most right now?</p>
          <div className="absolute inset-x-6 bottom-0 grid gap-2.5">
            {preview.map((label, i) => (
              <span
                key={label}
                className={`rounded-[18px] px-5 py-3.5 text-[16px] font-medium transition-transform duration-500 ease-out group-hover:-translate-y-1 ${
                  i === 0 ? "bg-white text-navy-900" : "bg-white/10 ring-1 ring-white/15"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </section>
  );
}
