/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content:['load.html','public/index.html'],
  theme: {
    extend: {
      
      colors:{
        primary :'#f59e0b',
        tot : '#262D46'
      },
      boxShadow:{
        neon: "0 0 5px theme('colors.purple.100'), 0 0 40px theme('colors.purple.700')",
        naon: "0 0 5px theme('colors.teal.200'), 0 0 20px theme('colors.teal.700')"
      },
      screens:{
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

