"use client";

import Section from "./Section";
import SpotlightCard from "./ui/SpotlightCard";
import { techStack } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      skills: techStack.frontend,
      accent: "rgba(208, 188, 255, 0.08)",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Backend & Systems",
      skills: techStack.backend,
      accent: "rgba(173, 198, 255, 0.08)",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Machine Learning & AI",
      skills: techStack.machineLearning,
      accent: "rgba(0, 219, 231, 0.08)",
      color: "from-cyan-500 to-teal-500",
    },
  ];

  const getSkillLevel = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Proficient";
    return "Intermediate";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section
      id="skills"
      title="Skills &amp; Mastery"
      subtitle="Technical Expertise"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <SpotlightCard
              className="border border-foreground/5 p-7 flex flex-col justify-start text-left min-h-[420px] hover:border-foreground/10 transition-colors duration-300"
              spotlightColor={category.accent}
            >
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <h3 className="text-lg font-display font-bold text-display mb-2 flex items-center justify-between">
                  {category.title}
                  <div
                    className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${category.color} animate-pulse`}
                  />
                </h3>
                <div
                  className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`}
                />
              </motion.div>

              {/* Skills List */}
              <motion.div
                className="flex flex-col gap-5 flex-1"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group cursor-default"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-on-surface-variant font-medium">
                          {getSkillLevel(skill.level)}
                        </p>
                      </div>
                    </div>

                    {/* Animated Skill Indicator Bar */}
                    <div className="h-2 w-full bg-foreground/8 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "100%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          ease: [0.16, 1, 0.3, 1],
                          delay: index * 0.08,
                        }}
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                        style={{
                          boxShadow: `0 0 12px rgba(${category.color === "from-purple-500 to-pink-500" ? "168, 85, 247" : category.color === "from-blue-500 to-cyan-500" ? "59, 130, 246" : "34, 211, 238"}, 0.4)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
