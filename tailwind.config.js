{ import('tailwindcss').Config }
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#090E34",
      dark: "#1D2144",
      primary: "#4A6CF7",
      yellow: "#FBB040",
      red: '#d0205b',
      "body-color": "#959CB1",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'spin-slow': {
          ' 0% ,100%': { transform: 'scale(1)' },
          ' 100% ': { transform: 'scale(1.2)' }
        },
        bounce: {
          ' 0% ,100%': {
            transform: 'translateY(0)'
          },
          ' 100% ': {
            transform: 'translateY(-30px)'
          }
        },
        'bounce-out': {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '25%': { transform: 'scale(.95)', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/animation'),
  ],
};

