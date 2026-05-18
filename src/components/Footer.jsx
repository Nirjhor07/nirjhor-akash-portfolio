'use client';

import { Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import MagneticButton from './ui/MagneticButton';

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative w-full border-t border-foreground/5 bg-background py-12 md:py-16 overflow-hidden">
      {/* Decorative subtle background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Logo & Handle descriptor */}
          <div className="md:col-span-5 flex flex-col items-start gap-4 text-left">
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-tertiary flex items-center justify-center font-display font-bold text-black text-sm transition-transform duration-500 group-hover:rotate-[360deg]">
                {personalInfo.handle}
              </div>
              <span className="font-display font-semibold text-lg tracking-tight text-display transition-all duration-300 group-hover:text-tertiary">
                {personalInfo.nickname}
              </span>
            </a>
            
            <p className="text-xs font-light text-on-surface-variant max-w-sm leading-relaxed">
              Design-driven full-stack software engineer &amp; machine learning practitioner. I train classifiers, secure APIs, and build premium responsive interfaces.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 flex flex-col items-start gap-3 text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold">
              Quick Links
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs text-on-surface-variant hover:text-display transition-colors duration-300 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social & Action widget */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold">
              Connect
            </span>
            
            <div className="flex gap-3">
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-foreground/5 bg-foreground/5 hover:bg-foreground/10 text-on-surface-variant hover:text-display transition-all duration-300 flex items-center justify-center" aria-label="GitHub">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-foreground/5 bg-foreground/5 hover:bg-foreground/10 text-on-surface-variant hover:text-display transition-all duration-300 flex items-center justify-center" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="mailto:nirjhorakash07@gmail.com" className="p-2 rounded-lg border border-foreground/5 bg-foreground/5 hover:bg-foreground/10 text-on-surface-variant hover:text-display transition-all duration-300 flex items-center justify-center" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Scroll back up anchor wrapped in magnetic */}
            <div className="mt-4 md:mt-2">
              <MagneticButton>
                <button
                  onClick={handleScrollToTop}
                  className="p-3 rounded-full bg-foreground/5 border border-foreground/5 hover:bg-foreground/10 hover:border-tertiary/40 text-on-surface-variant hover:text-display transition-all duration-300 shadow-md"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </MagneticButton>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-foreground/5 text-[10px] font-mono uppercase tracking-wider text-on-surface-variant/40">
          <span>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </span>
          <div className="flex gap-4">
            <span>Next.js App</span>
            <span>//</span>
            <span>Tailwind v4 HUD Style</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
