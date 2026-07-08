"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" style={align === "left" ? { marginLeft: 0 } : {}} />
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted" style={align === "left" ? { marginLeft: 0 } : {}}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
