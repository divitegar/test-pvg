/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "secondary-20": "#FCFCFF",
        "secondary-80": "#F3F4FF",
        "primary-100": "#545DFF",
        "dark-10": "#212121",
        "dark-20": "#7A7A7A",
        "error-10": "#E94948",
        "success-10": "#36D189",
        "caution-10": "#FFDC7D",
        "primary-60": "#989EFF",
        "divider-10": "#C4C4C4",
      },
    },
  },
  plugins: [],
};
