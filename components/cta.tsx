"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion";
import { site } from "@/data/site";

export function Cta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="cta" className="relative overflow-hidden bg-charcoal">
      {/* soft ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-clay/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-sage/15 blur-3xl"
      />

      <div className="container-content relative py-24 sm:py-32">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/50">
            {site.finalCta.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-3xl font-serif text-[42px] font-medium leading-[1.05] text-cream sm:text-[64px]">
            {site.finalCta.title.replace(".", "")}{" "}
            <span className="italic text-clay-light">Find your protocol.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-cream/65">
            {site.finalCta.body}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              disabled={submitted}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={site.finalCta.placeholder}
              className="h-12 flex-1 rounded-full border border-cream/15 bg-cream/[0.06] px-5 text-[15px] text-cream placeholder:text-cream/40 backdrop-blur focus:border-clay-light focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-clay px-7 text-[15px] font-medium text-white shadow-soft transition-all hover:-translate-y-[1px] hover:bg-clay-deep disabled:opacity-90"
            >
              {submitted ? (
                <>
                  <Check size={16} /> Received
                </>
              ) : (
                site.finalCta.button
              )}
            </button>
          </form>
        </Reveal>

        {submitted && (
          <Reveal>
            <p className="mt-5 text-[14px] text-sage-faint">
              {site.finalCta.success}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
