import { compliance } from "@/data/compliance";

export function Footer() {
  return (
    <footer className="wrap pb-32 pt-16">
      <p className="max-w-3xl text-[13px] leading-relaxed text-navy-600">{compliance}</p>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[22px] font-semibold tracking-[-0.04em]">Amino</p>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-navy-600">Powered by</span>
          <span className="rounded-2xl bg-navy-900 p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/valeo-health.svg" alt="Valeo Health" className="h-12 w-auto" />
          </span>
        </div>
      </div>
    </footer>
  );
}
