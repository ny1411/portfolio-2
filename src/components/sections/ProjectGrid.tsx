"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TechPill } from "@/components/ui/TechPill";
import type { ProjectItem } from "@/types";

interface ProjectGridProps {
  projects: readonly ProjectItem[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Section label with hairline */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-xs font-bold font-heading tracking-widest uppercase text-text-secondary">
            Projects
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      {/* Project entries — flat, separated by hairlines */}
      <div className="divide-y divide-border">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group py-6 first:pt-0 last:pb-0"
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h3 className="text-lg font-bold font-heading text-text-primary group-hover:text-accent-blue transition-colors duration-200">
                {project.title}
              </h3>
              {project.links.length > 0 && (
                <div className="flex items-center gap-2">
                  {project.links.map((link, i) => {
                    const isCode =
                      link.label.toLowerCase().includes("source") ||
                      link.label.toLowerCase().includes("code") ||
                      link.label.toLowerCase().includes("github");
                    const displayName = isCode ? "Code Link" : "Live Link";
                    return (
                      <Link
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-accent-blue hover:border-text-secondary transition-colors duration-200 border border-border px-2.5 py-1 rounded-full bg-bg-surface/50"
                      >
                        {displayName}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Description / Bullets */}
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-text-secondary text-[15px] leading-relaxed mb-4 max-w-3xl">
              {project.body.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech, i) => (
                <TechPill key={i} className="text-[11px] px-2 py-0.5">
                  {tech}
                </TechPill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
