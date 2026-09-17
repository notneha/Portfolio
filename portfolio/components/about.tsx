"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personal } from "@/data/resume";
import { SectionHeading } from "./section-heading";

const highlights = [
  {
    label: "Focus",
    detail: "RAG pipelines, LLM systems, and vector search",
  },
  {
    label: "Infrastructure",
    detail: "Cloud-native deployments across AWS, Azure & GCP",
  },
  {
    label: "Approach",
    detail: "Production-minded — pipelines built to ship, not just to demo",
  },
];

export function About() {
  return (
    <section id="about" className="section-shell py-24 sm:py-32">
      <SectionHeading eyebrow="01 / About" title="Building systems that retrieve, reason, and ship." />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-muted"
        >
          {personal.summary} Across internships at{" "}
          <span className="text-ink">Proxima AI</span>,{" "}
          <span className="text-ink">Elevvo</span>, and{" "}
          <span className="text-ink">JS Bank</span>, the throughline has been
          the same: take a messy, real-world dataset or system, and turn it
          into a pipeline that&apos;s reliable enough to hand to stakeholders.
        </motion.p>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl glass"
          >
            <Image
              src="/profile.jpg"
              alt={personal.name}
              fill
              sizes="(min-width: 1024px) 20rem, 80vw"
              className="object-cover"
            />
          </motion.div>

          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                {h.label}
              </p>
              <p className="mt-1 text-sm text-ink">{h.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
