/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      grayss:
      {
        50: '#edf1fc',
        100: '#d3d4e1',
        200: '#b6b8c9',
        300: '#989bb2',
        400: '#7c7f9b',
        500: '#636582',
        600: '#4c4f66',
        700: '#363849',
        800: '#21222e',
        900: '#0a0a16',
      }
    }

    },
  },
  plugins: [],
}