/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /bg-(lime|blue|red|indigo|amber|teal)-(500|200)/,
    },
    {
      pattern: /border-(lime|blue|red|indigo|amber|teal)-500/,
    },
    {
      pattern: /focus-within:ring-(lime|blue|red|indigo|amber|teal)-300/,
      variants: ["focus-within"],
    },
  ],
  plugins: [],
};
