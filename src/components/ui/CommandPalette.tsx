"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, Briefcase, Code, FileText, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { id: "home", title: "Home", icon: Home, href: "/" },
  { id: "about", title: "About", icon: FileText, href: "/#about" },
  { id: "experience", title: "Experience", icon: Briefcase, href: "/#experience" },
  { id: "projects", title: "Projects", icon: Code, href: "/#projects" },
  { id: "resume", title: "Resume", icon: FileText, href: "/resume" },
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    
    // Add custom event listener for manual trigger (from Navbar)
    const toggleEvent = () => setIsOpen((open) => !open);
    document.addEventListener("toggle-command-palette", toggleEvent);
    
    return () => {
      document.removeEventListener("keydown", down);
      document.removeEventListener("toggle-command-palette", toggleEvent);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
      if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault();
        router.push(filteredItems[selectedIndex].href);
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, router]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[200] bg-bg-primary/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[201] w-full max-w-lg p-4"
          >
            <div className="bg-bg-surface border border-accent-blue/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              <div className="flex items-center px-4 py-3 border-b border-white/5">
                <Search className="w-5 h-5 text-text-secondary mr-3" />
                <input
                  ref={inputRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search NY.OSCORP database..."
                  className="flex-1 bg-transparent border-none outline-none text-text-primary placeholder:text-text-secondary font-mono"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md hover:bg-bg-surface-hover text-text-secondary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="max-h-[300px] overflow-y-auto p-2">
                {filteredItems.length === 0 ? (
                  <div className="p-8 text-center text-text-secondary font-mono text-sm">
                    No results found in database.
                  </div>
                ) : (
                  filteredItems.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          router.push(item.href);
                          setIsOpen(false);
                        }}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left",
                          isSelected
                            ? "bg-accent-blue/10 text-text-primary"
                            : "text-text-secondary hover:bg-bg-surface-hover hover:text-text-primary"
                        )}
                      >
                        <item.icon
                          className={cn(
                            "w-5 h-5",
                            isSelected ? "text-accent-blue" : "text-text-secondary"
                          )}
                        />
                        <span className="font-mono text-sm">{item.title}</span>
                      </button>
                    );
                  })
                )}
              </div>
              
              <div className="px-4 py-2 border-t border-white/5 flex items-center justify-between text-xs font-mono text-text-secondary bg-bg-primary/50">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded bg-bg-surface border border-white/10 text-[10px]">↑</span>
                  <span className="flex items-center justify-center w-5 h-5 rounded bg-bg-surface border border-white/10 text-[10px]">↓</span>
                  <span>Navigate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center px-1.5 h-5 rounded bg-bg-surface border border-white/10 text-[10px]">↵</span>
                  <span>Select</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
