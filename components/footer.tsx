import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";

const linkGroups = [
  {
    title: "Platform",
    links: [
      { label: "Protocols", href: "/#protocols" },
      { label: "Products", href: "/#products" },
      { label: "Science", href: "/#science" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Patient portal", href: "/portal" },
      { label: "Find my protocol", href: "/#cta" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Safety & eligibility", href: "/#science" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-charcoal/[0.06] bg-cream">
      <div className="container-content py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-charcoal/60">
              {site.tagline}
            </p>
          </div>
          {linkGroups.map((g) => (
            <div key={g.title}>
              <p className="eyebrow mb-4">{g.title}</p>
              <ul className="space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-charcoal/65 transition-colors hover:text-charcoal"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 hairline pt-6">
          <p className="max-w-4xl text-[12.5px] leading-relaxed text-charcoal/50">
            {site.compliance}
          </p>
          <p className="mt-4 text-[12px] text-charcoal/40">
            &copy; {new Date().getFullYear()} Amino. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
