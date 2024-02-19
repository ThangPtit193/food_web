/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  mode:"jit",
  purge:[
    "./public/**/*.html",
    "./public/**/*.js"
  ],
  theme: {
    extend: {
      spacing:{
        "40-c":"40rem"
      }
    },
  },
  plugins: [],
}

