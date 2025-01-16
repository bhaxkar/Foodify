/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily:{
        normal: ["Roboto"],
        button: ["Montserrat"],
      },
      colors: { 
        'custom-red': '#d64343',
      } 
    },
  },
  plugins: [],
}

