"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const UniverseModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const scheduleNext = () => {
      // Random time between 15s and 45s
      const randomTime = Math.floor(Math.random() * (45000 - 15000 + 1) + 15000);
      timer = setTimeout(() => {
        setIsOpen(true);
      }, randomTime);
    };

    if (!isOpen) {
      scheduleNext();
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSwitch = () => {
    setIsOpen(false);
    window.open(process.env.NEXT_PUBLIC_SPIDY_PORTFOLIO_URL, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg-primary/50 backdrop-blur-xs pointer-events-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              x: [0, -2, 2, -1, 1, 0],
            }}
            transition={{
              duration: 0.3,
              x: { duration: 0.2, repeat: 3, repeatType: "mirror" }
            }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative max-w-md w-full dark:bg-bg-surface bg-bg-primary border border-border p-6 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden"
          >
            {/* Glitch Overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-4">
              <h2 className="text-2xl font-heading font-black tracking-widest text-text-primary uppercase text-glitch mb-2">
                Anomaly Detected
              </h2>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-red to-transparent my-4 opacity-50"></div>

              <p className="text-text-secondary font-mono text-sm leading-relaxed">
                Warning: Multiversal interference detected. A parallel portfolio from another universe is bleeding through the timeline.
              </p>

              <p className="text-accent-red font-mono font-bold text-sm text-glitch-fast">
                Initiate jump?
              </p>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-2 border border-border text-text-secondary rounded hover:bg-bg-surface-hover hover:text-text-primary hover:border-accent-blue transition-all duration-300 font-mono text-sm uppercase"
                >
                  Stay Here
                </button>
                <button
                  onClick={handleSwitch}
                  className="flex-1 px-4 py-2 bg-red-200/30 dark:bg-bg-surface border border-accent-red text-accent-red dark:hover:bg-accent-blue hover:bg-accent-blue hover:text-bg-primary rounded text-glitch font-bold tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] uppercase"
                >
                  Yes
                </button>
              </div>
            </div>

            {/* Decorative Spider-verse elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent-blue"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent-red"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent-red"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent-blue"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
