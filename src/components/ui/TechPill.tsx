import { cn } from "@/lib/utils";

interface TechPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function TechPill({ className, children, ...props }: TechPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 px-2.5 py-0.5 text-xs font-semibold font-mono text-text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
