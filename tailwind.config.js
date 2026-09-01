/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        ink: "#12181f",
        paper: "#f6f4ee",
        "paper-dim": "#ede9df",
        slate: "#5a6472",
        brass: "#b8863f",
        route: "#5b7a6b",
        status: "#a8572e",
      },

      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },

  plugins: [],
};
