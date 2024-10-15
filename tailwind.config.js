/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        moderateviolet: "hsl(263, 55%, 52%)",
        verydarkgrayishblue: "hsl(217, 19%, 35%)",
        verydarkblackishblue: "hsl(219, 29%, 14%)",
        White: "hsl(0, 0%, 100%)",
        lightgray: "hsl(0, 0%, 81%)",
        lightgrayishblue: "hsl(210, 46%, 95%)"
      },
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      }
    },
  },
  plugins: [],
}

