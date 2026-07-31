"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest <= 50) {
      setHidden(false);
    } else {
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
    { label: "Resume", href: process.env.NEXT_PUBLIC_RESUME_URL || "" },
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
        <Link
          href={process.env.NEXT_PUBLIC_SPIDY_PORTFOLIO_URL || ""}
          target="_blank" className="group absolute top-0 left-[15%] md:left-[10%] w-14 md:w-20 pointer-events-auto z-10">
          <div
            className="absolute top-20 left-10 md:left-12 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 p-2 text-sm font-mono text-text-secondary bg-bg-primary rounded-lg z-10 whitespace-nowrap border border-border shadow-lg">
            Change universe?
          </div>
          <Image
            src="/hanging-spider.png"
            alt="Hanging Spider"
            width={60}
            height={90}
            className="w-full h-auto chromatic-aberration"
          />
        </Link>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-heading font-bold text-lg text-text-primary tracking-tight">
            nyc
          </span>
        </Link>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-7 text-sm mr-2">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                target={link.href.startsWith("#") ? "_self" : "_blank"}
                className="font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Terminal Button */}
          <button
            onClick={() => document.dispatchEvent(new Event("toggle-terminal"))}
            className="flex items-center justify-center h-8 px-2.5 rounded-md border border-border bg-bg-primary hover:border-text-secondary transition-colors duration-200 shadow-sm"
            aria-label="Terminal"
          >
            <span className="text-xs font-mono text-text-secondary">K</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-bg-surface-hover text-text-secondary hover:text-text-primary transition-colors duration-200"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />
            ) : (
              <div className="w-4 h-4" /> /* Placeholder */
            )}
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
