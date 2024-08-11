import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cardinal: {
          DEFAULT: "#8C1515",
          dark: "#6B0F0F",
          light: "#B83A3A",
        },
        sandstone: {
          DEFAULT: "#D2C295",
          light: "#F9F6EF",
          dark: "#B6A472",
        },
        palo: {
          verde: "#175E54",
          sky: "#0098DB",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: [
          "Source Sans Pro",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
