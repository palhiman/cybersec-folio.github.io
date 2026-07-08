"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/profile";

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

export function BlogSection() {
  return (
    <section id="blog" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Blog & Writeups"
          subtitle="Technical articles, tutorials, and security research"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={item}>
              <Card className="group h-full cursor-pointer">
                <div className="mb-3 flex items-center gap-3">
                  <Badge variant="accent">{post.category}</Badge>
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-semibold text-text-primary transition-colors group-hover:text-accent">
                  {post.title}
                </h3>

                <p className="mt-2 text-text-muted">{post.excerpt}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>

                <div className="mt-4 inline-flex items-center gap-1 text-sm text-accent transition-all group-hover:gap-2">
                  Read more <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
