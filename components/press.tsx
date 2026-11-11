import { featuredPress, press } from "@/data/press";
import { Rail } from "@/components/rail";

export function Press() {
  return (
    <section id="press" className="wrap scroll-mt-24 pb-16 lg:pb-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 data-split className="display text-[52px] sm:text-[80px] lg:text-[112px]">
          Valeo in the press.
        </h2>
        <p className="text-[15px] text-navy-600">Amino is powered by Valeo Health.</p>
      </div>
      <div className="mt-8 grid gap-3 lg:grid-cols-2 lg:gap-4">
        {featuredPress.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="group relative flex flex-col justify-between gap-10 overflow-hidden rounded-tile p-7 text-white sm:p-10"
            style={{ background: "linear-gradient(160deg,#3A5680 0%,#1B2C48 100%)" }}
          >
            <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ice-200">
              <span className="font-medium text-white">{p.outlet}</span>
              {p.date && <span>{p.date}</span>}
            </div>
            <blockquote className="text-[22px] font-medium leading-snug tracking-[-0.02em] sm:text-[28px]">
              <span aria-hidden className="mr-1 text-ice-300">“</span>
              {p.quote}
              <span aria-hidden className="ml-1 text-ice-300">”</span>
            </blockquote>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[16px] font-semibold">{p.who}</p>
                <p className="text-[14px] text-ice-200">{p.role}</p>
              </div>
              <span className="text-[14px] font-medium text-ice-100 transition-transform duration-300 group-hover:translate-x-1">Read in {p.outlet} ↗</span>
            </div>
          </a>
        ))}
      </div>
      <Rail className="mt-4 lg:grid lg:grid-cols-5 lg:gap-4">
        {press.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="group flex min-h-[250px] w-[72vw] max-w-[300px] shrink-0 snap-start flex-col justify-between rounded-[26px] bg-ice-50 p-6 ring-1 ring-navy-900/5 transition-colors duration-300 hover:bg-ice-100 lg:w-auto lg:max-w-none"
          >
            <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-navy-600">
              <span className="font-medium text-navy-900">{p.outlet}</span>
              {p.date && <span>{p.date}</span>}
            </div>
            <p className="mt-6 text-[18px] font-medium leading-snug tracking-[-0.01em]">{p.headline}</p>
            <span className="mt-6 text-[14px] font-medium text-navy-600 transition-transform duration-300 group-hover:translate-x-1">Read article ↗</span>
          </a>
        ))}
      </Rail>
    </section>
  );
}
