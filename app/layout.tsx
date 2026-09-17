import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { BackToTop } from "@/components/back-to-top";
import { personal } from "@/data/resume";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://syedanehazafar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${personal.name} — ${personal.title}`,
  description: personal.summary,
  keywords: [
    "AI Engineer",
    "RAG",
    "LLM",
    "Machine Learning",
    "Vector Databases",
    "LangChain",
    "Conversational AI",
    "PII Detection",
    "GLiNER",
    "Python Developer",
    "Karachi",
    personal.name,
  ],
  authors: [{ name: personal.name, url: personal.github }],
  creator: personal.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personal.name} — ${personal.title}`,
    description: personal.summary,
    siteName: `${personal.name} Portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.title}`,
    description: personal.summary,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.title,
  url: siteUrl,
  email: personal.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [personal.linkedin, personal.github],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-noise bg-vignette`}
      >
        <ThemeProvider>
          <CustomCursor />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
