"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { ResearchSection } from "@/components/sections/research";
import { CertificationsSection } from "@/components/sections/certifications";
import { BlogSection } from "@/components/sections/blog";
import { GitHubSection } from "@/components/sections/github";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { BackgroundParticles } from "@/components/background-particles";
import { MouseSpotlight } from "@/components/mouse-spotlight";

export default function HomePage() {
  return (
    <>
      <BackgroundParticles />
      <MouseSpotlight />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <CertificationsSection />
        <BlogSection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
