"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staticVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
}) {
  const shouldReduce = useReducedMotion();
  const MotionTag =
    as === "section"
      ? motion.section
      : as === "li"
        ? motion.li
        : motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={shouldReduce ? staticVariants : variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function Parallax({
  children,
  offset = 60,
  className,
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? [0, 0] : [-offset, offset]
  );
  const spring = useSpring(y, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <motion.div ref={ref} style={{ y: spring }} className={className}>
      {children}
    </motion.div>
  );
}

export function Counter({
  value,
  suffix = "",
  className,
  duration = 1.4,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);

  useEffect(() => {
    if (shouldReduce) {
      if (ref.current) ref.current.textContent = value.toLocaleString() + suffix;
      return;
    }
    const controls = mv.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          Math.round(latest).toLocaleString() + suffix;
      }
    });
    // animate on mount when in view — cheap approach: kick off immediately
    const startTime = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const elapsed = (t - startTime) / 1000;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      mv.set(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      controls();
    };
  }, [value, suffix, duration, mv, shouldReduce]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}

export function Marquee({
  children,
  speed = 40,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();
  return (
    <div className={`group flex overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="flex shrink-0 gap-12 pr-12"
        animate={shouldReduce ? undefined : { x: ["0%", "-100%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        className="flex shrink-0 gap-12 pr-12"
        animate={shouldReduce ? undefined : { x: ["0%", "-100%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
