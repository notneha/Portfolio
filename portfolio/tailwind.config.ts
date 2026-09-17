import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#07080D",
          light: "#F7F8FA",
        },
        surface: {
          DEFAULT: "#0F1119",
          light: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#5EEAD4",
          dim: "#2DD4BF",
        },
        secondary: {
          DEFAULT: "#8B7CF6",
          dim: "#7C6AED",
        },
        ink: {
          DEFAULT: "#F1F5F9",
          light: "#0B0D12",
        },
        muted: {
          DEFAULT: "#8890A6",
          light: "#5B6472",
        },
        line: {
          DEFAULT: "rgba(241,245,249,0.09)",
          light: "rgba(11,13,18,0.09)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "vector-gradient":
          "radial-gradient(circle at 20% 20%, rgba(94,234,212,0.10), transparent 40%), radial-gradient(circle at 80% 0%, rgba(139,124,246,0.12), transparent 45%)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(12px,-16px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
