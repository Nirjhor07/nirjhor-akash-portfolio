"use client";

import { useState } from "react";
import Section from "./Section";
import SpotlightCard from "./ui/SpotlightCard";
import { skillCategories } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Layout,
  Sparkles,
  Code2,
  Layers,
  Server,
  Database,
  ShieldCheck,
  CreditCard,
  Binary,
  BrainCircuit,
  Cpu,
  Gauge,
  Workflow,
  GitBranch,
  Globe,
  Terminal,
  Boxes,
  Activity,
  CheckCircle2,
} from "lucide-react";

// Icon mapping
const iconMap = {
  Zap,
  Layout,
  Sparkles,
  Code2,
  Layers,
  Server,
  Database,
  ShieldCheck,
  CreditCard,
  Binary,
  BrainCircuit,
  Cpu,
  Gauge,
  Workflow,
  GitBranch,
  Globe,
  Terminal,
  Boxes,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  // Flatten all skills for "all" tab, keeping category meta
  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      categoryTitle: cat.title,
      accent: cat.accent,
      glowColor: cat.glowColor,
      badgeColor: cat.badgeColor,
    }))
  );

  const displayedSkills =
    activeTab === "all"
      ? allSkills
      : (skillCategories.find((c) => c.id === activeTab)?.skills || []).map(
          (skill) => {
            const cat = skillCategories.find((c) => c.id === activeTab);
            return {
              ...skill,
              categoryTitle: cat.title,
              accent: cat.accent,
              glowColor: cat.glowColor,
              badgeColor: cat.badgeColor,
            };
          }
        );

  const getAccentStyles = (accent) => {
    switch (accent) {
      case "purple":
        return {
          iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
          tagBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
          borderHover: "group-hover:border-purple-500/40",
          dot: "bg-purple-400",
        };
      case "blue":
        return {
          iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
          tagBg: "bg-blue-500/10 text-blue-300 border-blue-500/20",
          borderHover: "group-hover:border-blue-500/40",
          dot: "bg-blue-400",
        };
      case "cyan":
        return {
          iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
          tagBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
          borderHover: "group-hover:border-cyan-500/40",
          dot: "bg-cyan-400",
        };
      case "emerald":
      default:
        return {
          iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
          tagBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
          borderHover: "group-hover:border-emerald-500/40",
          dot: "bg-emerald-400",
        };
    }
  };

  return (
    <Section
      id="skills"
      title="Technical Stack & Architecture"
      subtitle="Engineering Arsenal"
    >
      {/* Top Intelligence HUD Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 p-4 md:p-5 rounded-2xl bg-surface-container/60 border border-foreground/10 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg shadow-black/20"
      >
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary" />
          </div>
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-tertiary block">
              Platform Intelligence Grid
            </span>
            <span className="text-xs text-on-surface-variant">
              Curated Production Stack &bull; Real-World Architectures
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-on-surface-variant">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Zero Deprecated Frameworks
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10">
            <Activity className="w-3.5 h-3.5 text-secondary" />
            Full-Stack + Applied ML
          </span>
        </div>
      </motion.div>

      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-10">
        <button
          onClick={() => setActiveTab("all")}
          className={`relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            activeTab === "all"
              ? "text-display shadow-md shadow-primary/10"
              : "text-on-surface-variant hover:text-foreground bg-foreground/5 hover:bg-foreground/10 border border-foreground/5"
          }`}
        >
          {activeTab === "all" && (
            <motion.div
              layoutId="activeCategoryTab"
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-tertiary/20 to-secondary/20 border border-foreground/20 backdrop-blur-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            All Architecture
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/10 border border-foreground/10">
              {allSkills.length}
            </span>
          </span>
        </button>

        {skillCategories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "text-display shadow-md"
                  : "text-on-surface-variant hover:text-foreground bg-foreground/5 hover:bg-foreground/10 border border-foreground/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-foreground/20 backdrop-blur-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {cat.title}
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/10 border border-foreground/10">
                  {cat.skills.length}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Grid of Modern Tech Nodes */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {displayedSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const styles = getAccentStyles(skill.accent);

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.04, 0.3),
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <SpotlightCard
                  className={`h-full border border-foreground/10 p-6 flex flex-col justify-between text-left rounded-2xl bg-surface-container/40 backdrop-blur-md transition-all duration-300 ${styles.borderHover}`}
                  spotlightColor={skill.glowColor}
                >
                  {/* Subtle Top Cyber Decorative Corner Lines */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1 opacity-25 group-hover:opacity-60 transition-opacity">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                    <span className="w-1 h-1 rounded-full bg-foreground/30" />
                  </div>

                  <div>
                    {/* Header Row: Icon & Highlight Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-inner ${styles.iconBg}`}
                      >
                        <IconComponent className="w-5 h-5 stroke-[2.2]" />
                      </div>

                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${styles.tagBg}`}
                      >
                        {skill.highlight}
                      </span>
                    </div>

                    {/* Skill Title & Role */}
                    <h3 className="text-base font-display font-bold text-display group-hover:text-primary transition-colors duration-300 mb-1.5">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-on-surface-variant font-normal leading-relaxed mb-6">
                      {skill.role}
                    </p>
                  </div>

                  {/* Footer: Real Portfolio Project Association */}
                  <div className="pt-4 border-t border-foreground/5 mt-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-on-surface-variant/80">
                        Applied In Projects
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {skill.projects.map((proj) => (
                        <span
                          key={proj}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/80 group-hover:border-foreground/20 group-hover:text-display transition-colors"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
