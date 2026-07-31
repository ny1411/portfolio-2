"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal as TerminalIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type HistoryItem = {
  type: "input" | "output";
  text: React.ReactNode;
};

const COMMANDS = {
  help: "Available commands: help, about, experience, projects, resume, spidy, clear, exit",
  about: "Navigating to About...",
  experience: "Navigating to Experience...",
  projects: "Navigating to Projects...",
  resume: "Navigating to Resume...",
  spidy: "Navigating to another universe...",
  whoami: "visitor",
  pwd: "/home/visitor",
  ls: "about  experience  projects  resume",
  date: new Date().toString(),
  echo: (args: string[]) => args.join(" "),
};

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "output", text: "Welcome to Spider terminal." },
    { type: "output", text: "Type 'help' to see available commands." },
  ]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Avoid triggering when user is typing in an input field
      const activeElement = document.activeElement;
      const isInputFocused =
        activeElement?.tagName === "INPUT" ||
        activeElement?.tagName === "TEXTAREA" ||
        activeElement?.getAttribute("contenteditable") === "true";

      if (e.key === "k" && !e.metaKey && !e.ctrlKey && !isInputFocused) {
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
    document.addEventListener("toggle-terminal", toggleEvent);

    return () => {
      document.removeEventListener("keydown", down);
      document.removeEventListener("toggle-terminal", toggleEvent);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, { type: "input", text: trimmed }]);

    const args = trimmed.split(" ").filter(Boolean);
    const command = args[0].toLowerCase();
    const commandArgs = args.slice(1);

    if (command === "clear") {
      setHistory([]);
      return;
    }

    if (command === "exit") {
      setIsOpen(false);
      return;
    }

    let output: React.ReactNode = `Command not found: ${command}. Type 'help' to see available commands.`;

    if (command in COMMANDS) {
      const cmdHandler = COMMANDS[command as keyof typeof COMMANDS];
      if (typeof cmdHandler === "function") {
        output = cmdHandler(commandArgs);
      } else {
        output = cmdHandler;
      }
    }

    setHistory((prev) => [...prev, { type: "output", text: output }]);

    // Handle navigation
    if (command === "about") {
      setTimeout(() => { router.push("/#about"); setIsOpen(false); }, 500);
    } else if (command === "experience") {
      setTimeout(() => { router.push("/#experience"); setIsOpen(false); }, 500);
    } else if (command === "projects") {
      setTimeout(() => { router.push("/#projects"); setIsOpen(false); }, 500);
    } else if (command === "resume") {
      setTimeout(() => { window.open(process.env.NEXT_PUBLIC_RESUME_URL, "_blank"); }, 500);
    } else if (command === "spidy") {
      setTimeout(() => { window.open(process.env.NEXT_PUBLIC_SPIDY_PORTFOLIO_URL, "_blank"); }, 500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[200] bg-bg-primary/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[10%] md:top-[20%] left-1/2 -translate-x-1/2 z-[201] w-full max-w-2xl p-4"
          >
            <div className="bg-[#111111] border border-[#333] rounded-lg overflow-hidden flex flex-col shadow-2xl font-mono text-sm text-[#e5e5e5]">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#222] border-b border-[#333]">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-text-secondary" />
                  <span className="text-xs text-text-secondary">visitor@portfolio:~</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-md hover:bg-[#333] text-text-secondary transition-colors duration-200"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div
                ref={scrollRef}
                className="flex-1 max-h-[50vh] min-h-[300px] overflow-y-auto p-4 space-y-2 cursor-text"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((item, i) => (
                  <div key={i} className="leading-relaxed">
                    {item.type === "input" ? (
                      <div>
                        <span className="text-red-500">visitor@portfolio</span>
                        <span className="text-blue-400">~/</span>
                        <span className="text-white">$ </span>
                        {item.text}
                      </div>
                    ) : (
                      <div className="text-gray-300 break-words whitespace-pre-wrap">{item.text}</div>
                    )}
                  </div>
                ))}

                <div className="flex items-center">
                  <span className="text-red-500">visitor@portfolio</span>
                  <span className="text-blue-400">~/</span>
                  <span className="text-white">$ </span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 ml-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                    autoFocus
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
