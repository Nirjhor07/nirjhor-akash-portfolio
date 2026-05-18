'use client';

import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import { techStack } from '@/data/portfolioData';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    { title: "Frontend Engineering", skills: techStack.frontend, accent: "rgba(208, 188, 255, 0.08)" },
    { title: "Backend & Systems", skills: techStack.backend, accent: "rgba(173, 198, 255, 0.08)" },
    { title: "Machine Learning & AI", skills: techStack.machineLearning, accent: "rgba(0, 219, 231, 0.08)" }
  ];

  return (
    <Section id="skills" title="Skills &amp; Mastery" subtitle="Technical Expertise">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {skillCategories.map((category) => (
          <SpotlightCard
            key={category.title}
            className="border border-foreground/5 p-6 flex flex-col justify-start text-left min-h-[380px]"
            spotlightColor={category.accent}
          >
            {/* Category Header */}
            <h3 className="text-lg font-display font-bold text-display mb-8 border-b border-foreground/5 pb-4 flex items-center justify-between">
              {category.title}
              <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
            </h3>
            
            {/* Skills List */}
            <div className="flex flex-col gap-6 flex-1">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between items-center text-xs font-mono uppercase text-on-surface-variant font-medium">
                    <span>{skill.name}</span>
                    <span className="text-display font-semibold">{skill.level}%</span>
                  </div>
                  
                  {/* High Tech Animated Progress Meter */}
                  <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-tertiary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        ))}

      </div>
    </Section>
  );
}
