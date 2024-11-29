import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-left":
          "linear-gradient(to left, #f2e9ff 0%, #8c5bd0 47%, #6223ba 88%)",
        "gradient-to-left-light":
          "linear-gradient(to left, #f2e9ff 0%, #8c5bd0 50%)",
      },
      textShadow: {
        purple: "0 0 200px #8c5bd0",
      },
      fontFamily: {
        gangwon: ["var(--font-gangwon)", "sans-serif"],
        suit: ["var(--font-suit)", "sans-serif"],
        tenada: ["var(--font-tenada)", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-textshadow"), require("flowbite/plugin")],
};
export default config;
