"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function RainEffect() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const drops = Array.from({ length: 120 }).map((_, i) => ({
    id: i,
    left: Math.random() * 120 - 10, // Start slightly off-screen to handle wind drift
    width: Math.random() * 1 + 0.5, // 1px to 2px
    height: Math.random() * 20 + 5, // 15px to 35px
    duration: Math.random() * 0.4 + 0.4, // 0.4s to 0.8s (fast falling)
    delay: Math.random() * -5, // random negative delay
    opacity: Math.random() * 0.3 + 0, // low opacity
    xDrift: 60+ Math.random() * -20, // Consistent wind drift to the right
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute rounded-full bg-blue-300"
          style={{
            width: drop.width,
            height: drop.height,
            left: `${drop.left}%`,
            top: -50, // start above the banner
            opacity: drop.opacity,
            boxShadow: `0 0 3px rgba(147, 197, 253, 0.4)`,
          }}
          animate={{
            y: [0, 600], // Fall down past the banner
            x: [0, drop.xDrift], // Drift right with the wind
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
