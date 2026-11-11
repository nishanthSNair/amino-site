"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import { aed, BLOOD_TEST_AED, peptides, PRICE_AED, PROTOCOL_AED, PROTOCOL_QUARTER_AED, protocols, QUARTER_AED } from "@/data/catalog";

type Plan = "monthly" | "quarter";

const field =
  "w-full rounded-2xl bg-ice-50 px-5 py-4 text-[16px] outline-none ring-1 ring-navy-900/10 focus:ring-2 focus:ring-ice-400";

function Choice({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={clsx(
        "rounded-full px-5 py-3 text-[15px] font-medium transition-colors",
        on ? "bg-navy-900 text-white" : "bg-ice-50 text-navy-900 hover:bg-ice-100"
      )}
    >
      {children}
    </button>
  );
}

export function OrderFlow() {
  const params = useSearchParams();
  const known = useMemo(() => [...peptides, ...protocols].map((i) => i.slug), []);
  const initial = params.get("item") ?? "";
  const [item, setItem] = useState(known.includes(initial) ? initial : peptides[0].slug);
  const [plan, setPlan] = useState<Plan>(params.get("plan") === "quarter" ? "quarter" : "monthly");
  const [done, setDone] = useState(false);

  const protocol = protocols.find((p) => p.slug === item);
  const name = protocol?.name ?? peptides.find((p) => p.slug === item)?.name ?? "";
  const quarter = plan === "quarter";
  const from = protocol ? "From " : "";
  const monthly = protocol ? PROTOCOL_AED : PRICE_AED;
  const threeMonths = protocol ? PROTOCOL_QUARTER_AED : QUARTER_AED;
  const bloodNote = `Blood test ${aed(BLOOD_TEST_AED)}, or use a previous one`;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <div className="wrap grid gap-10 pb-40 pt-32 lg:grid-cols-[1fr_440px] lg:gap-16">
      <div className="min-w-0 space-y-14">
        <h1 className="display text-[56px] sm:text-[96px]">Order.</h1>

        <section>
          <h2 className="text-xl font-semibold tracking-[-0.02em]">Peptide</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {peptides.map((p) => (
              <Choice key={p.slug} on={item === p.slug} onClick={() => setItem(p.slug)}>
                {p.name}
              </Choice>
            ))}
          </div>
          <h2 className="mt-8 text-xl font-semibold tracking-[-0.02em]">Or a protocol</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {protocols.map((p) => (
              <Choice key={p.slug} on={item === p.slug} onClick={() => setItem(p.slug)}>
                {p.name}
              </Choice>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-[-0.02em]">Plan</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {([
              ["monthly", "Monthly", `${aed(monthly)}/month`, bloodNote],
              ["quarter", "3 months", aed(threeMonths), "Paid upfront. Free blood test"],
            ] as const).map(([id, label, price, note]) => (
              <button
                key={id}
                type="button"
                aria-pressed={plan === id}
                onClick={() => setPlan(id)}
                className={clsx(
                  "rounded-3xl p-6 text-left transition-all",
                  plan === id ? "bg-navy-900 text-white" : "bg-ice-50 hover:bg-ice-100"
                )}
              >
                <span className="font-mono text-xs uppercase tracking-[0.08em]">{label}</span>
                <span className="mt-4 block text-[30px] font-semibold tracking-[-0.04em]">
                  {from}
                  {price}
                </span>
                <span className="mt-1 block text-[15px] opacity-75">{note}</span>
              </button>
            ))}
          </div>
        </section>

        <form id="order" onSubmit={submit}>
          <h2 className="text-xl font-semibold tracking-[-0.02em]">Your details</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="sr-only">Full name</span>
              <input id="name" required autoComplete="name" placeholder="Full name" className={field} />
            </label>
            <label>
              <span className="sr-only">Email</span>
              <input id="email" required type="email" autoComplete="email" placeholder="Email" className={field} />
            </label>
            <label>
              <span className="sr-only">Mobile</span>
              <input id="mobile" required type="tel" autoComplete="tel" placeholder="Mobile" className={field} />
            </label>
          </div>
        </form>
      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-tile p-8 text-white" style={{ background: "linear-gradient(160deg,#3A5680 0%,#1B2C48 100%)" }}>
          <p className="text-[28px] font-semibold tracking-[-0.04em]">{name}</p>
          <dl className="mt-6 space-y-3 text-[15px]">
            <div className="flex justify-between gap-4">
              <dt className="text-ice-200">Plan</dt>
              <dd>{quarter ? "3 months" : "Monthly"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ice-200">Blood test</dt>
              <dd>{quarter ? "Free" : `${aed(BLOOD_TEST_AED)} or previous test`}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ice-200">Doctor consultation</dt>
              <dd>Free</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-white/15 pt-3 text-lg font-semibold">
              <dt>Today</dt>
              <dd>
                {from}
                {aed(quarter ? threeMonths : monthly)}
              </dd>
            </div>
          </dl>
          <button type="submit" form="order" className="btn mt-8 w-full bg-white text-navy-900">
            Order now
          </button>
          <p className="mt-4 text-[13px] leading-relaxed text-ice-200">
            A licensed physician reviews every order before anything ships. Full refund if your doctor declines.
          </p>
          {done && (
            <p role="status" className="mt-4 rounded-2xl bg-white/10 p-4 text-[14px]">
              Payment is not connected yet, so no order was placed.
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}
