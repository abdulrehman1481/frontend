/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'app-teal': '#5DADE2',
        'app-teal-dark': '#48A0D4',
        'app-teal-light': '#A3D9F0',
      },
    },
  },
  plugins: [],
};
