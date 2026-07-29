"use client";

import { motion } from "framer-motion";
import { TechPill } from "@/components/ui/TechPill";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { WorkExperience } from "@/types";

interface ExperienceTimelineProps {
  experiences: readonly WorkExperience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div>
      {/* Section label with hairline */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex items-center gap-4 mb-8"
      >
        <h2 className="text-xs font-bold font-heading tracking-widest uppercase text-text-secondary">
          Experience
        </h2>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      {/* Experience entries — flat, separated by hairlines */}
      <div className="divide-y divide-border">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group py-6 first:pt-0 last:pb-0"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors duration-200">
                  {exp.title}
                </h3>
                <p className="text-sm font-mono text-text-secondary mt-1">
                  {exp.subtitle}
                </p>
              </div>
              {exp.link && (
                <Link 
                  href={exp.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 shrink-0"
                >
                  View details <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
            
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-text-secondary text-[15px] leading-relaxed">
              {exp.body.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-1.5 mt-4">
              {exp.tags.map((tag, i) => (
                <TechPill key={i} className="text-[11px] px-2 py-0.5">{tag}</TechPill>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
