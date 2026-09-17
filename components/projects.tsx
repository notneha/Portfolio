"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects, personal } from "@/data/resume";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="projects" className="section-shell py-24 sm:py-32">
      <SectionHeading
        eyebrow="04 / Projects"
        title="Featured work"
        description="Two projects that went from research question to working model."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass glass-lift flex flex-col rounded-2xl p-7 transition-colors hover:border-accent/40"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-xl font-semibold">
                {project.title}
              </h3>
              <span className="whitespace-nowrap font-mono text-[11px] text-accent">
                {project.duration}
              </span>
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-secondary">
              {project.subtitle}
            </p>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Github size={13} /> Code
              </a>
              <span
                className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-muted/50"
                title="Live demo not available"
              >
                <ExternalLink size={13} /> Demo
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
