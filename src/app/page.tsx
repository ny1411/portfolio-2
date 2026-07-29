import { resumeContent } from "@/resumeContent";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-20">
      <HeroSection content={resumeContent.resumePages[0]} />
      <AboutSection content={resumeContent.resumePages[1]} />
      <ExperienceTimeline experiences={resumeContent.workExperiences} />
    </div>
  );
}
