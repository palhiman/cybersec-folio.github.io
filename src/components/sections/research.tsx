"use client";

import { motion } from "framer-motion";
import {
  Bug, Cloud, ArrowUpCircle, Search, FileWarning, Box, Server, AlertTriangle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { researchTopics } from "@/data/profile";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bug, Cloud, ArrowUpCircle, Search, FileWarning, Box, Server, AlertTriangle,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ResearchSection() {
  return (
    <section id="research" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Security Research"
          subtitle="Deep dives into cybersecurity topics and threat landscapes"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {researchTopics.map((topic) => {
            const Icon = iconMap[topic.icon] || Bug;
            return (
              <motion.div key={topic.title} variants={item}>
                <Card className="group h-full cursor-pointer">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-xl bg-accent/10 p-3 transition-colors group-hover:bg-accent/20">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <Badge variant="outline">{topic.category}</Badge>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">{topic.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
