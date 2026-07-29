import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-white/5 bg-bg-surface text-text-primary shadow-sm",
        "transition-all duration-250 ease-out hover:bg-bg-surface-hover hover:-translate-y-1 hover:border-white/10",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";
