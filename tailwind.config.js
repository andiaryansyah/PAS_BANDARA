/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-white": "rgba(255, 255, 255, 0.17)",
      },
      fontSize: {
        hxl:'48px',
    },
    fontFamily: {
      roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
    },
    borderWidth: {
      '10': '10px',
      '16': '16px',
    },
    },
  },
  
  plugins: [],
}
