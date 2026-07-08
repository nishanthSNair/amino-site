import Link from "next/link";
import clsx from "clsx";

export function Logo({
  className,
  tone = "charcoal",
}: {
  className?: string;
  tone?: "charcoal" | "cream";
}) {
  return (
    <Link
      href="/"
      aria-label="Amino — home"
      className={clsx(
        "inline-flex items-baseline font-serif text-[22px] font-medium tracking-tight",
        tone === "cream" ? "text-cream" : "text-charcoal",
        className
      )}
    >
      Amino<span className="text-clay">.</span>
    </Link>
  );
}
