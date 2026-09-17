"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/resume";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="section-shell py-24 sm:py-32">
      <SectionHeading
        eyebrow="02 / Skills"
        title="Technical toolkit"
        description="Grouped by where each tool actually gets used — from model to pipeline to production."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-lift rounded-2xl p-6 transition-colors hover:border-accent/40"
          >
            <h3 className="font-display text-base font-semibold text-accent">
              {group.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-[11px] text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
