"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { personal, heroRoles } from "@/data/resume";
import { VectorField } from "./vector-field";
import Image from "next/image";

function useTypewriter(words: readonly string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length] ?? "";
    const speed = deleting ? 40 : 80;
    const pause = 1400;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(heroRoles);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-vector-gradient" aria-hidden="true" />
      <VectorField />

      <div className="section-shell relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-6"
          >
            {personal.location} · Available for opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {personal.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient">
              {personal.name.split(" ").slice(-1)}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 flex h-9 items-center font-mono text-xl font-medium text-accent sm:text-2xl"
          >
            <span>{typed}</span>
            <span className="ml-1 inline-block h-5 w-[2px] animate-blink bg-accent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            {personal.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-secondary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#07080D] shadow-[0_8px_30px_-10px_rgba(94,234,212,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(94,234,212,0.7)]"
            >
              <FileDown size={15} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-mono text-xs uppercase tracking-wider hover:border-accent/50 transition-colors"
            >
              <Mail size={15} />
              Contact
            </a>
            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-full glass hover:text-accent hover:border-accent/50 transition-colors"
              >
                <Github size={17} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-full glass hover:text-accent hover:border-accent/50 transition-colors"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 animate-drift rounded-[2rem] bg-gradient-to-br from-accent/25 via-secondary/20 to-transparent blur-2xl" />

          {/* rotating gradient ring */}
          <div
            className="absolute inset-[-1px] animate-spin rounded-[2rem] opacity-70"
            style={{
              background:
                "conic-gradient(from 0deg, #5eead4, #8b7cf6, transparent 40%, #5eead4)",
              animationDuration: "14s",
              padding: 1,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
            aria-hidden="true"
          />

          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] glass">
            <Image
              src="/Avatar.jfif"
              alt={personal.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover transition-transform duration-500 hover:scale-105"
             />

            {/* orbiting accent nodes */}
            <span
              className="absolute h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(94,234,212,0.6)] z-10"
              style={{ top: "12%", left: "18%" }}
              aria-hidden="true"
            />
            <span
              className="absolute h-2 w-2 rounded-full bg-secondary shadow-[0_0_10px_2px_rgba(139,124,246,0.55)] z-10"
              style={{ bottom: "16%", right: "14%" }}
              aria-hidden="true"
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
}
