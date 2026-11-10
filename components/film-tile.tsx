/** A video tile. Shows a holding state until a real film is added in data/videos.ts. */
export function FilmTile({ src, poster, label }: { src: string | null; poster?: string; label: string }) {
  return (
    <div
      className="relative aspect-[9/14] w-[60vw] max-w-[260px] shrink-0 snap-start overflow-hidden rounded-tile text-white lg:aspect-[4/3] lg:w-auto lg:max-w-none"
      style={{ background: "linear-gradient(160deg,#12305A 0%,#051126 100%)" }}
    >
      {src ? (
        <video src={src} poster={poster} controls playsInline preload="none" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <>
          <span aria-hidden className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/15">
            <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
          </span>
          <p className="absolute bottom-6 left-6 text-[15px] font-medium">{label}</p>
        </>
      )}
    </div>
  );
}
