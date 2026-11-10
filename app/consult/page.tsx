import Image from "next/image";
import type { Metadata } from "next";
import { physicians } from "@/data/people";
import { ConsultForm } from "@/components/consult-form";
import { Footer } from "@/components/footer";

export const metadata: Metadata = { title: "Free doctor consultation | Amino" };

export default function ConsultPage() {
  return (
    <main className="pt-28">
      <div className="wrap grid gap-12 pb-24 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-navy-600">Free · Video call</p>
          <h1 className="display mt-3 text-[52px] sm:text-[88px]">Talk to a doctor.</h1>
          <p className="mt-5 max-w-[46ch] text-lg text-navy-600">No cost and no obligation. Your doctor recommends a protocol, or none at all.</p>
          <div className="mt-12">
            <ConsultForm />
          </div>
        </div>
        <aside className="grid h-[360px] grid-cols-3 gap-[2px] overflow-hidden rounded-tile lg:sticky lg:top-28 lg:h-[560px] lg:grid-cols-1 lg:grid-rows-3">
          {physicians.map((d) => (
            <figure key={d.name} className="relative overflow-hidden bg-navy-800 text-white">
              {d.image && <Image src={d.image} alt={d.name} fill sizes="(min-width: 1024px) 440px, 33vw" className="object-cover object-top" />}
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3" style={{ background: "linear-gradient(0deg, rgba(5,17,38,.85), rgba(5,17,38,0))" }} />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-[13px] font-semibold sm:p-4 sm:text-[15px]">{d.name}</figcaption>
            </figure>
          ))}
        </aside>
      </div>
      <Footer />
    </main>
  );
}
