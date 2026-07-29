"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg-primary pointer-events-auto"
        >
          <div className="relative flex flex-col items-center">
            {/* The Web Thread */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-[1px] bg-white/20 absolute -top-[120px] left-1/2 -translate-x-1/2"
            />
            
            {/* The Spider (Terminal Icon as Spider surrogate) */}
            <motion.div
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 p-4 bg-bg-surface border border-white/10 rounded-2xl shadow-xl shadow-accent-blue/10 mb-6"
            >
              <Terminal className="w-8 h-8 text-accent-blue" />
            </motion.div>
            
            {/* Logo Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="font-mono font-bold text-2xl text-text-primary tracking-tight"
            >
              ny.dev
            </motion.div>
            
            {/* Loading text / Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="mt-4 text-xs font-mono text-text-secondary uppercase tracking-widest"
            >
              Establishing connection...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
