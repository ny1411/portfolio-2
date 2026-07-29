"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest <= 50) {
      setIsAtTop(true);
      setHidden(false);
    } else {
      setIsAtTop(false);
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex justify-center w-full px-4 pt-4 transition-all duration-300",
        isAtTop ? "py-6" : "py-4"
      )}
    >
      <div 
        className={cn(
          "flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-2xl transition-all duration-300",
          !isAtTop 
            ? "bg-bg-surface/80 backdrop-blur-md border border-white/10 shadow-lg" 
            : "bg-transparent border-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-accent-blue transition-transform group-hover:scale-110" />
          <span className="font-mono font-bold text-text-primary tracking-tight">ny.dev</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-text-secondary">
          <Link href="#about" className="hover:text-text-primary transition-colors">About</Link>
          <Link href="#experience" className="hover:text-text-primary transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-text-primary transition-colors">Projects</Link>
          <Link href="/resume" className="hover:text-text-primary transition-colors">Resume</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 hover:bg-bg-surface-hover hover:border-white/20 transition-all group"
            aria-label="Command Palette"
          >
            <span className="text-[10px] font-mono text-text-secondary group-hover:text-text-primary">⌘K</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
