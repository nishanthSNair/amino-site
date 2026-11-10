"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";

/** Site-wide smooth scrolling and the shared scroll and pointer effects. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, gestureOrientation: "vertical" });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduce) return;

      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        const split = SplitText.create(el, { type: "words", mask: "words", wordsClass: "sw" });
        gsap.from(split.words, {
          yPercent: 112,
          duration: 1.05,
          ease: "power4.out",
          stagger: 0.07,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 44,
          autoAlpha: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 94%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-pop]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 12, rotate: 6, scale: 0.9 },
          { yPercent: 0, rotate: 0, scale: 1, ease: "sine.out", scrollTrigger: { trigger: el.parentElement ?? el, start: "top 95%", end: "top 50%", scrub: 0.8 } }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -7 },
          { yPercent: 7, ease: "none", scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: 0.8 } }
        );
      });
    });

    const mm = gsap.matchMedia();
    if (!reduce) {
      mm.add("(min-width: 1024px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-pop-tile]").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: 12, rotate: 7, scale: 0.88 },
            { yPercent: 0, rotate: 0, scale: 1, ease: "sine.out", scrollTrigger: { trigger: el.parentElement ?? el, start: "top 98%", end: "top 55%", scrub: 0.8 } }
          );
        });

        const off: (() => void)[] = [];
        gsap.utils.toArray<HTMLElement>("[data-tilt]").forEach((el) => {
          const host = el.closest("a");
          if (!host) return;
          gsap.set(el, { transformPerspective: 900 });
          const opts = { duration: 0.7, ease: "power3" };
          const ry = gsap.quickTo(el, "rotationY", opts);
          const rx = gsap.quickTo(el, "rotationX", opts);
          const y = gsap.quickTo(el, "y", opts);
          const s = gsap.quickTo(el, "scale", opts);
          const move = (e: MouseEvent) => {
            const r = host.getBoundingClientRect();
            ry(((e.clientX - r.left) / r.width - 0.5) * 22);
            rx(-((e.clientY - r.top) / r.height - 0.5) * 16);
            y(-14);
            s(1.06);
          };
          const leave = () => {
            ry(0);
            rx(0);
            y(0);
            s(1);
          };
          host.addEventListener("mousemove", move);
          host.addEventListener("mouseleave", leave);
          off.push(() => {
            host.removeEventListener("mousemove", move);
            host.removeEventListener("mouseleave", leave);
          });
        });
        return () => off.forEach((f) => f());
      });
    }

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [pathname]);

  return <>{children}</>;
}
