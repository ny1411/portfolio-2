import { ProjectCard } from "@/components/ui/ProjectCard";
import type { ProjectItem } from "@/types";

interface ProjectGridProps {
  projects: ProjectItem[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section id="projects" className="scroll-mt-32">
      <h2 className="text-3xl font-bold font-heading mb-10 tracking-tight text-text-primary">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
