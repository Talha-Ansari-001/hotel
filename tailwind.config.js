/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37', // Gold
          dark: '#B8860B',
          light: '#F4E5A9',
        },
        secondary: {
          DEFAULT: '#1A1A1A', // Charcoal
          light: '#2D2D2D',
        },
        accent: '#FDFBF7', // Cream
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
