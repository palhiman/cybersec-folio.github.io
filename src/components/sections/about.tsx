"use client";

import { motion } from "framer-motion";
import { Shield, BookOpen, Lightbulb, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";

const valueIcons = [Shield, BookOpen, Lightbulb, Zap];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="About Me"
          subtitle="Securing digital landscapes with engineering excellence"
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4 text-lg leading-relaxed text-text-muted">
              {profile.about.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-accent">{profile.yearsExperience}+</div>
                <div className="mt-1 text-sm text-text-muted">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-accent">200+</div>
                <div className="mt-1 text-sm text-text-muted">Vulnerabilities Found</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-accent">50+</div>
                <div className="mt-1 text-sm text-text-muted">Pentests Completed</div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 lg:col-span-2"
          >
            {profile.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <Card key={value.title} className="flex items-start gap-4">
                  <div className="rounded-xl bg-accent/10 p-2.5">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary">{value.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">{value.description}</p>
                  </div>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
