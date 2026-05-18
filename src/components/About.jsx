'use client';

import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import { personalInfo, stats } from '@/data/portfolioData';

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="My Origin Story">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Bio Description */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <h3 className="text-xl md:text-2xl font-display font-semibold text-display">
            Developing high-performance digital tools powered by intelligent computation.
          </h3>
          
          {Array.isArray(personalInfo.about) ? (
            personalInfo.about.map((para, i) => (
              <p key={i} className="text-on-surface-variant font-light leading-relaxed">
                {para}
              </p>
            ))
          ) : (
            <p className="text-on-surface-variant font-light leading-relaxed">
              {personalInfo.about}
            </p>
          )}

          {/* HUD Tech specs decor line */}
          <div className="mt-4 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
            <span className="text-xs font-mono text-primary/80 uppercase tracking-widest">
              Core Stack: JS/TS + Python + ML Nodes
            </span>
          </div>
        </div>

        {/* Right Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
          {stats.map((stat, idx) => (
            <SpotlightCard
              key={stat.label}
              className="text-left flex flex-col justify-between min-h-[140px] p-5 border border-white/5 bg-[#0a0a0c]/40 hover:border-primary/25"
              spotlightColor="rgba(208, 188, 255, 0.08)"
            >
              <span className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-on-surface-variant font-semibold mt-4 block">
                {stat.label}
              </span>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </Section>
  );
}
