"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type WebPosition = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  scale: number;
  rotate: number;
};

export function SpiderWebs() {
  const [mounted, setMounted] = useState(false);
  const [positions, setPositions] = useState<WebPosition[]>([]);

  useEffect(() => {
    // Generate random positions on the client only to avoid hydration mismatches
    const numWebs = Math.floor(Math.random() * 2) + 1; // 1 to 3 webs
    const newPositions: WebPosition[] = [];
    
    for (let i = 0; i < numWebs; i++) {
      // random edge: 0 = top, 1 = right, 2 = bottom, 3 = left
      const edge = Math.floor(Math.random() * 4);
      const pos: WebPosition = {
        scale: 0.5 + Math.random() * 0.8,
        rotate: Math.random() * 360,
      };

      if (edge === 0) {
        pos.top = "0%";
      } else if (edge === 1) {
        pos.right = "0%";
      } else if (edge === 2) {
        pos.bottom = "0%";
      } else {
        pos.left = "0%";
      }
      
      newPositions.push(pos);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPositions(newPositions);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[0] overflow-hidden">
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            ...(pos.top ? { top: pos.top } : {}),
            ...(pos.bottom ? { bottom: pos.bottom } : {}),
            ...(pos.left ? { left: pos.left } : {}),
            ...(pos.right ? { right: pos.right } : {}),
            transform: `translate(-50%, -50%) scale(${pos.scale}) rotate(${pos.rotate}deg)`,
            opacity: 0.4,
          }}
        >
          <Image
            src="/spider-web.png"
            alt="Spider Web"
            width={250}
            height={250}
            priority={i < 2}
          />
        </div>
      ))}
    </div>
  );
}
