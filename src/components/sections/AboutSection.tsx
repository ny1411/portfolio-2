"use client";

import { motion } from "framer-motion";
import { TechPill } from "@/components/ui/TechPill";
import type { ResumePage, SkillsAndStack } from "@/types";

interface AboutSectionProps {
  content: ResumePage;
  skills?: SkillsAndStack;
}

export function AboutSection({ content, skills }: AboutSectionProps) {
  const categories = skills
    ? [
        { label: "Languages", items: skills.languages },
        { label: "Frontend", items: skills.frontend },
        { label: "Backend & APIs", items: skills.backendApis },
        { label: "Databases & Cloud", items: skills.cloudDatabases },
        { label: "DevOps & Tools", items: skills.developerTools },
      ]
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Section label with hairline */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs font-bold font-heading tracking-widest uppercase text-text-secondary">
          About
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Bio text */}
      <div className="space-y-4 text-text-secondary text-[15px] leading-relaxed max-w-3xl">
        {content.summary && <p>{content.summary}</p>}
        {content.body &&
          content.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </div>

      {/* Tech Stack subsection */}
      {categories.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xs font-bold font-heading tracking-widest uppercase text-text-secondary">
              Tech Stack
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-6">
            {categories.map((category) => (
              <div
                key={category.label}
                className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6"
              >
                <span className="text-xs font-mono font-medium text-text-primary sm:w-36 shrink-0 pt-1">
                  {category.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <TechPill key={i} className="text-xs">
                      {skill}
                    </TechPill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

