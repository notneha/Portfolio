import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full glass hover:text-accent transition-colors"
          >
            <Github size={15} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full glass hover:text-accent transition-colors"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full glass hover:text-accent transition-colors"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
