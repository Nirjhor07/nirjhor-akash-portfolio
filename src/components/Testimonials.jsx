'use client';

import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import { testimonials } from '@/data/portfolioData';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <Section id="testimonials" title="Client Testimonials" subtitle="Kind Words">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {testimonials.map((t, idx) => (
          <SpotlightCard
            key={t.name}
            className="border border-foreground/5 p-6 flex flex-col justify-between text-left min-h-[260px] hover:border-primary/20"
            spotlightColor={idx % 2 === 0 ? 'rgba(208, 188, 255, 0.08)' : 'rgba(0, 219, 231, 0.08)'}
          >
            {/* Top quote icon decor */}
            <div className="mb-6 flex justify-between items-center text-primary/30">
              <Quote className="w-8 h-8 transform rotate-180" />
              <div className="w-8 h-[1px] bg-foreground/5" />
            </div>

            {/* Quote text */}
            <p className="text-sm font-light text-on-surface-variant italic leading-relaxed mb-8 flex-1">
              "{t.quote}"
            </p>

            {/* Author info */}
            <div className="flex flex-col gap-1 border-t border-foreground/5 pt-4">
              <span className="text-sm font-display font-bold text-display tracking-wide">
                {t.name}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-tertiary">
                {t.role}
              </span>
            </div>

          </SpotlightCard>
        ))}

      </div>
    </Section>
  );
}
