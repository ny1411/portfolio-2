"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TechPill } from "@/components/ui/TechPill";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import type { WorkExperience } from "@/types";

interface ExperienceTimelineProps {
  experiences: readonly WorkExperience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  // First experience open by default, all toggleable
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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

      {/* Experience entries — accordion panels separated by hairlines */}
      <div className="divide-y divide-border">
        {experiences.map((exp, index) => {
          const isOpen = openIndices.includes(index);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group py-5 first:pt-0 last:pb-0"
            >
              {/* Clickable Header */}
              <div
                onClick={() => toggleIndex(index)}
                className="flex flex-col md:flex-row md:items-start justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex-1">
                  <h3 className="text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors duration-200">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-mono text-text-secondary mt-1">
                    {exp.subtitle}
                  </p>
                </div>

                <div className="flex items-start gap-4 self-start md:self-auto shrink-0">
                  <div className="flex flex-col md:items-end justify-between min-h-[44px]">
                    {exp.period ? (
                      <span className="text-xs font-mono text-text-secondary">
                        {exp.period}
                      </span>
                    ) : (
                      <span className="h-4" aria-hidden="true" />
                    )}
                    {exp.link ? (
                      <Link
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-accent-blue transition-colors duration-200 mt-1"
                      >
                        View details <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <span className="h-4" aria-hidden="true" />
                    )}
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-text-secondary group-hover:text-text-primary p-1 mt-0.5"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 space-y-4">
                      <ul className="list-disc list-outside ml-4 space-y-1.5 text-text-secondary text-[15px] leading-relaxed">
                        {exp.body.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.tags.map((tag, i) => (
                          <TechPill key={i} className="text-[11px] px-2 py-0.5">
                            {tag}
                          </TechPill>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

