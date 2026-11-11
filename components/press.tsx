import { press } from "@/data/press";
import { Rail } from "@/components/rail";

export function Press() {
  return (
    <section className="wrap pb-16 lg:pb-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 data-split className="display text-[52px] sm:text-[80px] lg:text-[112px]">
          Valeo in the press.
        </h2>
        <p className="text-[15px] text-navy-600">Amino is powered by Valeo Health.</p>
      </div>
      <Rail className="mt-8 lg:grid lg:grid-cols-5 lg:gap-4">
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
