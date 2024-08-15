/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        darkBlue:'#0e1f4a'
      },
      backgroundImage:{
        'my-image':"url(./img/home2.jpg)"
      }
    },
  },
  plugins: [],
}

