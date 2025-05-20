/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        borderColor: "var(--borderColor)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        credit: "var(--credit)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
