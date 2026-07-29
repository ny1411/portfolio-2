import { resumeContent } from "@/resumeContent";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-20">
      <HeroSection content={resumeContent.resumePages[0]} />
    </div>
  );
}
