"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import clsx from "clsx";
import type { Faq } from "@/data/products";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-charcoal/[0.08] border-y border-charcoal/[0.08]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-[19px] font-medium leading-snug sm:text-[22px]">
                {item.q}
              </span>
              <span
                className={clsx(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all",
                  isOpen
                    ? "rotate-45 border-charcoal bg-charcoal text-cream"
                    : "border-charcoal/15 text-charcoal/60"
                )}
              >
                <Plus size={16} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 pr-16 text-[15.5px] leading-relaxed text-charcoal/70">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
