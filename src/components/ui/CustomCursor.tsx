"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  return (
    <motion.div
      ref={cursorRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 0.5 : 0 }}
      className="fixed w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-red-500/80 shadow-xl border border-accent-red/50 pointer-events-none z-[100] hidden md:block mix-blend-difference"
    />
  );
}
