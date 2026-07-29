"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed right-4 md:right-8 top-1/3 bottom-1/3 w-[2px] bg-white/5 z-40 hidden md:block rounded-full overflow-hidden">
      <motion.div
        className="w-full bg-accent-blue origin-top rounded-full"
        style={{
          scaleY: scrollYProgress,
          height: "100%",
          boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
        }}
      />
    </div>
  );
}
