import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        navy: { 900: "#071A4A", 700: "#0B2A6F" },
        blue: { 600: "#0A5FC4", 400: "#1E9BE6" },
        sky: { 50: "#F2F7FD" },
        slate: { 600: "#475569" },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #071A4A 0%, #0A5FC4 60%, #1E9BE6 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #F2F7FD 0%, #FFFFFF 100%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(7,26,74,0.04), 0 8px 24px -6px rgba(7,26,74,0.08)",
        lift: "0 2px 4px rgba(7,26,74,0.05), 0 20px 40px -12px rgba(7,26,74,0.18)",
        glass: "0 20px 50px -20px rgba(0,0,0,0.45)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
