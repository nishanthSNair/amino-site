import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          DEFAULT: "#B5886A",
          light: "#D9BFA8",
          soft: "#EADFD1",
          deep: "#8E6448",
        },
        sage: {
          DEFAULT: "#8A9A7B",
          deep: "#4F5C42",
          faint: "#E9EEE3",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          deep: "#F1EBE0",
        },
        charcoal: {
          DEFAULT: "#2A2A28",
          soft: "#4A4A46",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        xl2: "20px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(42,42,40,0.04), 0 8px 24px -12px rgba(42,42,40,0.08)",
        lift: "0 2px 6px rgba(42,42,40,0.05), 0 24px 48px -20px rgba(42,42,40,0.14)",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-14px,0) scale(1.03)" },
        },
        kenburns: {
          "0%": { transform: "scale(1.05) translate3d(0,0,0)" },
          "50%": { transform: "scale(1.15) translate3d(-2%,-1%,0)" },
          "100%": { transform: "scale(1.05) translate3d(0,0,0)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 14s ease-in-out infinite",
        kenburns: "kenburns 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
