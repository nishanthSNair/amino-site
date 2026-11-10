"use client";

import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { physicians } from "@/data/people";

const field =
  "w-full rounded-2xl bg-ice-50 px-5 py-4 text-[16px] outline-none ring-1 ring-navy-900/10 focus:ring-2 focus:ring-ice-400";

function Choice({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={clsx("rounded-full px-5 py-3 text-[15px] font-medium transition-colors", on ? "bg-navy-900 text-white" : "bg-ice-50 text-navy-900 hover:bg-ice-100")}
    >
      {children}
    </button>
  );
}

export function ConsultForm() {
  const [doctor, setDoctor] = useState("Any doctor");
  const [time, setTime] = useState("Evening");
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <form onSubmit={submit} className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold tracking-[-0.02em]">Doctor</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Any doctor", ...physicians.map((p) => p.name)].map((d) => (
            <Choice key={d} on={doctor === d} onClick={() => setDoctor(d)}>
              {d}
            </Choice>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold tracking-[-0.02em]">Best time</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Morning", "Afternoon", "Evening"].map((t) => (
            <Choice key={t} on={time === t} onClick={() => setTime(t)}>
              {t}
            </Choice>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold tracking-[-0.02em]">Your details</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="sm:col-span-2">
            <span className="sr-only">Full name</span>
            <input id="c-name" required autoComplete="name" placeholder="Full name" className={field} />
          </label>
          <label>
            <span className="sr-only">Mobile</span>
            <input id="c-mobile" required type="tel" autoComplete="tel" placeholder="Mobile" className={field} />
          </label>
          <label>
            <span className="sr-only">Email</span>
            <input id="c-email" required type="email" autoComplete="email" placeholder="Email" className={field} />
          </label>
          <label className="sm:col-span-2">
            <span className="sr-only">Your goals</span>
            <textarea id="c-goals" rows={3} placeholder="Your goals, or anything your doctor should know" className={field} />
          </label>
        </div>
      </section>
      <div>
        <button type="submit" className="btn bg-navy-900 text-white">
          Book a free call
        </button>
        {done && (
          <p role="status" className="mt-4 rounded-2xl bg-ice-50 p-4 text-[15px]">
            Booking is not connected yet, so no call was booked.
          </p>
        )}
      </div>
    </form>
  );
}
