"use client";

import { useState } from "react";
import { CheckCircle2, PhoneCall, ShieldCheck, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui";

const windows = [
  "Morning (9am–12pm)",
  "Afternoon (12–5pm)",
  "Evening (5–9pm)",
  "Any time",
] as const;

export function ProductCallback({ productName }: { productName: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pref, setPref] = useState<(typeof windows)[number]>("Any time");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    // Placeholder — hook up to CRM / n8n / Zapier / API later.
    setSubmitted(true);
  };

  return (
    <section
      id="callback"
      className="scroll-mt-32 border-t border-charcoal/[0.06] py-20 sm:py-24"
    >
      <div className="container-content">
        <div className="grid gap-10 rounded-xl2 border border-charcoal/[0.08] bg-white p-8 shadow-lift lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:p-12">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <PhoneCall size={13} /> Request callback
            </p>
            <h2 className="mt-3 font-serif text-[32px] font-medium leading-[1.06] sm:text-[42px]">
              A team member will call you{" "}
              <span className="italic text-clay-deep">within 24 hours.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-charcoal/65">
              Leave your details and we&apos;ll walk you through eligibility,
              pricing and next steps for {productName}. No commitment, no
              obligation — a physician review is only started once you say yes.
            </p>

            <ul className="mt-8 space-y-4 text-[14px] text-charcoal/70">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-faint text-sage-deep">
                  <ShieldCheck size={13} />
                </span>
                Confidential — we never share your details.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-faint text-sage-deep">
                  <Stethoscope size={13} />
                </span>
                All calls handled by a trained UAE-based Amino team member.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-faint text-sage-deep">
                  <CheckCircle2 size={13} />
                </span>
                Interested in a physician conversation instead?{" "}
                <a
                  href="/consultation"
                  className="text-charcoal underline decoration-clay/60 underline-offset-4 hover:decoration-clay"
                >
                  Book a consultation.
                </a>
              </li>
            </ul>
          </div>

          {submitted ? (
            <div className="flex flex-col items-start justify-center rounded-xl2 border border-sage-deep/20 bg-sage-faint p-8 text-left">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-deep text-cream">
                <CheckCircle2 size={20} />
              </span>
              <h3 className="mt-5 font-serif text-[24px] font-medium leading-tight">
                Thank you, {name.split(" ")[0]}.
              </h3>
              <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-charcoal/70">
                A team member will call you on {phone} during your preferred
                window ({pref}). You&apos;ll receive an SMS confirmation
                shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setPhone("");
                }}
                className="mt-6 text-[13.5px] font-medium text-charcoal/60 underline underline-offset-4 hover:text-charcoal"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-xl2 border border-charcoal/[0.08] bg-cream p-6 shadow-soft sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="cb-name"
                    className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/55"
                  >
                    Full name
                  </label>
                  <input
                    id="cb-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ahmed Al Mansouri"
                    className="mt-2 h-11 w-full rounded-lg border border-charcoal/15 bg-white px-3.5 text-[15px] text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-clay focus:ring-2 focus:ring-clay/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cb-phone"
                    className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/55"
                  >
                    Mobile
                  </label>
                  <input
                    id="cb-phone"
                    type="tel"
                    required
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="mt-2 h-11 w-full rounded-lg border border-charcoal/15 bg-white px-3.5 text-[15px] text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-clay focus:ring-2 focus:ring-clay/20"
                  />
                </div>

                <div>
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">
                    Preferred window
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {windows.map((w) => (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setPref(w)}
                        className={`rounded-lg border px-3 py-2.5 text-[13px] font-medium transition-all ${
                          pref === w
                            ? "border-clay bg-clay-soft text-clay-deep"
                            : "border-charcoal/12 bg-white text-charcoal/70 hover:border-charcoal/25"
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  showArrow
                >
                  Request callback
                </Button>
                <p className="text-center text-[11.5px] text-charcoal/50">
                  By submitting, you agree to be contacted about {productName}.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
