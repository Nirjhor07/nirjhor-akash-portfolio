'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import AnimatedBlob from './ui/AnimatedBlob';
import { personalInfo } from '@/data/portfolioData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center pt-28 pb-16 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Slow-Drifting Organic Nebula Blobs */}
      <AnimatedBlob color="bg-primary" className="top-[10%] left-[-5%]" size="w-96 h-96" delay={0} />
      <AnimatedBlob color="bg-tertiary" className="bottom-[10%] right-[-5%]" size="w-96 h-96" delay={4} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Copy Panel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Status Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-6"
          >
            <span className="relative flex h-2 w-2">
              <motion.span 
                variants={pulseVariants}
                animate="animate"
                className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
              />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for Freelance &amp; Work
          </motion.div>

          {/* Core Tagline Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-display leading-[1.08] mb-6"
          >
            {"Designing "}
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent text-shadow-glow">Smart</span>
            {" Web & AI Systems"}
          </motion.h1>

          {/* Subtext Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-xl text-on-surface-variant font-light max-w-xl leading-relaxed mb-10"
          >
            Hi, I'm <span className="text-display font-medium">{personalInfo.name}</span> ({personalInfo.handle}). A specialized developer creating ultra-performant React web apps and implementing intelligent machine learning classifiers.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center mb-12"
          >
            <MagneticButton>
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-black font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:shadow-secondary/35 transition-all duration-300"
              >
                Explore Projects
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                className="flex items-center gap-2 border border-foreground/10 hover:border-foreground/30 text-display font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-300"
              >
                Get In Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social Links Row */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-medium">Follow Me</span>
            <div className="h-[1px] w-8 bg-outline-variant" />
            <div className="flex gap-4">
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-foreground/5 hover:border-foreground/20 bg-foreground/5 text-on-surface-variant hover:text-display transition-colors duration-300 flex items-center justify-center" aria-label="GitHub">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-foreground/5 hover:border-foreground/20 bg-foreground/5 text-on-surface-variant hover:text-display transition-colors duration-300 flex items-center justify-center" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right HUD Graphics Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 flex justify-center perspective-[1000px]"
        >
          {/* Glass Card encased in glowing ambient border */}
          <div className="relative group w-[280px] sm:w-[360px] h-[360px] sm:h-[460px] rounded-3xl overflow-hidden glass-card neon-glow-primary border border-foreground/10 transition-transform duration-700 hover:rotate-1">
            {/* Spotlight shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-tertiary/10 opacity-60 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
            
            {/* Custom high-tech grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

            {/* Profile Image with high tech borders */}
            <div className="absolute inset-4 rounded-2xl overflow-hidden border border-foreground/5 bg-surface-dim/60 flex items-center justify-center">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              
              {/* Corner HUD accent ticks */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/40 pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/40 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/40 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/40 pointer-events-none" />
            </div>

            {/* Float-HUD Status Overlays */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="absolute bottom-8 right-[-10px] sm:right-[-20px] glass-card px-4 py-2.5 rounded-xl border border-foreground/10 flex items-center gap-2.5 z-20 shadow-2xl"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-tertiary animate-ping" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold leading-none">Status</span>
                <span className="text-xs font-display font-semibold text-display leading-tight">System Online</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute top-12 left-[-10px] sm:left-[-20px] glass-card px-4 py-2.5 rounded-xl border border-foreground/10 flex items-center gap-2.5 z-20 shadow-2xl"
            >
              <div className="w-8 h-8 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center text-primary font-display font-bold text-sm">
                JS
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold leading-none">Engineering</span>
                <span className="text-xs font-display font-semibold text-display leading-tight">Next.js + Node</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
