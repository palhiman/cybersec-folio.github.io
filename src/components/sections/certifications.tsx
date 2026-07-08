"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { certifications } from "@/data/profile";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="absolute inset-0 bg-bg-surface/50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications validating my security expertise"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={item}>
              <Card className="group h-full">
                <div className="flex items-start gap-4">
                  <div
                    className="rounded-xl p-3"
                    style={{ backgroundColor: `${cert.color}15` }}
                  >
                    <Award className="h-6 w-6" style={{ color: cert.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-text-primary">{cert.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">{cert.issuer}</p>
                    <p className="mt-1 text-xs text-text-muted">Issued {cert.date}</p>
                  </div>
                </div>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  Verify Credential
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
