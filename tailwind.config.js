/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern:
        /(bg|border|ring)-(violet|teal|indigo|emerald|rose)-(100|200|300|500)/,
      variants: ["focus-within", "focus"],
    },
    {
      pattern: /focus-within:ring-(violet|teal|indigo|emerald|rose)-(300|500)/,
      variants: ["focus-within"],
    },

    {
      pattern: /focus:ring-(violet|teal|indigo|emerald|rose)-(300|500)/,
      variants: ["focus"],
    },
  ],
  plugins: [],
};
