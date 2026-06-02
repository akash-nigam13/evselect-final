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
        // ── Core surfaces (deep ink charcoal) ──
        "ev-bg": "#07080B",
        "ev-surface": "#0D0F15",
        "ev-card": "#13151E",
        "ev-card-2": "#181B26",
        "ev-border": "#242838",
        "ev-text": "#E8ECF5",
        "ev-muted": "#8A93A8",

        // ── Brand accents (electric teal + iris violet + volt) ──
        // Legacy names kept (remapped) so older components stay cohesive:
        "ev-cyan": "#26E0C4", // primary (teal)
        "ev-green": "#8B7BFF", // secondary (iris violet)
        "ev-amber": "#FFC247", // highlight / warning
        // Clear new semantic names:
        brand: "#26E0C4",
        "brand-deep": "#10B8A0",
        iris: "#8B7BFF",
        "iris-deep": "#6D5CF0",
        volt: "#C6F94E",
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-deva)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "var(--font-deva)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(38,224,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(38,224,196,0.05) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 70% 55% at 50% -10%, rgba(38,224,196,0.16), transparent 60%)",
        "iris-glow":
          "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(139,123,255,0.14), transparent 60%)",
        "brand-gradient": "linear-gradient(120deg, #26E0C4 0%, #8B7BFF 100%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
        marquee: "marquee 38s linear infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "glow-pulse": "glowPulse 3.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        "ev-glow":
          "0 0 36px rgba(38,224,196,0.18), 0 0 70px rgba(38,224,196,0.06)",
        "ev-glow-sm": "0 0 14px rgba(38,224,196,0.3)",
        "ev-green-glow": "0 0 24px rgba(139,123,255,0.22)",
        "iris-glow": "0 0 30px rgba(139,123,255,0.25)",
        card: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        "card-lift":
          "0 18px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(38,224,196,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
