import { resumeContent } from "@/resumeContent";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* 
        Fixed vertical border lines that span the entire height of the page.
        This frames the central content area, leaving the left/right margins to show the body's diagonal pattern.
      */}
      <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1024px] border-x border-border pointer-events-none z-0 hidden md:block" />

      {/* Main content z-index to stay above the fixed lines */}
      <div className="relative z-10 w-full flex flex-col items-center pt-14">
        
        {/* Separator */}
        <div className="w-full border-b border-border" />

        {/* Hero + Profile */}
        <div className="w-full max-w-[1024px] bg-bg-primary md:border-x border-border">
          <HeroSection />
        </div>

        {/* Separator */}
        <div className="w-full h-8 md:h-12 border-y border-border" />

        {/* About */}
        <section id="about" className="w-full max-w-[1024px] bg-bg-primary md:border-x border-border p-8 md:p-20 scroll-mt-24">
          <AboutSection content={resumeContent.resumePages[1]} />
        </section>

        {/* Separator */}
        <div className="w-full h-8 md:h-12 border-y border-border" />

        {/* Experience */}
        <section id="experience" className="w-full max-w-[1024px] bg-bg-primary md:border-x border-border p-8 md:p-20 scroll-mt-24">
          <ExperienceTimeline experiences={resumeContent.workExperiences} />
        </section>

        {/* Separator */}
        <div className="w-full h-8 md:h-12 border-y border-border" />

        {/* Projects */}
        <section id="projects" className="w-full max-w-[1024px] bg-bg-primary md:border-x border-border p-8 md:p-20 scroll-mt-24">
          <ProjectGrid projects={resumeContent.projectItems} />
        </section>
        
        {/* Separator Bottom */}
        <div className="w-full h-8 md:h-12 border-t border-border" />
      </div>
    </div>
  );
}
