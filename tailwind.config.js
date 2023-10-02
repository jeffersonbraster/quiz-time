/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-1': '#d9d9d9',
        'gray-2': '#565e6d',
        'gray-3': '#252c3a',
        'gray-4': '#1d2330',
        'gray-5': '#181d28',
        'gray-6': '#161a24',

        'green-light': '#abf770',
        'green-dark': '#5cad1d',
        'red-light': '#f77070',
        'red-dark': '#ab3030'
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif']
      }
    },
  },
  plugins: [],
}

