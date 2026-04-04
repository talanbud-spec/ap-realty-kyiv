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
          dark: '#001f4d',
          main: '#003d99',
          light: '#4d7acc',
        },
        accent: {
          yellow: '#ffd700',
          light: '#fff8dc',
        },
        secondary: {
          light: '#add8e6',
        },
      },
    },
  },
  plugins: [],
}
