import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "border border-border text-text-primary",
        "transition-colors duration-200 hover:border-text-secondary",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";
