"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Key, Send, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-bg-surface/50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Interested in working together? Let's connect."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-text-muted">
              I&apos;m always open to discussing new opportunities, security challenges,
              or potential collaborations. Feel free to reach out through any of the channels below
              or use the contact form.
            </p>

            <div className="space-y-4">
              <Card hover={false} className="flex items-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-text-primary hover:text-accent transition-colors">
                    {profile.email}
                  </a>
                </div>
              </Card>

              <Card hover={false} className="flex items-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Location</p>
                  <p className="text-text-primary">{profile.location}</p>
                </div>
              </Card>

              <Card hover={false} className="flex items-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3">
                  <Key className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">PGP Key</p>
                  <p className="font-mono text-sm text-text-primary">{profile.pgpKey}</p>
                </div>
              </Card>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-bg-card p-3 text-text-muted transition-all hover:border-accent/30 hover:text-accent"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-bg-card p-3 text-text-muted transition-all hover:border-accent/30 hover:text-accent"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-bg-card p-3 text-text-muted transition-all hover:border-accent/30 hover:text-accent"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card hover={false}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <CheckCircle className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-heading text-xl font-semibold text-text-primary">Message Sent!</h3>
                  <p className="mt-2 text-text-muted">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-muted">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full rounded-xl border border-border bg-bg-surface px-4 py-3 text-text-primary placeholder-text-muted/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-muted">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-xl border border-border bg-bg-surface px-4 py-3 text-text-primary placeholder-text-muted/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text-muted">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full rounded-xl border border-border bg-bg-surface px-4 py-3 text-text-primary placeholder-text-muted/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-muted">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-border bg-bg-surface px-4 py-3 text-text-primary placeholder-text-muted/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
