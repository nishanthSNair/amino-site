import clsx from "clsx";

/** Higgsfield render of the Amino pen. Always capped: no needle is ever shown. */
export function Pen({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/brand/pen.webp"
      alt="Amino pen, capped"
      draggable={false}
      className={clsx("block h-full w-auto max-w-none select-none", className)}
    />
  );
}
