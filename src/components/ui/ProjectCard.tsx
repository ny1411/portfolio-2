"use client";

import { useEffect, useState } from "react";
import { TechPill } from "./TechPill";
import { ExternalLink } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/types";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
            const Icon = isGithub ? GithubIcon : ExternalLink;
            
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
