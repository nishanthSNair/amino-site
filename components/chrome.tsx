"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { aed, PRICE_AED } from "@/data/catalog";
import { WaChat } from "@/components/wa-chat";

/**
 * Nav and the floating Order bar. On the homepage the hero scene sets
 * data-nav and data-bar on <html>; other pages use the light defaults.
 */
export function Chrome() {
  const path = usePathname();
  const home = path === "/";
  const order = path === "/order";
  const match = path === "/match";
  const scope = home ? "chrome-home" : "chrome-page";

  return (
    <>
      <header className={`${scope} pointer-events-none fixed inset-x-0 top-0 z-40`}>
        <div className="nav-bar pointer-events-auto">
        <div className="wrap nav-ink flex items-center justify-between py-4 sm:py-5">
          <Link href="/" className="text-[22px] font-semibold tracking-[-0.04em]">
            Amino
          </Link>
          <nav className="flex items-center gap-5 text-[15px] font-medium sm:gap-8">
            <Link href="/#peptides">Peptides</Link>
            <Link href="/#protocols">Protocols</Link>
            <Link href="/consult" className="hidden md:inline">
              Free consult
            </Link>
            <Link href="/order" className="hidden sm:inline">
              Order now
            </Link>
          </nav>
        </div>
        </div>
      </header>

      {!match && <WaChat scope={scope} solo={order} />}

      {!order && !match && (
        <Link
          href="/order"
          className={`${scope} order-bar fixed bottom-[max(16px,env(safe-area-inset-bottom))] left-1/2 z-40 flex w-[min(420px,calc(100vw-32px))] items-center justify-between rounded-[22px] bg-white py-2.5 pl-6 pr-2.5 shadow-[0_18px_50px_-12px_rgba(10,30,61,0.4)] transition-all duration-500 ease-out`}
        >
          <span className="text-[15px] font-medium text-navy-600">{aed(PRICE_AED)}/month</span>
          <span className="rounded-2xl bg-navy-900 px-6 py-3 text-[15px] font-semibold text-white">Order now</span>
        </Link>
      )}
    </>
  );
}
