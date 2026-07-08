"use client";

import { Shield, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { profile, navigation } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-accent" />
              <span className="font-heading text-lg font-bold text-text-primary">
                Harsh<span className="text-accent">.</span>sec
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-text-muted">
              {profile.subtitle}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted transition-colors hover:text-accent"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted transition-colors hover:text-accent"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted transition-colors hover:text-accent"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-text-muted transition-colors hover:text-accent"
                >
                  {profile.email}
                </a>
              </li>
              <li className="text-sm text-text-muted">{profile.location}</li>
              <li className="text-sm text-text-muted font-mono">PGP: {profile.pgpKey}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Harsh. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="rounded-xl border border-border bg-bg-card p-2 text-text-muted transition-all hover:border-accent/30 hover:text-accent"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
