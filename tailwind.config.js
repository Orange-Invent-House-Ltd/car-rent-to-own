/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        HelveticalNeue: ['"HelveticalNeue"', "sans-serif"],
      },
      colors: {
        primary: "#6FC200",
        secondary: {
          dark: "#081F3F",
          light: "#1C6CDB",
        },
      },
    },
  },
  plugins: [],
};
