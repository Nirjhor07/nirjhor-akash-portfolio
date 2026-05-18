'use client';

import { techSlider } from '@/data/portfolioData';

export default function TechStack() {
  // Double the list to ensure seamless marquee loops
  const doubleList = [...techSlider, ...techSlider, ...techSlider, ...techSlider];

  return (
    <section className="relative w-full py-16 bg-background overflow-hidden border-t border-b border-foreground/5">
      {/* Decorative vertical mask to blur the edges of the infinite slider */}
      <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-8 w-full">
        {/* Row 1: Moving Left */}
        <div className="flex overflow-hidden w-full select-none">
          <div className="animate-infinite-scroll flex gap-8 items-center py-2">
            {doubleList.map((tech, idx) => (
              <div
                key={`left-${tech.name}-${idx}`}
                className="flex items-center gap-3 glass-card px-6 py-3.5 rounded-2xl border border-foreground/5 shadow-lg"
              >
                <img
                  src={`/images/icons/${tech.icon}`}
                  alt={tech.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    e.target.src = "/images/icons/react.png"; // Fallback to React icon if load fails
                  }}
                />
                <span className="text-sm font-display font-semibold text-display tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moving Right (reverse order or slower) */}
        <div className="flex overflow-hidden w-full select-none">
          <div className="animate-infinite-scroll flex gap-8 items-center py-2 [animation-direction:reverse] [animation-duration:35s]">
            {doubleList.map((tech, idx) => (
              <div
                key={`right-${tech.name}-${idx}`}
                className="flex items-center gap-3 glass-card px-6 py-3.5 rounded-2xl border border-foreground/5 shadow-lg"
              >
                <img
                  src={`/images/icons/${tech.icon}`}
                  alt={tech.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    e.target.src = "/images/icons/react.png"; // Fallback
                  }}
                />
                <span className="text-sm font-display font-semibold text-display tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
