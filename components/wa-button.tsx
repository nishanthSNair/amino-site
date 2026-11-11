import clsx from "clsx";
import { waLink } from "@/data/contact";
import { WaIcon } from "@/components/wa-icon";

/** Secondary order route: opens WhatsApp with the product already named. */
export function WaButton({ text, label = "Order on WhatsApp", className }: { text: string; label?: string; className?: string }) {
  return (
    <a
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx("btn gap-2 border border-navy-900/15 text-navy-900 hover:bg-ice-50", className)}
    >
      <WaIcon className="h-5 w-5 text-[#1EA952]" />
      {label}
    </a>
  );
}
