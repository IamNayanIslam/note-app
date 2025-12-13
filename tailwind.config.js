/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [
    {
      // ----------------------------------------------------
      // CORRECTED: Added '100' to the shade list
      // ----------------------------------------------------
      pattern: /(bg|border|ring)-(lime|teal|indigo)-(100|200|300|500)/,
      variants: ["focus-within"],
    },
    {
      // The focus-within pattern can remain as is, assuming you only use shade 300 for rings
      pattern: /focus-within:ring-(lime|teal|indigo)-(300)/,
      variants: ["focus-within"],
    },
  ],
  plugins: [],
};
