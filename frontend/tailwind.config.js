/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#FFEEBB',
        secondary: {
          100: '#A7ECEE',
          200: '#99DBF5',
          300: '#9AC5F4'
        },
      }
    },
  },
  plugins: [],
}

