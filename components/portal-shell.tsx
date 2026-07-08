"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { CalendarDays, Droplet, NotebookPen } from "lucide-react";
import { PortalSchedule } from "@/components/portal-schedule";
import { PortalJournal } from "@/components/portal-journal";
import { PortalBloodwork } from "@/components/portal-bloodwork";
import { patient } from "@/data/portal";

type Tab = "schedule" | "journal" | "bloodwork";

const tabs: {
  id: Tab;
  label: string;
  icon: typeof CalendarDays;
  meta: string;
}[] = [
  {
    id: "schedule",
    label: "Schedule",
    icon: CalendarDays,
    meta: "Today · this week",
  },
  {
    id: "journal",
    label: "Journal",
    icon: NotebookPen,
    meta: "Mood · sleep · energy",
  },
  {
    id: "bloodwork",
    label: "Bloodwork",
    icon: Droplet,
    meta: "Before & after",
  },
];

export function PortalShell() {
  const [tab, setTab] = useState<Tab>("schedule");

  return (
    <>
      <Header />

      <nav className="sticky top-[68px] z-30 -mx-5 mt-10 border-y border-charcoal/[0.06] bg-cream/85 backdrop-blur-md sm:-mx-8">
        <div className="container-content">
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map((t) => {
              const active = tab === t.id;
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={clsx(
                    "relative inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-medium transition-colors",
                    active
                      ? "text-charcoal"
                      : "text-charcoal/55 hover:text-charcoal"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="portal-tab-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-charcoal shadow-soft"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <Icon
                    size={14}
                    className={clsx(
                      "relative z-10",
                      active ? "text-cream" : ""
                    )}
                  />
                  <span
                    className={clsx("relative z-10", active && "text-cream")}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="mt-8">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {tab === "schedule" && <PortalSchedule />}
          {tab === "journal" && <PortalJournal />}
          {tab === "bloodwork" && <PortalBloodwork />}
        </motion.div>
      </div>
    </>
  );
}

function Header() {
  const now = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-7 shadow-soft sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-clay-soft font-serif text-[19px] font-medium text-clay-deep">
            {patient.initials}
          </div>
          <div>
            <p className="eyebrow">Patient portal · preview</p>
            <h1 className="mt-2 font-serif text-[32px] font-medium leading-[1.1] sm:text-[38px]">
              Welcome back, {patient.firstName}.
            </h1>
            <p className="mt-2 text-[14.5px] text-charcoal/60">
              {now} · {patient.city}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:min-w-[360px]">
          <StatCell
            label="Protocol"
            value={patient.protocol.name}
            sub={`Week ${patient.protocol.cycleWeek} of ${patient.protocol.cycleTotal}`}
          />
          <StatCell
            label="Physician"
            value={patient.physician.name.replace("Dr. ", "Dr ")}
            sub="Next review Jul 22"
          />
        </div>
      </div>
    </div>
  );
}

function StatCell({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl2 border border-charcoal/[0.06] bg-cream/70 p-4">
      <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
        {label}
      </p>
      <p className="mt-2 font-serif text-[16px] font-medium leading-tight">
        {value}
      </p>
      <p className="mt-1 text-[12px] text-charcoal/55">{sub}</p>
    </div>
  );
}
