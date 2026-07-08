"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui";
import { site } from "@/data/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-charcoal/[0.06] bg-cream/80 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="container-content flex h-[68px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] font-medium text-charcoal/65 transition-colors hover:text-charcoal"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href={site.portalLink.href}
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white/60 px-4 py-2 text-[13px] font-medium text-charcoal/75 transition-all hover:border-charcoal/30 hover:bg-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
              {site.portalLink.label}
            </Link>
            <Button href={site.primaryCta.href} size="md" showArrow>
              {site.primaryCta.label}
            </Button>
          </div>
          <button
            aria-label="Open menu"
            className="rounded-full p-2 text-charcoal/70 md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-cream md:hidden">
          <div className="container-content flex h-[68px] items-center justify-between">
            <Logo />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-charcoal/70"
            >
              <X size={22} />
            </button>
          </div>
          <div className="container-content flex flex-1 flex-col justify-between pb-10 pt-6">
            <nav className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-3xl text-charcoal/90 py-3"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={site.portalLink.href}
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white px-5 py-3 text-[15px] font-medium text-charcoal/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
                {site.portalLink.label}
              </Link>
            </nav>
            <Button
              href={site.primaryCta.href}
              size="lg"
              onClick={() => setOpen(false)}
              className="w-full"
              showArrow
            >
              {site.primaryCta.label}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
