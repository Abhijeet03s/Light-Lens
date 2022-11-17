/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mukta: ["Mukta", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        Download: "rgb(74, 153, 211, 0.3)",
      },
    },
  },
  plugins: [],
};
