import Image from "next/image";
import Link from "next/link";
import { physicians } from "@/data/people";

/** "Not sure where to start?" block: free doctor consultation, with the real doctors. */
export function ConsultCta() {
  return (
    <section className="wrap pb-16 lg:pb-24">
      <div data-reveal className="grid overflow-hidden rounded-tile bg-navy-950 text-white lg:min-h-[600px] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="relative flex flex-col justify-between gap-12 p-7 sm:p-10 lg:p-12">
          <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(90% 70% at 10% 100%, rgba(79,195,255,.22), rgba(79,195,255,0) 60%), linear-gradient(160deg,#3A5680 0%,#1B2C48 100%)" }} />
          <div className="relative">
            <p className="display text-[34px] text-ice-200/70 sm:text-[44px] lg:text-[52px]">Not sure where to start?</p>
            <h2 className="display mt-2 text-[34px] sm:text-[44px] lg:text-[52px]">Talk to a doctor first.</h2>
          </div>
          <div className="relative">
            <p className="max-w-[40ch] text-[17px] leading-relaxed text-ice-100/90">
              A short video call with one of our licensed physicians. They look at your goals and recent bloodwork, then recommend a protocol, or none at all.
            </p>
            <p className="mt-10 flex items-baseline gap-3">
              <span className="display text-[56px] lg:text-[64px]">Free</span>
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-ice-200">Doctor consultation</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/consult" className="btn bg-white text-navy-900">
                Book a free call
              </Link>
              <Link href="/#how-it-works" className="btn border border-white/30 text-white hover:bg-white/10">
                How it works
              </Link>
            </div>
          </div>
        </div>

        <div className="order-first grid h-[320px] grid-cols-3 gap-[2px] sm:h-[420px] lg:order-none lg:h-auto">
          {physicians.map((d) => (
            <figure key={d.name} className="group relative overflow-hidden bg-navy-800">
              {d.image && (
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(min-width: 1024px) 20vw, 33vw"
                  className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              )}
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(0deg, rgba(5,17,38,.85), rgba(5,17,38,0))" }} />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                <span className="block text-[13px] font-semibold leading-tight sm:text-[17px]">{d.name}</span>
                <span className="mt-1 hidden text-[13px] leading-snug text-ice-200 sm:line-clamp-2">{d.credential}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
