import { Card } from "@/components/ui/Card";
import { TechPill } from "@/components/ui/TechPill";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { WorkExperience } from "@/types";

interface ExperienceTimelineProps {
  experiences: WorkExperience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="scroll-mt-32 max-w-4xl">
      <h2 className="text-3xl font-bold font-heading mb-10 tracking-tight text-text-primary">
        Experience
      </h2>
      <div className="space-y-6 border-l border-white/5 pl-4 ml-2 md:pl-8 md:ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[21px] md:-left-[37px] top-6 h-2 w-2 rounded-full bg-accent-blue/50 ring-4 ring-bg-primary transition-colors group-hover:bg-accent-blue" />
            
            <Card className="p-6 md:p-8 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors">
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
                    className="inline-flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                  >
                    View details <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
              
              <ul className="list-disc list-outside ml-4 space-y-2 text-text-secondary">
                {exp.body.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.tags.map((tag, i) => (
                  <TechPill key={i}>{tag}</TechPill>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
