/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        solid: "var(--color-solid)",
        primaryOne: "var(--color-primary-one)",
        primaryTwo: "var(--color-primary-two)",
        textColor: "var(--color-text)",
        gray50: "var(--color-gray-50)",
        blackColor: "var(--color-black)",
      },
    },
  },
  plugins: [],
};
