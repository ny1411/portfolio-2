import type { ResumePage } from "@/types";

interface AboutSectionProps {
  content: ResumePage;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-32 max-w-3xl">
      <h2 className="text-3xl font-bold font-heading mb-6 tracking-tight text-text-primary">
        {content.title}
      </h2>
      <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
        {content.summary && <p>{content.summary}</p>}
        {content.body && content.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
