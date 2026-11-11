"use client";

import { useState } from "react";

/** Lightweight YouTube tile: shows the thumbnail and only loads the player when tapped. */
export function YouTubeTile({ id, title, by }: { id: string; title: string; by: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="w-[80vw] max-w-[360px] shrink-0 snap-start lg:w-auto lg:max-w-none">
      <div className="relative aspect-video overflow-hidden rounded-[26px] bg-navy-900">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 h-full w-full" aria-label={`Play: ${title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
            <span className="absolute inset-0 bg-navy-950/10 transition-colors group-hover:bg-navy-950/0" />
            <span className="absolute bottom-4 right-4 grid h-14 w-14 place-items-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-navy-900" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-4">
        <span className="block text-[17px] font-semibold leading-snug tracking-[-0.01em]">{title}</span>
        <span className="mt-1 block text-[14px] text-navy-600">{by}</span>
      </figcaption>
    </figure>
  );
}
