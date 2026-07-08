import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "dark";
type ButtonSize = "md" | "lg";

type ButtonBase = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

type ButtonAsLink = ButtonBase & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "className" | "children"
  >;
type ButtonAsButton = ButtonBase & { href?: undefined } & Omit<
    ComponentPropsWithoutRef<"button">,
    "className" | "children"
  >;

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-clay text-white shadow-soft hover:bg-clay-deep hover:-translate-y-[1px] hover:shadow-lift active:translate-y-0",
  outline:
    "border border-charcoal/15 bg-white/60 text-charcoal hover:border-charcoal/30 hover:bg-white",
  ghost:
    "text-charcoal/70 hover:text-charcoal hover:bg-charcoal/[0.04]",
  dark:
    "bg-charcoal text-cream hover:bg-charcoal/90 hover:-translate-y-[1px] shadow-soft",
};

const buttonSizes: Record<ButtonSize, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    showArrow,
    ...rest
  } = props;
  const cls = clsx(
    buttonBase,
    buttonVariants[variant],
    buttonSizes[size],
    className
  );
  const inner = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          size={size === "lg" ? 17 : 15}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );
  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={clsx(cls, "group")} {...linkRest}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={clsx(cls, "group")} {...(rest as ButtonAsButton)}>
      {inner}
    </button>
  );
}

type BadgeTone = "clay" | "sage" | "cream" | "outline";

const badgeTones: Record<BadgeTone, string> = {
  clay: "bg-clay-soft text-clay-deep",
  sage: "bg-sage-faint text-sage-deep",
  cream: "bg-cream-deep text-charcoal/70",
  outline: "border border-charcoal/15 bg-white/70 text-charcoal/70",
};

export function Badge({
  children,
  tone = "cream",
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.14em]",
        badgeTones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={clsx(
        "rounded-xl2 border border-charcoal/[0.06] bg-white shadow-soft transition-all duration-300",
        hover && "hover:-translate-y-1 hover:shadow-lift",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <h2
        className={clsx(
          "font-serif text-[34px] font-medium leading-[1.1] sm:text-[44px]",
          align === "center" && "max-w-3xl"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={clsx(
            "text-[16px] leading-relaxed text-charcoal/65 sm:text-[17px]",
            align === "center" && "max-w-2xl"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
