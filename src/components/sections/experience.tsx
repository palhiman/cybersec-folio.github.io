"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/profile";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in cybersecurity"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent lg:block" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative lg:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 hidden h-5 w-5 items-center justify-center lg:flex">
                  <div className="h-3 w-3 rounded-full border-2 border-accent bg-bg-primary" />
                </div>

                <Card>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-accent/10 p-3 lg:hidden">
                        <Briefcase className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-text-primary">{exp.role}</h3>
                        <p className="mt-1 text-accent">{exp.company}</p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="mt-4 text-text-muted">{exp.description}</p>

                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((resp) => (
                      <li key={resp} className="flex items-start gap-2 text-sm text-text-muted">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {exp.achievements.length > 0 && (
                    <div className="mt-4 rounded-xl bg-accent/5 p-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-accent">Key Achievements</p>
                      <div className="mt-2 flex flex-wrap gap-3">
                        {exp.achievements.map((ach) => (
                          <span key={ach} className="text-sm text-text-muted">✦ {ach}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
