/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      textColor:{
        "semiDarkPer":"#4c4294",
        "lightPer":"#46039a",
        "titlePer":"#412f59",
        "lowPre":"#7a65a5"
      },
      backgroundColor:{
        "semiDarkPer":"#4c4294",
        "lightPer":"#46039a",
        "titlePer":"#412f59",
        "lowPre":"#7a65a5",
        "backmidel":"#F5D0BA",
        "backpink":"#E2C7D6"
      }
    },
  },
  plugins: [],
}