/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Libre: ["Libre Baskerville", "serif"],
      },
      colors: {
        primary: "#3B82F6",
        secondary: "#439BDB",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
};
