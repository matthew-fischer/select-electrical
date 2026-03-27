/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#f6cc41',
          dark: '#e0b830',
          light: '#fad966',
        },
        dark: {
          DEFAULT: '#040404',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
        },
        charcoal: '#303030',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
