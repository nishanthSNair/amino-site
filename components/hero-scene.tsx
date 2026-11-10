"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { aed, PRICE_AED } from "@/data/catalog";
import { HERO_BG, HERO_FRAMES_DESKTOP, HERO_FRAMES_MOBILE } from "@/data/hero";
import { Pen } from "@/components/pen";

const WORD_CENTER = 0.48; // vertical centre of the letters in the rendered frames
const WORD_HEIGHT = 0.36; // letter height as a share of the frame height
const WORD_LEFT = 0.03; // left edge of the "A" as a share of the frame width

export function HeroScene() {
  const root = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const section = root.current!;
    const canvas = canvasRef.current!;
    const c = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 700;
    const count = mobile ? HERO_FRAMES_MOBILE : HERO_FRAMES_DESKTOP;
    const dir = mobile ? "m" : "d";
    const src = (i: number) => `/hero/${dir}/${String(i).padStart(3, "0")}.webp`;

    const frames: (ImageBitmap | undefined)[] = new Array(count);
    const state = { intro: reduce ? 1 : 0, unfold: 0, alpha: 1 };

    let w = 0;
    let h = 0;
    let cy = 0;
    let lastKey = "";

    const layout = () => {
      w = section.clientWidth;
      h = section.clientHeight;
      const scale = Math.min(window.devicePixelRatio || 1, mobile ? 2 : 1600 / w, 2);
      canvas.width = Math.round(w * scale);
      canvas.height = Math.round(h * scale);
      c.setTransform(scale, 0, 0, scale, 0, 0);
      c.imageSmoothingQuality = "medium";
      const drawH = (w * 9) / 16;
      cy = h * (w < 700 ? 0.36 : 0.43);
      const fit = drawH * WORD_HEIGHT;
      const y = cy - WORD_CENTER * drawH;
      const feather = Math.max(40, drawH * 0.14);
      section.style.setProperty("--fit", `${fit}px`);
      section.style.setProperty("--cy", `${cy}px`);
      section.style.setProperty("--left", `${w * WORD_LEFT}px`);
      section.style.setProperty("--pen", `${Math.min(fit * 2.55, h * 0.84)}px`);
      section.style.setProperty("--frame-top", `${y}px`);
      section.style.setProperty("--frame-bottom", `${y + drawH}px`);
      section.style.setProperty("--feather", `${feather}px`);
      lastKey = "";
    };

    const draw = () => {
      const f = (count - 1) * state.intro * (1 - state.unfold);
      const key = `${f.toFixed(2)}|${state.alpha.toFixed(3)}|${w}|${h}`;
      if (key === lastKey) return;
      const a = Math.floor(f);
      const b = Math.min(count - 1, a + 1);
      const fa = frames[a];
      if (!fa) return;
      lastKey = key;
      c.clearRect(0, 0, w, h);
      if (state.alpha <= 0.01) return;
      const drawH = (w * 9) / 16;
      const y = cy - WORD_CENTER * drawH;
      c.globalAlpha = state.alpha;
      c.drawImage(fa, 0, y, w, drawH);
      const fb = frames[b];
      const frac = f - a;
      if (frac > 0.04 && fb && b !== a) {
        c.globalAlpha = state.alpha * frac;
        c.drawImage(fb, 0, y, w, drawH);
      }
      c.globalAlpha = 1;
    };

    layout();
    const onResize = () => layout();
    window.addEventListener("resize", onResize);
    gsap.ticker.add(draw);

    let started = false;
    let alive = true;
    const penIntro = section.querySelectorAll("[data-pen-intro]");
    const fades = section.querySelectorAll("[data-hero-fade]");

    // Everything enters together, once the frames are decoded and ready.
    const startIntro = (full: boolean) => {
      if (started || !alive) return;
      started = true;
      if (reduce) return;
      const tl = gsap.timeline();
      if (full) tl.to(state, { intro: 1, duration: 2.6, ease: "power1.inOut" }, 0);
      else state.intro = 1;
      tl.fromTo(penIntro, { y: "55vh", rotate: 12, autoAlpha: 0 }, { y: 0, rotate: 0, autoAlpha: 1, duration: 1.7, ease: "power3.out" }, full ? 0.7 : 0);
      tl.fromTo(fades, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1, ease: "power3.out", stagger: 0.12 }, full ? 1.6 : 0.3);
    };

    const load = async (i: number) => {
      const res = await fetch(src(i));
      const bitmap = await createImageBitmap(await res.blob());
      if (alive) frames[i] = bitmap;
      else bitmap.close();
    };

    const order = reduce ? [count - 1] : [0, count - 1, ...Array.from({ length: count - 2 }, (_, i) => i + 1)];
    let next = 0;
    const worker = async () => {
      while (alive && next < order.length) {
        const i = order[next++];
        await load(i).catch(() => undefined);
      }
    };
    Promise.all(Array.from({ length: 6 }, worker)).then(() => startIntro(true));
    const fallback = window.setTimeout(() => startIntro(false), 3200);

    let ctx: gsap.Context | undefined;
    if (!reduce) {
      ctx = gsap.context(() => {
        gsap.set("[data-pen-scroll]", { xPercent: -50, yPercent: -50, x: 0, y: 0, rotate: -7 });
        const small = () => window.innerWidth < 700;
        const tl = gsap.timeline({
          defaults: { ease: "sine.inOut" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${window.innerHeight * 2.3}`,
            pin: true,
            scrub: 0.7,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              document.documentElement.dataset.nav = self.progress > 0.76 ? "light" : "dark";
              document.documentElement.dataset.bar = self.progress > 0.9 ? "on" : "off";
            },
            onLeave: () => {
              document.documentElement.dataset.nav = "light";
              document.documentElement.dataset.bar = "on";
            },
          },
        });

        tl.to("[data-hero-copy]", { autoAlpha: 0, y: -24, duration: 0.1 }, 0.01)
          .to(state, { unfold: 1, duration: 0.34 }, 0.02)
          .to(state, { alpha: 0.42, duration: 0.14 }, 0.24)
          .to("[data-pen-scroll]", { scale: () => (small() ? 2.1 : 1.16), rotate: 0, y: () => section.clientHeight * (small() ? 0.38 : 0.5) - cy, duration: 0.32 }, 0.04);

        gsap.utils.toArray<HTMLElement>("[data-callout]").forEach((el, i) => {
          const at = 0.28 + i * 0.145;
          tl.fromTo(el, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.05 }, at);
          tl.to(el, { autoAlpha: 0, y: -30, duration: 0.05 }, at + 0.095);
        });

        tl.to("[data-dawn-ice]", { opacity: 1, duration: 0.16 }, 0.72)
          .to("[data-dawn-white]", { opacity: 1, duration: 0.13 }, 0.86)
          .to(state, { alpha: 0, duration: 0.14 }, 0.74)
          .to("[data-pen-scroll]", { y: () => window.innerHeight * 1.25, rotate: 8, scale: () => (small() ? 1.5 : 0.82), duration: 0.26, ease: "sine.in" }, 0.74);
      }, section);
    }

    return () => {
      alive = false;
      window.clearTimeout(fallback);
      gsap.ticker.remove(draw);
      window.removeEventListener("resize", onResize);
      ctx?.revert();
      frames.forEach((f) => f?.close());
      delete document.documentElement.dataset.nav;
      delete document.documentElement.dataset.bar;
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative h-[100svh] min-h-[560px] overflow-hidden text-white"
      style={{ background: HERO_BG, ["--fit" as string]: "20vw", ["--cy" as string]: "43svh", ["--left" as string]: "3vw", ["--pen" as string]: "60svh" }}
    >
      <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />
      <div aria-hidden className="absolute inset-x-0" style={{ top: "calc(var(--frame-top, 0px) - 1px)", height: "var(--feather, 0px)", background: `linear-gradient(180deg, ${HERO_BG}, ${HERO_BG}00)` }} />
      <div aria-hidden className="absolute inset-x-0" style={{ top: "calc(var(--frame-bottom, 100%) - var(--feather, 0px) + 1px)", height: "var(--feather, 0px)", background: `linear-gradient(0deg, ${HERO_BG}, ${HERO_BG}00)` }} />
      <div
        data-dawn-ice
        aria-hidden
        className="absolute inset-0 opacity-0"
        style={{ background: "radial-gradient(120% 90% at 50% 100%, #FFFFFF 0%, #DDF3FF 45%, #9BDCFF 100%)" }}
      />
      <div data-dawn-white aria-hidden className="absolute inset-0 bg-white opacity-0" />

      <h1 className="sr-only">Amino, the most trusted peptide clinic in the UAE</h1>
      <noscript>
        <style>{"[data-hero-fade],[data-pen-intro]{opacity:1!important;visibility:visible!important}"}</style>
      </noscript>

      <div data-pen-scroll className="absolute left-1/2 z-10" style={{ top: "var(--cy)", height: "var(--pen)", transform: "translate(-50%, -50%) rotate(-7deg)" }}>
        <div data-pen-intro className="h-full">
          <div className="pen-float h-full">
            <Pen />
          </div>
        </div>
      </div>

      <div data-hero-copy className="absolute inset-0 z-20">
        <div
          data-hero-fade
          className="absolute flex items-center gap-3"
          style={{ top: "calc(var(--cy) + var(--fit) / 2 + clamp(14px, 2.4vh, 28px))", left: "var(--left)" }}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ice-200 sm:text-xs">Powered by</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/valeo-health.svg" alt="Valeo Health" className="h-14 w-auto sm:h-[72px]" />
        </div>

        <div className="wrap absolute inset-x-0 bottom-0 flex flex-col gap-5 pb-8 sm:flex-row sm:items-end sm:justify-between sm:pb-10">
          <p data-hero-fade className="display max-w-[18ch] [text-wrap:balance] text-[34px] sm:text-[46px] lg:text-[56px]">
            The most trusted peptide clinic in the UAE.
          </p>
          <div data-hero-fade>
            <Link href="/order" className="btn bg-white text-navy-900">
              Order now · {aed(PRICE_AED)}/month
            </Link>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
        {[
          { big: "Its own pen.", small: "Every injectable, dosed on its own.", cls: "bottom-[9%] left-[5%] sm:bottom-auto sm:left-[7%] sm:top-[18%]" },
          { big: "Made fresh.", small: "Compounded to order, 45-day life.", cls: "bottom-[9%] left-[5%] sm:bottom-auto sm:left-auto sm:right-[7%] sm:top-[46%] sm:text-right" },
          { big: "Kept cold.", small: "Cold-chain to your door.", cls: "bottom-[9%] left-[5%] sm:bottom-[12%] sm:left-[7%]" },
        ].map((c) => (
          <div key={c.big} data-callout className={`absolute opacity-0 ${c.cls}`}>
            <p className="display text-[42px] sm:text-[72px] lg:text-[92px]">{c.big}</p>
            <p className="mt-2 text-[15px] text-ice-200 sm:text-lg">{c.small}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
