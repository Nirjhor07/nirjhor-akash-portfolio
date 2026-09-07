'use client';

import { useState, useMemo } from 'react';
import Section from './Section';
import SpotlightCard from './ui/SpotlightCard';
import MagneticButton from './ui/MagneticButton';
import { projects } from '@/data/portfolioData';
import { ExternalLink, Search, X, Filter, Sparkles, FolderGit2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('');

  // Extract all categories with project counts
  const categories = useMemo(() => {
    const counts = { All: projects.length };
    projects.forEach((p) => {
      const cat = p.category || 'Other';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, []);

  // Filter projects based on search query, category, and tech tag
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      // Category filter
      if (selectedCategory !== 'All' && project.category !== selectedCategory) {
        return false;
      }

      // Tech pill filter
      if (selectedTech && !project.tech.some((t) => t.toLowerCase() === selectedTech.toLowerCase())) {
        return false;
      }

      // Text search query across title, description, and tech stack
      if (query) {
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesTech = project.tech.some((t) => t.toLowerCase().includes(query));
        return matchesTitle || matchesDesc || matchesTech;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedTech]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedTech('');
  };

  const isFiltered = searchQuery.trim() !== '' || selectedCategory !== 'All' || selectedTech !== '';

  return (
    <Section id="projects" title="Featured Projects" subtitle="My Masterpieces">
      {/* Interactive Search & Filter Control Station */}
      <div className="mb-10 space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Real-Time Search Bar */}
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-tertiary transition-colors">
              <Search className="w-4 h-4 stroke-[2.2]" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by title, keyword, or tech stack (e.g. Next.js, Stripe, MongoDB)..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-surface-container/60 border border-foreground/10 text-foreground placeholder:text-on-surface-variant/60 text-sm focus:outline-none focus:border-tertiary/60 focus:ring-2 focus:ring-tertiary/20 backdrop-blur-xl transition-all shadow-inner"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-on-surface-variant hover:text-foreground transition-colors cursor-pointer"
                title="Clear query"
              >
                <span className="p-1 rounded-full bg-foreground/5 hover:bg-foreground/10">
                  <X className="w-3.5 h-3.5" />
                </span>
              </button>
            )}
          </div>

          {/* Results Counter & Reset Button */}
          <div className="flex items-center justify-between md:justify-end gap-3 text-xs font-mono text-on-surface-variant px-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-foreground/5 border border-foreground/5">
              <Sparkles className="w-3.5 h-3.5 text-tertiary" />
              Showing <strong className="text-display">{filteredProjects.length}</strong> of {projects.length}
            </span>

            {isFiltered && (
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-tertiary hover:text-display bg-tertiary/10 hover:bg-tertiary/20 border border-tertiary/20 transition-all cursor-pointer"
              >
                <X className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Category Pills & Quick Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-on-surface-variant/70 mr-1">
            <Filter className="w-3 h-3" />
            <span>Category:</span>
          </div>

          {categories.map(({ name, count }) => {
            const isActive = selectedCategory === name;
            return (
              <button
                key={name}
                onClick={() => setSelectedCategory(name)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'text-display bg-foreground/15 border border-tertiary/40 shadow-sm'
                    : 'text-on-surface-variant hover:text-foreground bg-foreground/5 hover:bg-foreground/10 border border-foreground/5'
                }`}
              >
                <span>{name}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-foreground/10 border border-foreground/10 text-on-surface-variant">
                  {count}
                </span>
              </button>
            );
          })}

          {selectedTech && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-tertiary/15 border border-tertiary/30 text-tertiary">
              <span>Tech: {selectedTech}</span>
              <button
                onClick={() => setSelectedTech('')}
                className="hover:text-display transition-colors cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Projects Display Grid with Framer Motion layout animations */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const isMatchQuery = (term) =>
              searchQuery.trim() && term.toLowerCase().includes(searchQuery.trim().toLowerCase());

            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -20 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25) }}
                className="h-full flex flex-col"
              >
                <SpotlightCard
                  className="border border-foreground/10 flex flex-col h-full hover:border-primary/30 overflow-hidden bg-surface-container/40 rounded-2xl backdrop-blur-md transition-all duration-300"
                  spotlightColor={idx % 2 === 0 ? 'rgba(208, 188, 255, 0.1)' : 'rgba(0, 219, 231, 0.1)'}
                >
                  {/* Project Preview Image Grid Container */}
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-black border border-foreground/5 group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                    {/* Category Tag Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/90">
                        {project.category || 'Full Stack'}
                      </span>
                    </div>

                    {/* Corner ticks */}
                    <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-foreground/30 pointer-events-none" />
                    <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-foreground/30 pointer-events-none" />
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col text-left flex-1">
                    <h3 className="text-xl font-display font-bold text-display mb-3 tracking-tight flex items-center justify-between">
                      <span>{project.title}</span>
                    </h3>

                    <p className="text-sm font-light text-on-surface-variant leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges List with interactive click-to-filter */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tag) => {
                        const isHighlighted = isMatchQuery(tag);
                        const isCurrentFilter = selectedTech.toLowerCase() === tag.toLowerCase();

                        return (
                          <button
                            key={tag}
                            onClick={() => setSelectedTech(isCurrentFilter ? '' : tag)}
                            title={`Filter by ${tag}`}
                            className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                              isHighlighted || isCurrentFilter
                                ? 'bg-tertiary/20 text-tertiary border border-tertiary/40 font-bold shadow-sm'
                                : 'bg-foreground/5 border border-foreground/10 text-on-surface-variant hover:border-foreground/25 hover:text-foreground'
                            }`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-foreground/10 mt-auto">
                    <MagneticButton>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-on-surface-variant hover:text-display transition-colors duration-300"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        Codebase
                      </a>
                    </MagneticButton>

                    <MagneticButton>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-tertiary hover:text-display transition-colors duration-300 ml-auto"
                      >
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </MagneticButton>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty Search State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-12 text-center rounded-3xl bg-surface-container/30 border border-foreground/10 backdrop-blur-md max-w-xl mx-auto my-8"
        >
          <div className="w-14 h-14 mx-auto rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-on-surface-variant mb-4">
            <FolderGit2 className="w-6 h-6 stroke-[1.8]" />
          </div>

          <h4 className="text-lg font-display font-bold text-display mb-2">
            No matching projects found
          </h4>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
            We couldn't find any projects matching &ldquo;
            <span className="text-tertiary font-semibold">{searchQuery || selectedTech}</span>
            &rdquo;. Try another search keyword like &ldquo;Next.js&rdquo;, &ldquo;MongoDB&rdquo;, &ldquo;Stripe&rdquo;, or reset filters.
          </p>

          <button
            onClick={handleClearFilters}
            className="px-5 py-2.5 rounded-xl bg-tertiary text-background font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2"
          >
            <X className="w-3.5 h-3.5" />
            Reset All Filters
          </button>
        </motion.div>
      )}
    </Section>
  );
}
