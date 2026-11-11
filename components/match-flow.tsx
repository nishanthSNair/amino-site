"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { aed, PROTOCOL_AED, protocolBySlug } from "@/data/catalog";
import { matchQuestions, matchResult } from "@/data/match";
import { waLink } from "@/data/contact";
import { HERO_GRADIENT } from "@/data/hero";
import { WaIcon } from "@/components/wa-icon";

const steps = matchQuestions.length;

/** Story-style match: one question per card, one tap each, swipe right to go back. */
export function MatchFlow() {
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<number[]>([]);
  const [pending, setPending] = useState<number | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const done = step >= steps;
  const result = done ? matchResult(picks) : null;
  const main = result ? protocolBySlug(result.main) : undefined;
  const also = result?.also ? protocolBySlug(result.also) : undefined;

  const pick = (q: number, i: number) => {
    if (pending !== null) return;
    setPending(i);
    setPicks((p) => [...p.slice(0, q), i]);
    window.setTimeout(() => {
      setStep(q + 1);
      setPending(null);
    }, 260);
  };
  const back = () => setStep((s) => Math.max(0, s - 1));
  const restart = () => {
    setPicks([]);
    setStep(0);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col overflow-hidden text-white"
      style={{ background: HERO_GRADIENT }}
      onTouchStart={(e) => (touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY })}
      onTouchEnd={(e) => {
        const t = touch.current;
        touch.current = null;
        if (!t) return;
        const dx = e.changedTouches[0].clientX - t.x;
        const dy = e.changedTouches[0].clientY - t.y;
        if (dx > 70 && Math.abs(dy) < 50) back();
      }}
    >
      <div className="mx-auto w-full max-w-[560px] px-4 pt-[max(14px,env(safe-area-inset-top))]">
        <div className="flex gap-1.5" aria-hidden>
          {Array.from({ length: steps + 1 }, (_, i) => (
            <span key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/20">
              <span className={clsx("block h-full origin-left bg-white transition-transform duration-500 ease-out", i <= step ? "scale-x-100" : "scale-x-0")} />
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-[14px]">
          <button type="button" onClick={back} className={clsx("py-2 pr-4 font-medium transition-opacity", step === 0 && "invisible")}>
            Back
          </button>
          <span className="font-mono text-[12px] text-ice-200">{done ? "Your match" : `${step + 1} of ${steps}`}</span>
          <Link href="/" aria-label="Close" className="-mr-2 grid h-10 w-10 place-items-center">
            <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="relative flex-1">
        <div
          className="absolute inset-0 flex transition-transform duration-[650ms] ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ transform: `translateX(-${Math.min(step, steps) * 100}%)` }}
        >
          {matchQuestions.map((q, qi) => (
            <section key={q.id} aria-hidden={qi !== step} className={clsx("h-full w-full shrink-0 overflow-y-auto transition-[visibility] duration-[650ms]", qi !== step && "invisible")}>
              <div className="mx-auto flex min-h-full max-w-[560px] flex-col justify-center px-4 pb-[max(24px,env(safe-area-inset-bottom))] pt-4">
                <h1 className="display text-[44px] leading-[0.95] sm:text-[60px]">{q.title}</h1>
                <div className="mt-8 grid gap-2.5">
                  {q.options.map((o, i) => {
                    const on = picks[qi] === i && (pending === i || step > qi);
                    return (
                      <button
                        key={o.label}
                        type="button"
                        onClick={() => pick(qi, i)}
                        className={clsx(
                          "rounded-[22px] px-6 py-[18px] text-left text-[18px] font-medium transition-all duration-200 active:scale-[0.98]",
                          on ? "bg-white text-navy-900" : "bg-white/10 ring-1 ring-white/15 hover:bg-white/15"
                        )}
                      >
                        {o.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}

          <section aria-hidden={!done} className={clsx("h-full w-full shrink-0 overflow-y-auto transition-[visibility] duration-[650ms]", !done && "invisible")}>
            {main && (
              <div className="mx-auto flex min-h-full max-w-[560px] flex-col justify-center px-4 pb-[max(24px,env(safe-area-inset-bottom))] pt-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] sm:aspect-[16/10]">
                  <Image src={`/images/protocols/${main.slug}.webp`} alt="" fill sizes="(min-width: 560px) 560px, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-mono text-[12px] text-ice-200">Suggested for you</p>
                    <h2 className="display mt-1 text-[38px] leading-none sm:text-[48px]">{main.name}</h2>
                    <p className="mt-2 text-[15px] text-ice-100">From {aed(PROTOCOL_AED)}/month</p>
                  </div>
                </div>
                <p className="mt-5 text-[17px] leading-snug">
                  Your doctor will confirm.
                  <span className="text-ice-200"> A starting point, not a prescription. The consultation is free.</span>
                </p>
                {also && (
                  <p className="mt-3 text-[15px] text-ice-200">
                    Also worth asking about:{" "}
                    <Link href={`/protocols/${also.slug}`} className="font-medium text-white underline underline-offset-4">
                      {also.name}
                    </Link>
                  </p>
                )}
                <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  <Link href={`/order?item=${main.slug}`} className="btn w-full bg-white text-navy-900">
                    Order now
                  </Link>
                  <Link href="/consult" className="btn w-full bg-white/10 text-white ring-1 ring-white/20">
                    Talk to a doctor
                  </Link>
                </div>
                <a
                  href={waLink(`Hi Amino, my match was ${main.name}. Can I ask a few questions?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 flex items-center justify-center gap-2 rounded-full py-3 text-[15px] font-semibold text-white"
                >
                  <WaIcon className="h-5 w-5 text-[#25D366]" />
                  Ask on WhatsApp
                </a>
                <button type="button" onClick={restart} className="mx-auto mt-1 py-2 text-[14px] text-ice-200 underline underline-offset-4">
                  Start again
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
