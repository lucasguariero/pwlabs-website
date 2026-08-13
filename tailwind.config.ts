import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
     sans: ["var(--font-geist-sans)", "sans-serif"],
     mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
   },
      colors: {
        ink: {
          DEFAULT: "#0C0C0F",
          2: "#15151A",
          3: "#1E1E25",
        },
        cream: {
          DEFAULT: "#F4EFE6",
          2: "#ECE6D8",
        },
        pink: {
          DEFAULT: "#FF0570",
          2: "#FF99C3",
        },
        line: "rgba(244, 239, 230, 0.12)",
        "line-strong": "rgba(244, 239, 230, 0.24)",
        muted: "#9A958C",
        text: "#E9E5DC",
      },
      maxWidth: {
        page: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
