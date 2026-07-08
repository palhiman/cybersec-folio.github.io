"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/profile";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-bg-surface/50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Security tools and solutions I've built"
        />

        {/* Featured projects */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {featured.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className="flex h-full flex-col">
                {/* Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-accent/10 p-2.5">
                    <FolderGit2 className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-primary">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-text-muted">{project.description}</p>

                {/* Problem */}
                <div className="mt-4 rounded-xl bg-bg-surface p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">Problem Solved</p>
                  <p className="mt-1 text-sm text-text-muted">{project.problem}</p>
                </div>

                {/* Architecture */}
                <div className="mt-3 rounded-xl bg-bg-surface p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">Architecture</p>
                  <p className="mt-1 text-sm text-text-muted">{project.architecture}</p>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="accent">{tag}</Badge>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex gap-3 pt-6">
                  <Button href={project.github} variant="secondary" size="sm">
                    <GithubIcon className="h-4 w-4" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button href={project.demo} variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other projects */}
        {other.length > 0 && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {other.map((project) => (
              <motion.div key={project.title} variants={item}>
                <Card className="flex h-full flex-col">
                  <div className="mb-3 flex items-center gap-3">
                    <FolderGit2 className="h-5 w-5 text-accent" />
                    <h3 className="font-heading text-lg font-semibold text-text-primary">{project.title}</h3>
                  </div>
                  <p className="text-sm text-text-muted">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-3 pt-4">
                    <Button href={project.github} variant="ghost" size="sm">
                      <GithubIcon className="h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
