"use client";

import { useEffect, useRef, type ReactNode } from "react";
import clsx from "clsx";

/**
 * Swipe row below 1024px, normal layout above it. While swiping it publishes
 * --p (overall progress) on the parent and --f (0 to 1 focus) on each child.
 */
export function Rail({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const mq = window.matchMedia("(max-width: 1023px)");
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!mq.matches) {
        Array.from(el.children).forEach((c) => (c as HTMLElement).style.removeProperty("--f"));
        return;
      }
      const max = el.scrollWidth - el.clientWidth;
      const p = max > 0 ? Math.min(1, el.scrollLeft / max) : 0;
      el.parentElement?.style.setProperty("--p", p.toFixed(4));
      if (bar.current) bar.current.style.transform = `scaleX(${Math.max(0.12, p)})`;
      const start = el.getBoundingClientRect().left + parseFloat(getComputedStyle(el).paddingLeft);
      Array.from(el.children).forEach((c) => {
        const r = c.getBoundingClientRect();
        const f = 1 - Math.min(1, Math.abs(r.left - start) / r.width);
        (c as HTMLElement).style.setProperty("--f", f.toFixed(3));
      });
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    el.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={clsx(
          "-mx-4 flex snap-x snap-mandatory scroll-pl-4 gap-3 overflow-x-auto px-4 pb-9 pt-1 [scrollbar-width:none] sm:-mx-6 sm:scroll-pl-6 sm:px-6 lg:mx-0 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0 [&::-webkit-scrollbar]:hidden",
          className
        )}
      >
        {children}
      </div>
      <div aria-hidden className="mx-auto h-[3px] w-24 overflow-hidden rounded-full bg-navy-900/10 lg:hidden">
        <div ref={bar} className="h-full origin-left rounded-full bg-navy-900" style={{ transform: "scaleX(0.12)" }} />
      </div>
    </>
  );
}
