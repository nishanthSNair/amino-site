"use client";

import { useState } from "react";
import clsx from "clsx";
import { Play, X } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { videoStories, type VideoStory } from "@/data/people";

const toneStyles: Record<VideoStory["tone"], string> = {
  clay: "from-clay-deep to-clay",
  sage: "from-sage-deep to-sage",
  charcoal: "from-charcoal to-charcoal-soft",
};

export function VideoStories() {
  const [active, setActive] = useState<VideoStory | null>(null);

  return (
    <section id="stories" className="relative py-24 sm:py-32">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="Patient stories"
            title={
              <>
                Real people.{" "}
                <span className="italic text-clay-deep">Real protocols.</span>
              </>
            }
            intro="Short films from patients on their Amino protocol — recorded after their first physician review."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videoStories.map((story, i) => (
            <Reveal key={story.name + story.goal} delay={i * 0.05}>
              <button
                onClick={() => story.video && setActive(story)}
                className="group relative block aspect-[3/4] w-full overflow-hidden rounded-xl2 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                {/* Background: poster image or gradient fallback */}
                {story.poster ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={story.poster}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className={clsx(
                      "absolute inset-0 bg-gradient-to-br",
                      toneStyles[story.tone]
                    )}
                  />
                )}

                {/* Dark overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent" />

                {/* Play button */}
                <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-cream/40 bg-charcoal/30 text-cream backdrop-blur-md transition-all group-hover:scale-110 group-hover:bg-cream group-hover:text-charcoal">
                  <Play size={16} className="ml-0.5 fill-current" />
                </div>

                <span className="absolute left-4 top-4 rounded-full bg-charcoal/40 px-2.5 py-1 text-[11px] font-medium text-cream/90 backdrop-blur">
                  {story.duration}
                </span>

                {/* Bottom copy */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cream/70">
                    {story.name} · {story.goal}
                  </p>
                  <p className="mt-2 font-serif text-[19px] leading-snug text-cream">
                    &ldquo;{story.headline}&rdquo;
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/85 px-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close video"
            className="absolute right-6 top-6 rounded-full bg-cream/10 p-2.5 text-cream backdrop-blur transition-colors hover:bg-cream/20"
            onClick={() => setActive(null)}
          >
            <X size={20} />
          </button>
          <div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-xl2 bg-charcoal shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={active.video}
              controls
              autoPlay
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
