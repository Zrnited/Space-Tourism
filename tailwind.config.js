/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html',
  ],
  theme: {
    extend: {
      textColor: {
        custom: '#D0D6F9',
      },

      backgroundColor: {
        custom: '#D0D6F9' 
      },

      width: {
        175: '175px',
        300: '300px',
        445: '445px',
        444: '444px',
        458: '458px',
        700: '740px',
        515: '515px',
        554: '554px',
        615: '615px',
        177: '177.12px',
        80: '80px',
        40: '40px',
        10: '10px',
        1: '1px'
        
        // 340: '340px',
        // 350: '350px',
        // 656: '656px',
        // 880: '880px',
        // 508: '508px',
      },

      height: {
        222: '222px',
        10: '10px',
        400: '400px',
        460: '460px',
        40: '40px',
        80: '80px',
        60: '60px'
      },

      fontSize: {
        28: '28px'
      },

      letterSpacing: {
        3: '3px'
      },

      opacity: {
        6: '0.6'
      }
    },
  },
  plugins: [],
}