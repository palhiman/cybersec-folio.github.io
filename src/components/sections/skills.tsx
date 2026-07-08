"use client";

import { motion } from "framer-motion";
import { Code2, Shield, Cloud, Layers, Monitor, Network } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/profile";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Shield,
  Cloud,
  Layers,
  Monitor,
  Network,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-bg-surface/50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Technical Skills"
          subtitle="Tools and technologies I use to secure systems and build solutions"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Object.values(skills).map((category) => {
            const Icon = iconMap[category.icon] || Shield;
            return (
              <motion.div key={category.title} variants={item}>
                <Card className="h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl bg-accent/10 p-2.5">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge key={skill} variant="accent">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
