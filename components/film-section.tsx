"use client";

import { useState } from "react";
import clsx from "clsx";
import { Rail } from "@/components/rail";
import { FilmTile } from "@/components/film-tile";
import { clientFilms, doctorFilms } from "@/data/videos";

/** One section with Clients and Doctors tabs, in place of two long sections. */
export function FilmSection({ doctors }: { doctors: string[] }) {
  const [tab, setTab] = useState<"clients" | "doctors">("clients");
  const tabs = [
    ["clients", "Real clients"],
    ["doctors", "Our doctors"],
  ] as const;
  return (
    <section className="wrap pb-16 lg:pb-24">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <h2 data-split className="display text-[52px] sm:text-[80px] lg:text-[112px]">
          On film.
        </h2>
        <div role="tablist" aria-label="Choose films" className="flex rounded-full bg-ice-100 p-1">
          {tabs.map(([id, label]) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={clsx("rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors duration-300", tab === id ? "bg-navy-900 text-white" : "text-navy-900")}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div key={tab} className="film-in mt-8">
        {tab === "clients" ? (
          <Rail className="lg:grid lg:grid-cols-4 lg:gap-4">
            {clientFilms.map((f, i) => (
              <FilmTile key={i} src={f.src} poster={f.poster} label="Client film" />
            ))}
          </Rail>
        ) : (
          <Rail className="lg:grid lg:grid-cols-3 lg:gap-4">
            {doctorFilms.map((f) => (
              <FilmTile key={f.doctor} src={f.src} poster={f.poster} label={doctors[f.doctor] ?? "Doctor"} />
            ))}
          </Rail>
        )}
      </div>
    </section>
  );
}
