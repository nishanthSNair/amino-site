import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export function AnnouncementBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-10 bg-clay-deep text-cream">
      <Link
        href={site.announcement.href}
        className="container-content flex h-full items-center justify-center gap-2 text-[13px] font-medium tracking-tight transition-opacity hover:opacity-90"
      >
        <span className="underline decoration-cream/40 underline-offset-[3px]">
          {site.announcement.text}
        </span>
        <span className="hidden items-center gap-1 text-cream/80 sm:inline-flex">
          {site.announcement.cta}
          <ArrowRight size={13} />
        </span>
      </Link>
    </div>
  );
}
