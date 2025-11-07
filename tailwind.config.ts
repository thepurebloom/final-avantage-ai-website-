import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        spinfast: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spotlight: "spotlight 1s ease-in-out forwards",
        spinfast: "spinfast 0.8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

