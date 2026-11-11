"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { aed, BLOOD_TEST_AED, peptideBySlug, PRICE_AED, PROTOCOL_AED, protocolBySlug, QUARTER_AED } from "@/data/catalog";
import { waLink, WHATSAPP_IS_PLACEHOLDER } from "@/data/contact";
import { WaIcon } from "@/components/wa-icon";

type Reply = { q: string; a: string; link?: { href: string; label: string } };

const replies: Reply[] = [
  {
    q: "Which peptide is right for me?",
    a: "Take the 30-second match for a suggested protocol. A doctor confirms before anything ships.",
    link: { href: "/match", label: "Find my match" },
  },
  {
    q: "How much does it cost?",
    a: `${aed(PRICE_AED)} a month per peptide. Protocols from ${aed(PROTOCOL_AED)}. Three months upfront is ${aed(QUARTER_AED)} with a free blood test. Monthly plans add a ${aed(BLOOD_TEST_AED)} test, or use a previous one.`,
  },
  {
    q: "Talk to a doctor",
    a: "Doctor consultations are always free. Book a call, or message us and we'll arrange it.",
    link: { href: "/consult", label: "Book a free call" },
  },
  {
    q: "Delivery and storage",
    a: "Made fresh, kept cold, and delivered to your door across the UAE.",
  },
];

/** Names what the visitor is looking at, so the WhatsApp message arrives with context. */
function useContextName() {
  const path = usePathname();
  const [, section, slug] = path.split("/");
  if (section === "peptides") return peptideBySlug(slug)?.name;
  if (section === "protocols") return protocolBySlug(slug)?.name;
  return undefined;
}

export function WaChat({ scope, solo }: { scope: string; solo?: boolean }) {
  const [open, setOpen] = useState(false);
  const [asked, setAsked] = useState<Reply[]>([]);
  const name = useContextName();
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    end.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [asked]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const about = name ? ` about ${name}` : "";
  const waText = (q?: string) => `Hi Amino, I have a question${about}.${q ? ` ${q}` : ""}`;
  const remaining = replies.filter((r) => !asked.includes(r));

  return (
    <div className={solo ? "wa-solo" : undefined}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Chat with Amino"}
        className={`${scope} wa-fab fixed right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_36px_-10px_rgba(10,30,61,0.55)] transition-all duration-500 ease-out sm:right-6`}
      >
        {open ? (
          <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        ) : (
          <WaIcon className="h-7 w-7" />
        )}
      </button>

      <div
        role="dialog"
        aria-label="Chat with Amino"
        aria-hidden={!open}
        data-lenis-prevent
        className={clsx(
          "wa-sheet fixed inset-x-3 z-50 flex max-h-[min(560px,72svh)] flex-col overflow-hidden rounded-[28px] bg-white text-navy-900 shadow-[0_30px_80px_-20px_rgba(10,30,61,0.55)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:inset-x-auto sm:right-6 sm:w-[380px]",
          open ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-6 opacity-0"
        )}
      >
        <div className="flex items-center gap-3 px-5 py-4" style={{ background: "linear-gradient(160deg,#3A5680 0%,#1B2C48 100%)" }}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[15px] font-semibold tracking-[-0.04em] text-navy-900">A</span>
          <div className="text-white">
            <p className="text-[16px] font-semibold leading-tight">Amino</p>
            <p className="text-[13px] text-ice-200">Ask us anything</p>
          </div>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-ice-50 px-4 py-5">
          <Bubble>Hi. How can we help{about ? ` with ${name}` : ""}?</Bubble>
          {asked.map((r) => (
            <div key={r.q} className="space-y-3">
              <p className="wa-in ml-auto w-fit max-w-[80%] rounded-[20px] rounded-br-md bg-navy-900 px-4 py-2.5 text-[15px] text-white">{r.q}</p>
              <Bubble>
                {r.a}
                {r.link && (
                  <Link href={r.link.href} onClick={() => setOpen(false)} className="mt-2 block font-semibold text-navy-900 underline underline-offset-4">
                    {r.link.label}
                  </Link>
                )}
              </Bubble>
            </div>
          ))}
          <div ref={end} />
        </div>

        <div className="space-y-3 border-t border-navy-900/10 px-4 pb-4 pt-3">
          {remaining.length > 0 && (
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
              {remaining.map((r) => (
                <button
                  key={r.q}
                  type="button"
                  onClick={() => setAsked((a) => [...a, r])}
                  className="shrink-0 rounded-full bg-ice-50 px-4 py-2.5 text-[14px] font-medium ring-1 ring-navy-900/10 hover:bg-ice-100"
                >
                  {r.q}
                </button>
              ))}
            </div>
          )}
          <a
            href={waLink(waText(asked.at(-1)?.q))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-3.5 text-[15px] font-semibold text-white"
          >
            <WaIcon className="h-5 w-5" />
            Continue on WhatsApp
          </a>
          {WHATSAPP_IS_PLACEHOLDER && <p className="text-center text-[12px] text-navy-600">Demo: the WhatsApp number is a placeholder.</p>}
        </div>
      </div>
    </div>
  );
}

function Bubble({ children }: { children: React.ReactNode }) {
  return <div className="wa-in w-fit max-w-[85%] rounded-[20px] rounded-bl-md bg-white px-4 py-2.5 text-[15px] leading-snug shadow-sm">{children}</div>;
}
