"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Drop {
  id: number;
  left: number;
  width: number;
  height: number;
  duration: number;
  delay: number;
  opacity: number;
  xDrift: number;
}

export function RainEffect() {
  const [drops, setDrops] = useState<Drop[]>([]);
  
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setDrops(Array.from({ length: 120 }).map((_, i) => ({
        id: i,
        left: Math.random() * 120 - 10,
        width: Math.random() * 1 + 0.5,
        height: Math.random() * 20 + 5,
        duration: Math.random() * 0.4 + 0.4,
        delay: Math.random() * -5,
        opacity: Math.random() * 0.3 + 0,
        xDrift: 60 + Math.random() * -20,
      })));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (drops.length === 0) return null;

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
