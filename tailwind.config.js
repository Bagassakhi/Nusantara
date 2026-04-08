import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.flowbite-react/class-list.json",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f9f7ff",
          100: "#f3f0ff",
          200: "#e5d9ff",
          300: "#d7b5ff",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
      },
    },
  },
  plugins: [flowbiteReact],
  darkMode: "class",
};
