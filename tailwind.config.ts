import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#7B61FF",
          gold: "#EFB818",
          dark: "#0A0A0B",
          card: "#121214",
        },
      },
      fontFamily: {
        sans: ["Noto Sans Khmer", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
