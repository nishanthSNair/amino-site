"use client";

import { useState } from "react";
import clsx from "clsx";
import { Check, Droplet, Moon, Sparkles, Syringe } from "lucide-react";
import {
  physicianNote,
  todaySchedule,
  weekOverview,
  type ScheduleItem,
} from "@/data/portal";

const iconFor: Record<string, typeof Syringe> = {
  "morning-bpc": Syringe,
  "evening-tb": Syringe,
  hydration: Droplet,
  "training-log": Sparkles,
  "sleep-window": Moon,
};

export function PortalSchedule() {
  const [items, setItems] = useState<ScheduleItem[]>(todaySchedule);
  const done = items.filter((i) => i.done).length;
  const pct = Math.round((done / items.length) * 100);

  function toggle(id: string) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i))
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-7 shadow-soft">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="eyebrow">Today · Sunday, July 6</p>
              <h3 className="mt-2 font-serif text-[26px] font-medium leading-tight">
                Your protocol schedule
              </h3>
            </div>
            <div className="text-right">
              <p className="font-serif text-[28px] font-medium leading-none">
                {pct}%
              </p>
              <p className="text-[11.5px] font-medium uppercase tracking-[0.14em] text-charcoal/50">
                Adherence
              </p>
            </div>
          </div>

          <ul className="mt-7 space-y-3">
            {items.map((item) => {
              const Icon = iconFor[item.id] ?? Sparkles;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => toggle(item.id)}
                    className={clsx(
                      "group flex w-full items-start gap-4 rounded-xl2 border p-5 text-left transition-all",
                      item.done
                        ? "border-sage-deep/15 bg-sage-faint/70"
                        : "border-charcoal/[0.06] bg-white hover:-translate-y-[1px] hover:shadow-soft"
                    )}
                  >
                    <span
                      className={clsx(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                        item.done
                          ? "border-sage-deep bg-sage-deep text-cream"
                          : "border-charcoal/20 group-hover:border-charcoal/40"
                      )}
                    >
                      {item.done && <Check size={13} />}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-[13px] tabular-nums text-charcoal/50">
                          {item.time}
                        </span>
                        <span
                          className={clsx(
                            "flex h-5 w-5 items-center justify-center rounded-full",
                            item.kind === "dose"
                              ? "bg-clay-soft text-clay-deep"
                              : "bg-cream-deep text-charcoal/60"
                          )}
                        >
                          <Icon size={11} />
                        </span>
                        {item.kind === "dose" && (
                          <span className="rounded-full border border-clay/20 bg-clay-soft/60 px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.12em] text-clay-deep">
                            Dose
                          </span>
                        )}
                      </div>
                      <p
                        className={clsx(
                          "mt-1.5 text-[15.5px] font-medium",
                          item.done
                            ? "text-charcoal/60 line-through decoration-charcoal/30"
                            : "text-charcoal"
                        )}
                      >
                        {item.title}
                      </p>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-charcoal/55">
                        {item.detail}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-7 shadow-soft">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="eyebrow">This week</p>
              <h3 className="mt-2 font-serif text-[22px] font-medium leading-tight">
                Weekly adherence
              </h3>
            </div>
            <p className="text-[13px] font-medium text-charcoal/55">
              Rolling 7 days
            </p>
          </div>
          <div className="mt-8 grid grid-cols-7 gap-2">
            {weekOverview.map((d) => (
              <div key={d.label} className="flex flex-col items-center gap-2">
                <div className="flex h-24 w-full items-end overflow-hidden rounded-lg bg-cream-deep">
                  <div
                    className={clsx(
                      "w-full rounded-lg transition-all",
                      d.today ? "bg-clay" : "bg-sage/70"
                    )}
                    style={{ height: `${Math.max(6, d.adherence)}%` }}
                    aria-label={`${d.label} ${d.adherence}%`}
                  />
                </div>
                <p
                  className={clsx(
                    "text-[11.5px] font-medium",
                    d.today ? "text-clay-deep" : "text-charcoal/55"
                  )}
                >
                  {d.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="space-y-6">
        <div className="rounded-xl2 border border-sage-deep/15 bg-sage-faint p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-deep font-serif text-sm font-medium text-cream">
              RM
            </div>
            <div>
              <p className="text-[14px] font-medium text-charcoal">
                Dr. Rayan Mohammed
              </p>
              <p className="text-[11.5px] font-medium text-sage-deep">
                Note · {physicianNote.when}
              </p>
            </div>
          </div>
          <p className="mt-5 text-[14.5px] leading-relaxed text-charcoal/75">
            {physicianNote.body}
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage-deep px-4 py-2 text-[12.5px] font-medium text-cream transition-all hover:-translate-y-[1px]">
            Message your physician
          </button>
        </div>

        <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-6 shadow-soft">
          <p className="eyebrow">Cycle</p>
          <p className="mt-3 font-serif text-[18px] font-medium">
            Recovery & Repair · Week 3 of 8
          </p>
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-charcoal/[0.06]">
            <div
              className="h-full rounded-full bg-clay"
              style={{ width: `${(3 / 8) * 100}%` }}
            />
          </div>
          <ul className="mt-6 space-y-3 text-[13.5px] text-charcoal/70">
            <li className="flex justify-between">
              <span>Peptides</span>
              <span className="font-medium text-charcoal">BPC-157 · TB-500</span>
            </li>
            <li className="flex justify-between">
              <span>Next physician review</span>
              <span className="font-medium text-charcoal">Jul 22</span>
            </li>
            <li className="flex justify-between">
              <span>Next blood re-panel</span>
              <span className="font-medium text-charcoal">Aug 5</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
