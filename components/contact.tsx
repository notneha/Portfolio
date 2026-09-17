"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Copy, Check } from "lucide-react";
import { personal } from "@/data/resume";
import { SectionHeading } from "./section-heading";

const contactLinks = [
  { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: personal.phone, href: `tel:${personal.phone.replace(/[^0-9+]/g, "")}` },
  { icon: Linkedin, label: personal.linkedinLabel, href: personal.linkedin },
  { icon: Github, label: personal.githubLabel, href: personal.github },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — user can still click the mailto link.
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend wired up — this form is presentation-ready. Connect it to a
    // service like Formspree or Resend via NEXT_PUBLIC_CONTACT_FORM_ENDPOINT.
    setStatus("sent");
  };

  return (
    <section id="contact" className="section-shell py-24 sm:py-32">
      <SectionHeading
        eyebrow="07 / Contact"
        title="Let's build something"
        description="Open to AI engineering roles, RAG/LLM projects, and collaborations."
      />

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Icon size={16} className="shrink-0 text-accent" />
              <span className="truncate">{label}</span>
            </a>
          ))}

          <button
            onClick={copyEmail}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-line px-4 py-3 font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Email copied" : "Copy email address"}
          </button>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className="glass space-y-4 rounded-2xl p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-line bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-line bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-line bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              placeholder="Tell me about the role or project..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-base transition-transform hover:scale-[1.02]"
          >
            Send message
          </button>

          {status === "sent" && (
            <p className="font-mono text-xs text-accent" role="status">
              Message ready — connect a form endpoint in .env to deliver it.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
