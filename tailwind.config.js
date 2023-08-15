/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
        Cyan:'hsl(179, 62%, 43%)',
        BrightYellow: 'hsl(71, 73%, 54%)'
    },
        Neutral:{
        LightGray: 'hsl(204, 43%, 93%)',
        GrayishBlue: 'hsl(218, 22%, 67%)'
    }
},
    fontFamily:{
            'karla':['Karla']
    },
    screens: {
            Mobile: '375px',
            Desktop: '1440px', 
    },
    },
  },
  plugins: [],
}