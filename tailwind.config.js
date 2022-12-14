const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      spacing: {
        42: "11rem",
      },
    },
    screens: {
      xs: "300px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
