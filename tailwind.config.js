/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        },
        premier:


        {
          50: '#edf0fe',
          100: '#ced3e6',
          200: '#afb5d0',
          300: '#8f98bc',
          400: '#707aa8',
          500: '#56618e',
          600: '#434b6f',
          700: '#2f3650',
          800: '#2b3149',
          900: '#050b17',
        }
      }

    },
  },
  plugins: [],
}