"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed right-4 md:right-8 top-1/3 bottom-1/3 w-px bg-border z-40 hidden md:block">
      <motion.div
        className="w-full bg-text-secondary origin-top"
        style={{
          scaleY: scrollYProgress,
          height: "100%",
        }}
      />
    </div>
  );
}
