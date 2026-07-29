"use client";

import { useEffect, useState } from "react";
import { TechPill } from "./TechPill";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/types";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl border border-white/5 bg-bg-surface p-6 md:p-8 transition-all duration-300",
        !isTouchDevice && "hover:-translate-y-1 hover:border-accent-blue/50 hover:shadow-lg hover:shadow-accent-blue/10"
      )}
    >
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold font-heading text-text-primary group-hover:text-accent-blue transition-colors">
          {project.title}
        </h3>
        
        <div className="space-y-3 text-text-secondary">
          {project.body.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      
      <div className="mt-8 space-y-6">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, idx) => (
            <TechPill key={idx}>{tech}</TechPill>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
          {project.links.map((link, idx) => {
            const isGithub = link.label.toLowerCase().includes("source");
            const Icon = isGithub ? Github : ExternalLink;
            
            return (
              <Link
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
