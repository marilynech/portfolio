import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "#559fd6",
        night: {
          900: "#0b1320",
          800: "#27466c",
        },
        moon: "#f3df92",
      },
      fontFamily: {
        sans: ["var(--font-google-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(85,159,214,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
