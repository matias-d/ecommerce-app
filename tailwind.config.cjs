/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        base:{
          primary : "#e1e5f2",
          secondary : "#D7DAF9",
          third : "#231F20",
          dark: "#7C92E8",
          superDark: "#5B6FAA",
          ligth: "#00BC7D",
          semilight: "#05b57a"
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
