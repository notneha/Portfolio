"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/resume";
import { SectionHeading } from "./section-heading";

export function Certifications() {
  return (
    <section id="certifications" className="section-shell py-24 sm:py-32">
      <SectionHeading
        eyebrow="06 / Certifications"
        title="Continued learning"
        description="Coursework and credentials completed alongside internships and coursework."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.issuer}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-lift rounded-2xl p-6 transition-colors hover:border-accent/40"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <Award size={16} />
              </span>
              <h3 className="font-display text-base font-semibold">
                {cert.issuer}
              </h3>
            </div>
            <ul className="mt-4 space-y-2">
              {cert.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
