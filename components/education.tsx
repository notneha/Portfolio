"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/resume";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section id="education" className="section-shell py-24 sm:py-32">
      <SectionHeading eyebrow="05 / Education" title="Academic background" />

      <div className="space-y-5">
        {education.map((ed, i) => (
          <motion.div
            key={ed.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <GraduationCap size={18} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  {ed.degree}
                </h3>
                <p className="text-sm text-muted">{ed.institution}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
              <span className="font-mono text-xs text-accent">
                {ed.duration}
              </span>
              {ed.detail && (
                <span className="font-mono text-xs text-muted">{ed.detail}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
