"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";
import {
  commonQuestions,
  finalQuestions,
  problemByProtocol,
  type Question,
} from "@/data/quiz";
import type { Protocol } from "@/data/protocols";

type Answers = Record<string, string | number | string[]>;

export function QuizFlow({ protocol }: { protocol: Protocol }) {
  const questions: Question[] = useMemo(() => {
    const problem = problemByProtocol[protocol.slug];
    return [
      ...commonQuestions,
      ...(problem
        ? [
            {
              id: "problem",
              kind: "choice" as const,
              title: problem.title,
              subtitle: problem.subtitle,
              options: problem.options,
            },
          ]
        : []),
      ...finalQuestions,
    ];
  }, [protocol.slug]);

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const total = questions.length;
  const current = questions[step];
  const value = current ? answers[current.id] : undefined;

  const isAnswered = (() => {
    if (!current) return false;
    if (current.kind === "multi") {
      const v = value as string[] | undefined;
      return Array.isArray(v) && v.length > 0;
    }
    if (current.kind === "text" || current.kind === "email") {
      return typeof value === "string" && value.trim().length > 0;
    }
    return value !== undefined && value !== "";
  })();

  function set(id: string, v: Answers[string]) {
    setAnswers((a) => ({ ...a, [id]: v }));
  }

  function next() {
    if (step < total - 1) setStep((s) => s + 1);
    else setDone(true);
  }
  function prev() {
    if (step > 0) setStep((s) => s - 1);
  }

  const progress = ((done ? total : step) / total) * 100;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="mb-3 flex items-center justify-between text-[12px] font-medium text-charcoal/55">
          <span className="inline-flex items-center gap-2">
            <ClipboardList size={13} />
            {protocol.name} intake
          </span>
          <span>
            {done ? total : Math.min(step + 1, total)} of {total}
          </span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-charcoal/[0.08]">
          <motion.div
            className="h-full rounded-full bg-clay"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <QuestionView
              q={current}
              value={value}
              onChange={(v) => set(current.id, v)}
              onSubmit={isAnswered ? next : undefined}
            />

            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={prev}
                disabled={step === 0}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium text-charcoal/60 transition-colors hover:text-charcoal disabled:opacity-30"
              >
                <ArrowLeft size={14} /> Back
              </button>
              <button
                onClick={next}
                disabled={!isAnswered}
                className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-[14px] font-medium text-white shadow-soft transition-all hover:-translate-y-[1px] hover:bg-clay-deep disabled:pointer-events-none disabled:opacity-40"
              >
                {step === total - 1 ? "Submit intake" : "Continue"}
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Complete protocol={protocol} name={answers.name as string} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function QuestionView({
  q,
  value,
  onChange,
  onSubmit,
}: {
  q: Question;
  value: Answers[string] | undefined;
  onChange: (v: Answers[string]) => void;
  onSubmit?: () => void;
}) {
  return (
    <div>
      <h2 className="font-serif text-[32px] font-medium leading-[1.1] sm:text-[40px]">
        {q.title}
      </h2>
      {q.subtitle && (
        <p className="mt-4 text-[15.5px] leading-relaxed text-charcoal/60">
          {q.subtitle}
        </p>
      )}

      <div className="mt-10">
        {q.kind === "choice" && (
          <div className="grid gap-3">
            {q.options.map((opt) => {
              const selected = value === opt;
              return (
                <button
                  key={opt}
                  onClick={() => onChange(opt)}
                  className={clsx(
                    "flex items-center justify-between rounded-xl2 border px-6 py-5 text-left text-[16px] font-medium transition-all",
                    selected
                      ? "border-sage-deep bg-sage-faint text-charcoal shadow-soft"
                      : "border-charcoal/[0.08] bg-white text-charcoal/80 hover:-translate-y-[1px] hover:border-charcoal/25 hover:shadow-soft"
                  )}
                >
                  <span>{opt}</span>
                  <span
                    className={clsx(
                      "flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors",
                      selected
                        ? "border-sage-deep bg-sage-deep text-cream"
                        : "border-charcoal/15"
                    )}
                  >
                    {selected && <Check size={13} />}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {q.kind === "multi" && (
          <MultiChoice
            options={q.options}
            value={(value as string[]) || []}
            onChange={(v) => onChange(v)}
          />
        )}

        {q.kind === "scale" && (
          <ScaleInput
            min={q.min}
            max={q.max}
            minLabel={q.minLabel}
            maxLabel={q.maxLabel}
            value={value as number | undefined}
            onChange={(v) => onChange(v)}
          />
        )}

        {(q.kind === "text" || q.kind === "email") && (
          <input
            type={q.kind === "email" ? "email" : "text"}
            placeholder={q.placeholder}
            value={(value as string) || ""}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && onSubmit) onSubmit();
            }}
            className="h-14 w-full rounded-xl2 border border-charcoal/[0.08] bg-white px-5 text-[17px] text-charcoal placeholder:text-charcoal/35 focus:border-clay focus:outline-none"
            autoFocus
          />
        )}
      </div>
    </div>
  );
}

function MultiChoice({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
}) {
  function toggle(opt: string) {
    const isNone = opt === "None";
    if (isNone) {
      onChange(value.includes("None") ? [] : ["None"]);
      return;
    }
    const withoutNone = value.filter((v) => v !== "None");
    if (withoutNone.includes(opt)) {
      onChange(withoutNone.filter((v) => v !== opt));
    } else {
      onChange([...withoutNone, opt]);
    }
  }
  return (
    <div className="grid gap-3">
      {options.map((opt) => {
        const selected = value.includes(opt);
        return (
          <button
            key={opt}
            onClick={() => toggle(opt)}
            className={clsx(
              "flex items-center justify-between rounded-xl2 border px-6 py-5 text-left text-[16px] font-medium transition-all",
              selected
                ? "border-sage-deep bg-sage-faint text-charcoal shadow-soft"
                : "border-charcoal/[0.08] bg-white text-charcoal/80 hover:-translate-y-[1px] hover:border-charcoal/25 hover:shadow-soft"
            )}
          >
            <span>{opt}</span>
            <span
              className={clsx(
                "flex h-6 w-6 items-center justify-center rounded-md border-2 transition-colors",
                selected
                  ? "border-sage-deep bg-sage-deep text-cream"
                  : "border-charcoal/15"
              )}
            >
              {selected && <Check size={13} />}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ScaleInput({
  min,
  max,
  minLabel,
  maxLabel,
  value,
  onChange,
}: {
  min: number;
  max: number;
  minLabel: string;
  maxLabel: string;
  value: number | undefined;
  onChange: (v: number) => void;
}) {
  const values = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  return (
    <div>
      <div className="grid grid-cols-5 gap-3">
        {values.map((n) => {
          const selected = value === n;
          return (
            <button
              key={n}
              onClick={() => onChange(n)}
              className={clsx(
                "flex h-16 items-center justify-center rounded-xl2 border font-serif text-[22px] font-medium transition-all",
                selected
                  ? "border-sage-deep bg-sage-deep text-cream shadow-soft"
                  : "border-charcoal/[0.08] bg-white text-charcoal/60 hover:-translate-y-[1px] hover:border-charcoal/25 hover:text-charcoal"
              )}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex justify-between text-[12px] font-medium text-charcoal/50">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

function Complete({
  protocol,
  name,
}: {
  protocol: Protocol;
  name?: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-faint">
        <BadgeCheck className="text-sage-deep" size={28} />
      </div>
      <h2 className="mt-8 font-serif text-[36px] font-medium leading-[1.1] sm:text-[44px]">
        Thank you{name ? `, ${name}` : ""}.
      </h2>
      <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-charcoal/65">
        Your intake for{" "}
        <span className="font-medium text-charcoal">{protocol.name}</span> is
        complete. A licensed physician will review your responses and either
        design, redesign, or decline your protocol — in writing — within 48
        hours of onboarding.
      </p>

      <div className="mx-auto mt-10 max-w-md rounded-xl2 border border-charcoal/[0.08] bg-white p-6 text-left shadow-soft">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-clay-deep" />
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-clay-deep">
            Coming soon
          </p>
        </div>
        <p className="mt-3 font-serif text-[22px] font-medium leading-snug">
          Full onboarding is opening to the first cohort.
        </p>
        <p className="mt-2 text-[14px] leading-relaxed text-charcoal/60">
          You&apos;ll receive an email with your onboarding link and the
          longevity-grade blood panel details as soon as your cohort opens.
        </p>
        <button
          disabled
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-cream px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-charcoal/50"
        >
          Coming soon
        </button>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/portal"
          className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-[14px] font-medium text-cream shadow-soft transition-all hover:-translate-y-[1px] hover:bg-charcoal/90"
        >
          Preview the patient portal
          <ArrowRight size={15} />
        </Link>
        <Link
          href="/#protocols"
          className="text-[13.5px] font-medium text-charcoal/60 transition-colors hover:text-charcoal"
        >
          Back to protocols
        </Link>
      </div>
    </div>
  );
}
