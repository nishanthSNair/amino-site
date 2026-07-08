"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { Moon, Smile, Zap, Plus, Check } from "lucide-react";
import { seedJournal, type JournalEntry } from "@/data/portal";

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

export function PortalJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>(seedJournal);
  const [mood, setMood] = useState(4);
  const [sleep, setSleep] = useState(7);
  const [energy, setEnergy] = useState(4);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  const avg = useMemo(() => {
    const n = entries.length;
    if (!n) return { mood: 0, sleep: 0, energy: 0 };
    return {
      mood: (entries.reduce((s, e) => s + e.mood, 0) / n).toFixed(1),
      sleep: (entries.reduce((s, e) => s + e.sleep, 0) / n).toFixed(1),
      energy: (entries.reduce((s, e) => s + e.energy, 0) / n).toFixed(1),
    };
  }, [entries]);

  function save() {
    const iso = todayISO();
    const newEntry: JournalEntry = {
      id: "j" + Date.now(),
      date: iso,
      mood,
      sleep,
      energy,
      note: note.trim() || "No note added.",
    };
    setEntries((prev) => [newEntry, ...prev]);
    setNote("");
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
      <div className="space-y-6">
        <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-7 shadow-soft">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="eyebrow">7-day averages</p>
              <h3 className="mt-2 font-serif text-[22px] font-medium leading-tight">
                Your signal
              </h3>
            </div>
            <p className="text-[12.5px] text-charcoal/50">
              Shown to your physician on every review
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <SignalCard
              label="Mood"
              value={avg.mood}
              max="/5"
              tint="clay"
              icon={<Smile size={16} />}
            />
            <SignalCard
              label="Sleep"
              value={avg.sleep}
              max=" hrs"
              tint="sage"
              icon={<Moon size={16} />}
            />
            <SignalCard
              label="Energy"
              value={avg.energy}
              max="/5"
              tint="sage"
              icon={<Zap size={16} />}
            />
          </div>
        </div>

        <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-7 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow">Timeline</p>
              <h3 className="mt-2 font-serif text-[22px] font-medium leading-tight">
                Your journal
              </h3>
            </div>
            <p className="text-[12.5px] font-medium text-charcoal/55">
              {entries.length} entries
            </p>
          </div>

          <ol className="mt-8 space-y-4">
            {entries.map((e) => (
              <li
                key={e.id}
                className="rounded-xl2 border border-charcoal/[0.06] bg-cream/60 p-5 transition-all hover:border-charcoal/15 hover:bg-cream"
              >
                <div className="flex items-baseline justify-between">
                  <p className="text-[13px] font-medium text-charcoal">
                    {formatDate(e.date)}
                  </p>
                  <div className="flex items-center gap-3 text-[12px] font-medium text-charcoal/55">
                    <span className="inline-flex items-center gap-1">
                      <Smile size={12} className="text-clay-deep" />
                      {e.mood}/5
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Moon size={12} className="text-sage-deep" />
                      {e.sleep}h
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Zap size={12} className="text-sage-deep" />
                      {e.energy}/5
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal/75">
                  {e.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-xl2 border border-charcoal/[0.06] bg-white p-6 shadow-soft">
          <p className="eyebrow">New entry</p>
          <h3 className="mt-2 font-serif text-[22px] font-medium leading-tight">
            How was today?
          </h3>

          <div className="mt-6 space-y-6">
            <SliderRow
              label="Mood"
              icon={<Smile size={14} className="text-clay-deep" />}
              min={1}
              max={5}
              step={1}
              value={mood}
              onChange={setMood}
              format={(v) => `${v}/5`}
            />
            <SliderRow
              label="Sleep"
              icon={<Moon size={14} className="text-sage-deep" />}
              min={0}
              max={12}
              step={0.5}
              value={sleep}
              onChange={setSleep}
              format={(v) => `${v} hrs`}
            />
            <SliderRow
              label="Energy"
              icon={<Zap size={14} className="text-sage-deep" />}
              min={1}
              max={5}
              step={1}
              value={energy}
              onChange={setEnergy}
              format={(v) => `${v}/5`}
            />

            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-charcoal/50">
                Note
              </p>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What did you notice today?"
                rows={4}
                className="mt-2 w-full rounded-xl2 border border-charcoal/[0.08] bg-cream/60 p-4 text-[14.5px] leading-relaxed text-charcoal placeholder:text-charcoal/35 focus:border-clay focus:bg-white focus:outline-none"
              />
            </div>

            <button
              onClick={save}
              className={clsx(
                "inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium shadow-soft transition-all",
                saved
                  ? "bg-sage-deep text-cream"
                  : "bg-clay text-white hover:-translate-y-[1px] hover:bg-clay-deep"
              )}
            >
              {saved ? (
                <>
                  <Check size={15} /> Saved
                </>
              ) : (
                <>
                  <Plus size={15} /> Save entry
                </>
              )}
            </button>
            <p className="text-[11.5px] text-charcoal/45">
              Entries stay private to you until you choose to share them with
              your physician at review.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function SignalCard({
  label,
  value,
  max,
  tint,
  icon,
}: {
  label: string;
  value: string | number;
  max: string;
  tint: "clay" | "sage";
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl2 bg-cream/70 p-5">
      <div className="flex items-center gap-1.5 text-[11.5px] font-medium uppercase tracking-[0.14em] text-charcoal/55">
        <span
          className={clsx(
            "flex h-6 w-6 items-center justify-center rounded-full",
            tint === "clay"
              ? "bg-clay-soft text-clay-deep"
              : "bg-sage-faint text-sage-deep"
          )}
        >
          {icon}
        </span>
        {label}
      </div>
      <p className="mt-4 font-serif text-[30px] font-medium leading-none tabular-nums">
        {value}
        <span className="text-[15px] text-charcoal/45">{max}</span>
      </p>
    </div>
  );
}

function SliderRow({
  label,
  icon,
  min,
  max,
  step,
  value,
  onChange,
  format,
}: {
  label: string;
  icon: React.ReactNode;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium uppercase tracking-[0.12em] text-charcoal/60">
          {icon}
          {label}
        </span>
        <span className="font-serif text-[16px] font-medium tabular-nums">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="amino-slider"
      />
      <style jsx>{`
        .amino-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(
            to right,
            #b5886a 0%,
            #b5886a ${((value - min) / (max - min)) * 100}%,
            rgba(42, 42, 40, 0.08) ${((value - min) / (max - min)) * 100}%,
            rgba(42, 42, 40, 0.08) 100%
          );
          outline: none;
        }
        .amino-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #b5886a;
          border: 3px solid #faf7f2;
          box-shadow: 0 1px 4px rgba(42, 42, 40, 0.2);
          cursor: pointer;
        }
        .amino-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #b5886a;
          border: 3px solid #faf7f2;
          box-shadow: 0 1px 4px rgba(42, 42, 40, 0.2);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
