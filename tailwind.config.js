/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        supreme: ["SupremeSpike", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },

      animation: {
        "spin-slow": "spin 6s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "support-hover": "supportHover 1s ease-in-out infinite alternate",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(255,255,255, 0.7)",
          },
          "50%": {
            boxShadow: "0 0 25px 10px rgba(255,255,255, 0.2)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px #fff",
          },
          "50%": {
            boxShadow: "0 0 20px #4facfe",
          },
        },
        supportHover: {
          "0%": {
            transform: "scale(1)",
            boxShadow: "0 0 0px rgba(0, 132, 255, 0.5)",
          },
          "100%": {
            transform: "scale(1.05)",
            boxShadow: "0 0 15px rgba(0, 132, 255, 0.9)",
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
