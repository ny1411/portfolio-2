import { cn } from "@/lib/utils";

interface TechPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function TechPill({ className, children, ...props }: TechPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-mono text-text-secondary transition-colors duration-200 hover:border-text-secondary hover:text-text-primary",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
