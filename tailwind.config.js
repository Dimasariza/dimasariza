/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*./index.html",
    "./src/**/*.{vue,html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#111827',
        primary: '#f59e0b',
        secondary: '#ec4899'
      }
    },
  },
  plugins: [],
}

