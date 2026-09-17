"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ?"bg-[#07080D]/85 backdrop-blur-md border-b border-white/10 shadow-lg"
      : "bg-[#07080D]/40 backdrop-blur-sm"
      )}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-white"
        >
          Neha<span className="text-accent">.</span>Zafar
        </a>
        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs font-medium uppercase tracking-wider text-slate-200 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-white hover:text-accent transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-white md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu Dropdown */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-[#07080D]/95 backdrop-blur-md flex flex-col gap-1 border-b border-white/10 px-6 pb-6 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-xs font-medium uppercase tracking-wider text-slate-200 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
