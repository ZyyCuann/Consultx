import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101318",
        steel: "#5f6b7a",
        line: "#dbe3ee",
        cloud: "#f6f8fb",
        electric: "#1677ff"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(16, 19, 24, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
