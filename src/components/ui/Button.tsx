import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue",
          "disabled:opacity-50 disabled:pointer-events-none",
          "h-10 px-4 py-2",
          variant === "primary" &&
            "bg-accent-blue text-white hover:bg-accent-blue-dim",
          variant === "outline" &&
            "border border-border bg-transparent hover:border-text-secondary",
          variant === "ghost" && 
            "bg-transparent hover:bg-bg-surface-hover text-text-secondary hover:text-text-primary",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
