/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      colors: {
        customBlue: '#005A8D',
        customTeal: '#7FB3D5',
        customGray: '#708090',
        customSilver: '#C0C0C0',
        customMustard: '#FFAE00',
        customRed: '#FF4E6E',
        customBurgundy: '#8d0226',
        customGold: '#f4d35e',
        customStone: '#a8dadc',
        customForestGreen: '#1b4332',
        customMidnightBlue: '#003049',
        customBeige: '#f9f9f9',
        customSteelBlue: '#4682B4',
        customTan: '#D2B48C',
        yellow: '#F8BF0B',
        cyan: ' #00BCD4',
        blue1: '#0077b6',
        blue2: '#00b4d8'
    },
    height:{
      35: '35rem',
      20: '20rem',
     
    },
    fontFamily: {
      playfair: ['PlayfairDisplay','sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      oswald: ['Oswald', 'serif'],
      montserrat: ['Montserrat', 'serif'],
      opensans: ['Opensans', 'sans'],
      sans: ['sans'],
      latoB: ['latoB', 'sans-serif'],
      latoR: ['latoR', 'sans-serif']
    },
    },
  },
  }
