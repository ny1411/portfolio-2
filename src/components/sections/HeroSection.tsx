import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import type { ResumePage } from "@/types";

interface HeroSectionProps {
  content: ResumePage;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
      {/* Background / Fog effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary z-10" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[400px] bg-accent-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bg-primary to-transparent z-10" />
      </div>

      <div className="relative z-10 space-y-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-text-primary">
          {content.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl font-light">
          {content.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link href="#projects">
            <MagneticButton className="gap-2 px-6 py-6 text-base">
              View Work <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </Link>
          
          <Link href="/resume">
            <MagneticButton variant="outline" className="gap-2 px-6 py-6 text-base text-text-secondary hover:text-text-primary">
              <Download className="w-4 h-4" /> Resume
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
