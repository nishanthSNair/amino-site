import type { Config } from "tailwindcss";

// Gulf Dawn: deep navy brightening through luminous ice-blue to white.
// Gold is reserved for the pen and the Valeo logo.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#051126",
          900: "#0A1E3D",
          800: "#12305A",
          600: "#2A5288",
        },
        ice: {
          50: "#F1FAFF",
          100: "#DDF3FF",
          200: "#B8E7FF",
          300: "#86D6FF",
          400: "#4FC3FF",
          500: "#17A9F5",
        },
        valeo: "#FFB900",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        tile: "32px",
      },
    },
  },
  plugins: [],
};

export default config;
