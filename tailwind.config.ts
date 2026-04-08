import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ev-bg":       "#050b14",
        "ev-surface":  "#0a1628",
        "ev-card":     "#0d1f3c",
        "ev-border":   "#1a3a5c",
        "ev-cyan":     "#00e5ff",
        "ev-green":    "#39ff14",
        "ev-amber":    "#ffb800",
        "ev-muted":    "#4a6fa5",
        "ev-text":     "#c8dff5",
      },
      fontFamily: {
        display: ["var(--font-display)", "monospace"],
        body:    ["var(--font-body)", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)",
        "hero-glow":    "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,229,255,0.15), transparent)",
        "card-shine":   "linear-gradient(135deg, rgba(0,229,255,0.06) 0%, transparent 60%)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      animation: {
        "pulse-slow":  "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "float":       "float 6s ease-in-out infinite",
        "scan":        "scan 3s linear infinite",
        "fade-up":     "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        float:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        scan:    { "0%": { backgroundPosition: "0 -100%" }, "100%": { backgroundPosition: "0 200%" } },
        fadeUp:  { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      boxShadow: {
        "ev-glow":       "0 0 30px rgba(0,229,255,0.15), 0 0 60px rgba(0,229,255,0.05)",
        "ev-glow-sm":    "0 0 12px rgba(0,229,255,0.25)",
        "ev-green-glow": "0 0 20px rgba(57,255,20,0.2)",
        "card":          "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
