"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "stack", label: "Stack" },
  { id: "cycle", label: "Cycle" },
  { id: "markers", label: "Markers" },
  { id: "day", label: "Daily rhythm" },
  { id: "faq", label: "FAQ" },
];

export function ProtocolSubnav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[108px] z-30 border-y border-charcoal/[0.06] bg-cream/85 backdrop-blur-md">
      <div className="container-content">
        <nav className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={clsx(
                "shrink-0 rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors",
                active === s.id
                  ? "bg-charcoal text-cream"
                  : "text-charcoal/60 hover:bg-charcoal/[0.04] hover:text-charcoal"
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
