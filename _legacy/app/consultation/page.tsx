"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Stethoscope,
  UserRound,
  Video,
} from "lucide-react";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui";

const goals = [
  "Recovery & repair",
  "Longevity",
  "Sleep & sexual health",
  "Body composition / post-GLP-1",
  "Cognitive & focus",
  "Not sure — I want to discuss",
] as const;

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const slots = ["9:00", "10:30", "13:00", "15:00", "17:30", "19:00"] as const;

export default function ConsultationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState<(typeof goals)[number]>(goals[0]);
  const [day, setDay] = useState<(typeof days)[number]>("Tue");
  const [slot, setSlot] = useState<(typeof slots)[number]>("10:30");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    setSubmitted(true);
  };

  return (
    <main className="bg-cream">
      <AnnouncementBar />
      <Nav />

      <section className="pt-28 sm:pt-36">
        <div className="container-content">
          <Reveal>
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/55 transition-colors hover:text-charcoal"
            >
              <ArrowLeft size={15} /> Back to Amino
            </Link>
          </Reveal>

          <div className="grid gap-12 pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            {/* LEFT — value + trust */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-sage-deep/20 bg-sage-faint px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-deep">
                  <Stethoscope size={13} /> Physician consultation
                </span>
                <h1 className="mt-6 font-serif text-[44px] font-medium leading-[1.02] tracking-tight sm:text-[62px]">
                  A 30-minute call with an{" "}
                  <span className="italic text-clay-deep">Amino physician.</span>
                </h1>
                <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-charcoal/70">
                  Talk directly with a licensed physician about your goals,
                  your recent bloodwork and whether a physician-designed
                  peptide protocol is appropriate for you.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-10 space-y-5">
                  <ConsultBullet
                    icon={<Video size={16} />}
                    title="Secure video call"
                    body="30 minutes, one-on-one. Encrypted link sent to your inbox — no app install."
                  />
                  <ConsultBullet
                    icon={<Clock3 size={16} />}
                    title="No cost, no commitment"
                    body="First consultation is on the house. Physician decides whether to proceed based on eligibility."
                  />
                  <ConsultBullet
                    icon={<UserRound size={16} />}
                    title="Not the sales team"
                    body="You're talking to a physician, not a sales rep. Off-label prescribing under the DHA framework."
                  />
                </ul>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-10 rounded-xl2 border border-charcoal/[0.08] bg-white p-5 shadow-soft">
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">
                    You&apos;ll talk to
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-clay-soft font-serif text-[16px] font-medium text-clay-deep">
                      RM
                    </div>
                    <div>
                      <p className="font-serif text-[17px] font-medium leading-tight">
                        Dr. Rayan Mohammed
                      </p>
                      <p className="text-[12.5px] text-charcoal/60">
                        Functional & Regenerative Medicine · AAFM, ABRM
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-charcoal/65">
                    &ldquo;My goal in a first call is to understand your
                    outcome — then decide whether peptides are the right lever
                    at all.&rdquo;
                  </p>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — form */}
            <div>
              <Reveal delay={0.05}>
                {submitted ? (
                  <div className="rounded-xl2 border border-sage-deep/20 bg-sage-faint p-8 shadow-lift sm:p-10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-deep text-cream">
                      <CheckCircle2 size={22} />
                    </span>
                    <h2 className="mt-6 font-serif text-[26px] font-medium leading-tight">
                      You&apos;re on the calendar, {name.split(" ")[0]}.
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">
                      Confirmed for <b>{day} at {slot}</b>. A calendar invite
                      and video link are on the way to {email}.
                    </p>
                    <p className="mt-3 text-[13.5px] text-charcoal/60">
                      In the meantime, upload any recent bloodwork through
                      the link in the email — the physician will review it
                      before your call.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button href="/" size="lg" variant="outline">
                        Back to Amino
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    className="rounded-xl2 border border-charcoal/[0.08] bg-white p-6 shadow-lift sm:p-8"
                  >
                    <div className="flex items-center gap-2">
                      <CalendarClock size={16} className="text-clay-deep" />
                      <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/60">
                        Book your slot
                      </p>
                    </div>

                    <div className="mt-5 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field
                          id="c-name"
                          label="Full name"
                          value={name}
                          onChange={setName}
                          placeholder="Ahmed Al Mansouri"
                          required
                        />
                        <Field
                          id="c-phone"
                          label="Mobile"
                          value={phone}
                          onChange={setPhone}
                          placeholder="+971 50 123 4567"
                          type="tel"
                          required
                        />
                      </div>
                      <Field
                        id="c-email"
                        label="Email"
                        value={email}
                        onChange={setEmail}
                        placeholder="you@domain.com"
                        type="email"
                        required
                      />

                      <div>
                        <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">
                          Your goal
                        </p>
                        <select
                          value={goal}
                          onChange={(e) =>
                            setGoal(e.target.value as (typeof goals)[number])
                          }
                          className="mt-2 h-11 w-full rounded-lg border border-charcoal/15 bg-white px-3 text-[15px] text-charcoal outline-none transition-colors focus:border-clay focus:ring-2 focus:ring-clay/20"
                        >
                          {goals.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">
                          Preferred day
                        </p>
                        <div className="mt-2 grid grid-cols-6 gap-1.5">
                          {days.map((d) => (
                            <button
                              key={d}
                              type="button"
                              onClick={() => setDay(d)}
                              className={`rounded-lg border px-2 py-2.5 text-[12.5px] font-medium transition-all ${
                                day === d
                                  ? "border-clay bg-clay-soft text-clay-deep"
                                  : "border-charcoal/12 bg-white text-charcoal/65 hover:border-charcoal/25"
                              }`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">
                          Preferred time (GST)
                        </p>
                        <div className="mt-2 grid grid-cols-3 gap-1.5 sm:grid-cols-6">
                          {slots.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setSlot(s)}
                              className={`rounded-lg border px-2 py-2.5 text-[12.5px] font-medium transition-all ${
                                slot === s
                                  ? "border-clay bg-clay-soft text-clay-deep"
                                  : "border-charcoal/12 bg-white text-charcoal/65 hover:border-charcoal/25"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="c-notes"
                          className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/55"
                        >
                          Anything you&apos;d like the physician to know (optional)
                        </label>
                        <textarea
                          id="c-notes"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          rows={3}
                          placeholder="Recent bloodwork, medications, prior peptide use…"
                          className="mt-2 w-full rounded-lg border border-charcoal/15 bg-white px-3.5 py-2.5 text-[14px] text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-clay focus:ring-2 focus:ring-clay/20"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        showArrow
                        className="w-full"
                      >
                        Confirm consultation
                      </Button>
                      <p className="text-center text-[11.5px] text-charcoal/50">
                        No cost. No card required. Physician decides eligibility.
                      </p>
                    </div>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ConsultBullet({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-faint text-sage-deep">
        {icon}
      </span>
      <div>
        <p className="font-serif text-[17px] font-medium leading-tight">
          {title}
        </p>
        <p className="mt-1 text-[14px] leading-relaxed text-charcoal/65">
          {body}
        </p>
      </div>
    </li>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/55"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-lg border border-charcoal/15 bg-white px-3.5 text-[15px] text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-clay focus:ring-2 focus:ring-clay/20"
      />
    </div>
  );
}
