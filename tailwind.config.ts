import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          void: "var(--color-void)",
          ink: "var(--color-ink)",
          surface: "var(--color-surface)",
        },
        violet: {
          DEFAULT: "#7C5CFF",
          soft: "#A78BFA",
        },
        azure: {
          DEFAULT: "#3E8BFF",
          soft: "#7CB4FF",
        },
        gold: {
          DEFAULT: "var(--color-gold)",
          soft: "var(--color-gold-soft)",
        },
        mist: {
          DEFAULT: "var(--color-mist)",
          muted: "var(--color-mist-muted)",
          faint: "var(--color-mist-faint)",
        },
        line: "var(--color-line)",
        onbrand: "var(--color-on-brand)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "gradient-signature": "var(--gradient-signature)",
        "gradient-luxury": "var(--gradient-luxury)",
        "gradient-radial-glow":
          "radial-gradient(ellipse at center, rgba(124,92,255,0.25) 0%, rgba(62,139,255,0.08) 45%, transparent 70%)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35)",
        glow: "0 0 60px rgba(124,92,255,0.35)",
        "glow-soft": "var(--shadow-glow-soft)",
        "glow-lg": "var(--shadow-glow-lg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
