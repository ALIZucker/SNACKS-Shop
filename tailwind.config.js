/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        "title-super":"10vw",
        "title-big":"8vw",
        "title-big1":"5vw",
        "title-semi":"3vw",
        "title-lit":"1.8vw",
        "text-norm":"1.2vw"

      }
      ,
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