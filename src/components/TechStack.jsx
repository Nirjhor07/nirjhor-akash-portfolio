"use client";

import { techTickerRows } from "@/data/portfolioData";
import {
  Zap,
  Atom,
  Wind,
  Sparkles,
  Layout,
  Gauge,
  Code2,
  Layers,
  Server,
  Database,
  ShieldCheck,
  CreditCard,
  BrainCircuit,
  Cpu,
  Binary,
  Globe,
  Terminal,
  Activity,
} from "lucide-react";

// Icon mapping dictionary
const iconMap = {
  Zap,
  Atom,
  Wind,
  Sparkles,
  Layout,
  Gauge,
  Code2,
  Layers,
  Server,
  Database,
  ShieldCheck,
  CreditCard,
  BrainCircuit,
  Cpu,
  Binary,
  Globe,
  Terminal,
};

export default function TechStack() {
  const row1List = [...techTickerRows.row1, ...techTickerRows.row1, ...techTickerRows.row1];
  const row2List = [...techTickerRows.row2, ...techTickerRows.row2, ...techTickerRows.row2];

  const getAccentConfig = (accent) => {
    switch (accent) {
      case "cyan":
        return {
          border: "border-cyan-500/20 hover:border-cyan-400/50",
          iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
          tag: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
          glow: "group-hover:shadow-[0_0_24px_rgba(0,219,231,0.18)]",
          dot: "bg-cyan-400",
        };
      case "purple":
        return {
          border: "border-purple-500/20 hover:border-purple-400/50",
          iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
          tag: "text-purple-400 bg-purple-500/10 border-purple-500/20",
          glow: "group-hover:shadow-[0_0_24px_rgba(168,85,247,0.18)]",
          dot: "bg-purple-400",
        };
      case "blue":
        return {
          border: "border-blue-500/20 hover:border-blue-400/50",
          iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
          tag: "text-blue-400 bg-blue-500/10 border-blue-500/20",
          glow: "group-hover:shadow-[0_0_24px_rgba(59,130,246,0.18)]",
          dot: "bg-blue-400",
        };
      case "emerald":
        return {
          border: "border-emerald-500/20 hover:border-emerald-400/50",
          iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
          tag: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
          glow: "group-hover:shadow-[0_0_24px_rgba(16,185,129,0.18)]",
          dot: "bg-emerald-400",
        };
      case "amber":
      default:
        return {
          border: "border-amber-500/20 hover:border-amber-400/50",
          iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
          tag: "text-amber-400 bg-amber-500/10 border-amber-500/20",
          glow: "group-hover:shadow-[0_0_24px_rgba(245,158,11,0.18)]",
          dot: "bg-amber-400",
        };
    }
  };

  const renderTechCard = (tech, idx, prefix) => {
    const Icon = iconMap[tech.icon] || Code2;
    const cfg = getAccentConfig(tech.accent);

    return (
      <div
        key={`${prefix}-${tech.name}-${idx}`}
        className={`group relative flex items-center gap-3.5 px-4 py-3 rounded-2xl border ${cfg.border} ${cfg.glow} bg-surface-container/60 hover:bg-surface-container/90 backdrop-blur-xl transition-all duration-300 cursor-default select-none flex-shrink-0 shadow-lg shadow-black/20`}
      >
        {/* Glowing Icon Container */}
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center border ${cfg.iconBg} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="w-4.5 h-4.5 stroke-[2.2]" />
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm font-display font-bold text-display tracking-tight group-hover:text-primary transition-colors">
              {tech.name}
            </span>
            <span
              className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.2 rounded border ${cfg.tag}`}
            >
              {tech.tag}
            </span>
          </div>

          <span className="text-[10px] font-mono text-on-surface-variant group-hover:text-foreground/80 transition-colors">
            {tech.role}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden border-t border-b border-foreground/5">
      {/* Dynamic Background Neon Light Blobs */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/30 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/25 rounded-full filter blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Cyber Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Section Telemetry Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-foreground/5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold block">
                Continuous Stack Telemetry
              </span>
              <span className="text-xs text-on-surface-variant font-light">
                Technologies & frameworks running actively in production
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-on-surface-variant">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10">
              <Activity className="w-3.5 h-3.5 text-secondary" />
              17+ Integrated Modules
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10">
              Zero Latency Ecosystem
            </span>
          </div>
        </div>
      </div>

      {/* Fade Gradient Masks for Infinite Marquee */}
      <div className="absolute top-0 left-0 h-full w-24 md:w-56 bg-gradient-to-r from-background via-background/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-24 md:w-56 bg-gradient-to-l from-background via-background/90 to-transparent z-20 pointer-events-none" />

      {/* Dual Marquee Stream Track */}
      <div className="relative z-10 flex flex-col gap-5 w-full">
        {/* Row 1: Frontend & Motion Stream (Scrolls Left) */}
        <div className="flex overflow-hidden w-full select-none group/row1">
          <div className="flex gap-4 items-center py-1.5 whitespace-nowrap animate-marquee-left group-hover/row1:[animation-play-state:paused]">
            {row1List.map((tech, idx) => renderTechCard(tech, idx, "r1"))}
          </div>
        </div>

        {/* Row 2: Backend, Security & Machine Learning Stream (Scrolls Right) */}
        <div className="flex overflow-hidden w-full select-none group/row2">
          <div className="flex gap-4 items-center py-1.5 whitespace-nowrap animate-marquee-right group-hover/row2:[animation-play-state:paused]">
            {row2List.map((tech, idx) => renderTechCard(tech, idx, "r2"))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 38s linear infinite;
        }
      `}</style>
    </section>
  );
}
