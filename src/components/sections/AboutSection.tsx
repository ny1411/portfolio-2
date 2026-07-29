"use client";

import { motion } from "framer-motion";
import type { ResumePage } from "@/types";

interface AboutSectionProps {
  content: ResumePage;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Section label with hairline — matches xevrion */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs font-bold font-heading tracking-widest uppercase text-text-secondary">
          About
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Bio text */}
      <div className="space-y-4 text-text-secondary text-[15px] leading-relaxed max-w-3xl">
        {content.summary && <p>{content.summary}</p>}
        {content.body && content.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Skills highlights */}
      {content.highlights && content.highlights.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {content.highlights.map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-mono text-text-secondary"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
