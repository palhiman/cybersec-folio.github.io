"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
  type: "command" | "output" | "blank";
  text: string;
  delay: number;
}

const terminalLines: TerminalLine[] = [
  { type: "command", text: "$ whoami", delay: 0 },
  { type: "output", text: "Harsh", delay: 800 },
  { type: "blank", text: "", delay: 1200 },
  { type: "command", text: "$ cat role.txt", delay: 1400 },
  { type: "output", text: "Cyber Security Engineer", delay: 2200 },
  { type: "blank", text: "", delay: 2600 },
  { type: "command", text: "$ cat focus.conf", delay: 2800 },
  { type: "output", text: "→ Web Application Security", delay: 3600 },
  { type: "output", text: "→ Cloud Security (AWS/Azure)", delay: 4000 },
  { type: "output", text: "→ Python Security Automation", delay: 4400 },
  { type: "output", text: "→ Penetration Testing", delay: 4800 },
  { type: "blank", text: "", delay: 5200 },
  { type: "command", text: "$ uptime --experience", delay: 5400 },
  { type: "output", text: "5+ years in cybersecurity", delay: 6200 },
  { type: "blank", text: "", delay: 6600 },
  { type: "command", text: "$ echo $STATUS", delay: 6800 },
  { type: "output", text: "🟢 Available for opportunities", delay: 7600 },
];

export function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    terminalLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-border bg-bg-surface shadow-2xl shadow-accent/5"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-text-muted">harsh@kali:~</span>
      </div>

      {/* Terminal content */}
      <div className="min-h-[340px] p-5 font-mono text-sm leading-relaxed">
        {terminalLines.slice(0, visibleLines).map((line, index) => (
          <div key={index} className="min-h-[1.5em]">
            {line.type === "command" ? (
              <span className="text-accent">{line.text}</span>
            ) : line.type === "output" ? (
              <span className="text-text-primary">{line.text}</span>
            ) : null}
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="inline-block h-4 w-2 animate-pulse bg-accent" />
        )}
      </div>
    </motion.div>
  );
}
