"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SnowEffect() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const flakes = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100, // start anywhere vertically
    size: Math.random() * 2.5 + 0.5, // 1px to 3.5px
    duration: Math.random() * 6 + 15, // 4s to 10s for windy effect
    delay: Math.random() * -15, // random negative delay to start mid-animation
    opacity: Math.random() * 0.6 + 0.4, // 0.4 to 1.0 opacity
    yDrift: (Math.random() - 0.2) * 700, // Mostly drifts down, sometimes up
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {flakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-blue-50"
          style={{
            width: flake.size,
            height: flake.size,
            top: `${flake.top}%`,
            left: 0, // start at left edge (transform takes it from -5vw to 105vw)
            opacity: flake.opacity,
            boxShadow: `0 0 ${flake.size * 2}px ${flake.size / 2}px rgba(255, 67, 67, 0.8)`,
          }}
          animate={{
            x: ["-5vw", "105vw"],
            y: [0, flake.yDrift],
          }}
          transition={{
            duration: flake.duration,
            repeat: Infinity,
            delay: flake.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
