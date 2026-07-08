"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/icons";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

// Fallback repos for when GitHub API is not available
const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "cloudsentinel",
    description: "Automated cloud security posture management tool for AWS infrastructure",
    html_url: "https://github.com/harsh-security/cloudsentinel",
    stargazers_count: 128,
    forks_count: 34,
    language: "Python",
    updated_at: new Date().toISOString(),
    topics: ["security", "aws", "cloud"],
  },
  {
    id: 2,
    name: "vulnscanner-pro",
    description: "Comprehensive web application vulnerability scanner with OWASP Top 10 detection",
    html_url: "https://github.com/harsh-security/vulnscanner-pro",
    stargazers_count: 256,
    forks_count: 67,
    language: "Python",
    updated_at: new Date().toISOString(),
    topics: ["security", "scanner", "owasp"],
  },
  {
    id: 3,
    name: "threathunter",
    description: "Threat hunting framework correlating logs from multiple sources",
    html_url: "https://github.com/harsh-security/threathunter",
    stargazers_count: 89,
    forks_count: 21,
    language: "Python",
    updated_at: new Date().toISOString(),
    topics: ["threat-hunting", "siem", "detection"],
  },
  {
    id: 4,
    name: "secureci",
    description: "DevSecOps pipeline integration for CI/CD security scanning",
    html_url: "https://github.com/harsh-security/secureci",
    stargazers_count: 172,
    forks_count: 45,
    language: "Go",
    updated_at: new Date().toISOString(),
    topics: ["devsecops", "cicd", "security"],
  },
  {
    id: 5,
    name: "phishguard",
    description: "AI-powered phishing detection analyzing emails, URLs, and attachments",
    html_url: "https://github.com/harsh-security/phishguard",
    stargazers_count: 310,
    forks_count: 78,
    language: "Python",
    updated_at: new Date().toISOString(),
    topics: ["phishing", "machine-learning", "email-security"],
  },
  {
    id: 6,
    name: "netrecon",
    description: "Network reconnaissance toolkit for passive and active security scanning",
    html_url: "https://github.com/harsh-security/netrecon",
    stargazers_count: 145,
    forks_count: 38,
    language: "Python",
    updated_at: new Date().toISOString(),
    topics: ["network", "recon", "pentesting"],
  },
];

const langColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#F1E05A",
  TypeScript: "#3178C6",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Shell: "#89E051",
  C: "#555555",
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

export function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);

  useEffect(() => {
    fetch("https://api.github.com/users/harsh-security/repos?sort=updated&per_page=6")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Failed to fetch");
      })
      .then((data: GitHubRepo[]) => {
        if (data.length > 0) setRepos(data);
      })
      .catch(() => {
        // Use fallback repos
      });
  }, []);

  return (
    <section id="github" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Open Source"
          subtitle="My GitHub repositories and contributions to the security community"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {repos.map((repo) => (
            <motion.div key={repo.id} variants={item}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <GithubIcon className="h-4 w-4 text-text-muted" />
                      <h3 className="font-heading font-semibold text-text-primary">
                        {repo.name}
                      </h3>
                    </div>
                    <ExternalLink className="h-4 w-4 text-text-muted" />
                  </div>

                  <p className="mt-3 flex-1 text-sm text-text-muted">
                    {repo.description || "No description available"}
                  </p>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
                    {repo.language && (
                      <div className="flex items-center gap-1">
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: langColors[repo.language] || "#666" }}
                        />
                        {repo.language}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" />
                      {repo.forks_count}
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
