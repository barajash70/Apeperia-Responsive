
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        darkprimary: "#00161C",
        greendark: "#103D4A",
        secundary: "#DFE3F5",
        red: "#E33B3B",
        whiteprimary: "#DFE3F5",
        ceniza: "#4F4C4C",
        azulclaro: "#DFE3F5",
        cenizaclaro: "#F7F4F4",
      },
      fontFamily: {
        monserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '93.75': '375px',
        '87.5': '350px',
        '81.5': '325px',
        '49.08': '196.32px'
      },
      height: {
        '130.5': '522px',
        '432': '108px',
        '27.5': '110px',
        '172.08': '43.02px',
      },
      margin: {
        '1.25': '5px',
      },

      lineHeight: {
        '6.75': '27px',

      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}  