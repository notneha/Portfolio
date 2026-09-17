"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="section-shell py-24 sm:py-32">
      <SectionHeading
        eyebrow="03 / Experience"
        title="Where the work happened"
        description="Three internships, in order — each one chronological, so the timeline carries real information."
      />

      <div className="relative">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[9px]"
          aria-hidden="true"
        />

        <ol className="space-y-12">
          {experience.map((job, i) => (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 sm:pl-10"
            >
              <span
                className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-base sm:h-[18px] sm:w-[18px]"
                aria-hidden="true"
              />

              <div className="glass glass-lift rounded-2xl p-6 transition-colors hover:border-accent/40 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {job.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-secondary">
                  {job.company}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {job.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
