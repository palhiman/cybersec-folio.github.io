"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-bg-surface text-text-muted border border-border",
    accent: "bg-accent/10 text-accent border border-accent/20",
    outline: "border border-border text-text-muted",
  };

  return (
    <span className={cn("inline-flex items-center rounded-lg px-3 py-1 text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}
