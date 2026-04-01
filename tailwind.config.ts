import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#d9a21b",
          foreground: "#1a1a1a",
        },
      },
      boxShadow: {
        soft: "0 10px 30px -18px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
