# Syeda Neha Zafar — Portfolio

A minimal, premium, fully responsive portfolio site built from a single resume-driven data file. Dark mode by default, glassmorphic cards, an animated vector-embedding signature graphic in the hero, and scroll-reveal motion throughout.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS · Framer Motion · lucide-react

## Features

- Hero with animated typing effect, resume download, and a signature animated "vector field" graphic (nodes/edges evoking embeddings — the resume's own domain)
- Dark/light theme toggle (persisted to `localStorage`)
- Sections: About, Skills, Experience (timeline), Projects, Education, Certifications, Contact
- Contact form (front-end ready — wire up an endpoint via `.env`) plus a copy-to-clipboard email button
- Back-to-top button, subtle custom cursor, smooth scrolling, scroll-reveal animation
- SEO: metadata, Open Graph, Twitter Card, JSON-LD structured data, dynamic `sitemap.xml` and `robots.txt`
- Accessible: semantic HTML, ARIA labels, visible focus states, keyboard navigable, `prefers-reduced-motion` respected
- All content lives in one file — `data/resume.ts` — nothing else needs touching to update copy

## Getting started

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm run start
```

## Before you deploy

1. Add `public/resume.pdf` — the file linked from the "Download Resume" button.
2. Add `public/favicon.ico` and `public/og-image.png` (1200×630) for the browser tab icon and social share previews.
3. Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to your real domain.
4. (Optional) Set `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` in `.env` if you connect the contact form to a service like Formspree or Resend — see `.env.example`.

## Deployment

### Vercel

```bash
npm i -g vercel
vercel
```

Or connect the repo at [vercel.com/new](https://vercel.com/new) — zero config needed, Next.js is auto-detected.

### Netlify

```bash
npm i -g netlify-cli
netlify deploy
```

Build command: `npm run build` · Publish directory: `.next` (Netlify's Next.js runtime handles the rest automatically once you install the **Next.js Runtime** plugin, which Netlify offers by default when it detects a Next.js project).

### Railway

1. Create a new project from your GitHub repo at [railway.app](https://railway.app).
2. Railway auto-detects Next.js. Set the start command to `npm run start` if it isn't picked up automatically.
3. No environment variables are required unless you've wired up the contact form.

### Cloudflare Pages

1. Connect the repo in the Cloudflare dashboard.
2. Build command: `npm run build` · Build output directory: `.next`
3. Add the `@cloudflare/next-on-pages` adapter if you want edge runtime output, or deploy as-is for standard Node compatibility mode.

## Folder structure

```
app/                Route files: layout, page, globals.css, sitemap, robots, loading
components/          All UI components (Hero, Navbar, Skills, Experience, etc.)
data/resume.ts       Single source of truth — every section reads from here
lib/utils.ts         Shared helpers (cn class merge utility)
public/              Static assets — add favicon.ico, og-image.png, resume.pdf here
```

## Customization guide

- **Content:** edit `data/resume.ts` only — every component reads from these exports.
- **Colors:** edit the `colors` block in `tailwind.config.ts`. The accent/secondary pair drives gradients, tags, and hover states throughout.
- **Fonts:** swap the Google Fonts imports in `app/layout.tsx` (`Space_Grotesk`, `Inter`, `JetBrains_Mono`).
- **Sections:** each section is a standalone component in `components/`; reorder or remove them in `app/page.tsx`.
- **Contact form:** currently front-end only. Point it at a form backend by reading `process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` inside `components/contact.tsx`'s `onSubmit`.

## Accessibility & performance notes

- All interactive elements have visible focus rings and ARIA labels.
- Animations respect `prefers-reduced-motion`.
- Images (once added) should use `next/image` for automatic optimization — the profile image placeholder in `Hero` is ready to be swapped for one.
- Fonts load via `next/font/google` for zero layout shift and automatic self-hosting.
