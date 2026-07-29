"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 w-full flex justify-center pointer-events-none">
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={cn(
          "relative pointer-events-auto w-full max-w-[1024px] flex items-center justify-between px-6 md:px-10 h-14 transition-all duration-200 border-b md:border-x border-border",
          "bg-bg-primary/60 backdrop-blur-sm"
        )}
      >
        {/* Hanging Spider */}
        <div className="absolute top-0 left-[15%] md:left-[10%] w-14 md:w-20 pointer-events-none z-10">
          <Image 
            src="/hanging-spider.png"
            alt="Hanging Spider"
            width={60}
            height={90}
            className="w-full h-auto"
          />
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-heading font-bold text-lg text-text-primary tracking-tight">
            neeraj
          </span>
        </Link>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-7 text-sm mr-2">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Command Palette Button */}
          <button
            className="flex items-center justify-center h-8 px-2.5 rounded-md border border-border bg-bg-primary hover:border-text-secondary transition-colors duration-200 shadow-sm"
            aria-label="Command Palette"
          >
            <span className="text-xs font-mono text-text-secondary">⌘K</span>
          </button>

          {/* Theme Toggle Button (Decorative) */}
          <button
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-bg-surface-hover text-text-secondary hover:text-text-primary transition-colors duration-200"
            aria-label="Toggle Theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
