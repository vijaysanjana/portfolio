/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: "Satoshi",
      },
      colors: {
        'lilac': '#cca9eb',
        'lilac-light': '#e1c6f4',
        'lilac-dark': '#b08dd1',
        'lilac-darker': '#9b6bcc',
        'lilac-darkest': '#7f38c9',
        'peach': '#fe948d',
        'peach-light': '#feb8b2',
        'peach-dark': '#f77066',
        'peach-darker': '#f7564a',
        'peach-darkest': '#f03a35',
        'sunshine': '#f2de85',
        'sunshine-light': '#f5e8b8',
        'sunshine-dark': '#e6d36b',
        'sunshine-darker': '#d9c938',
        'sunshine-darkest': '#c9b700',
        'water': '#8cc9d1',
        'water-light': '#b3dfe3',
        'water-dark': '#6abecb',
        'water-darker': '#4ba9b9',
        'water-darkest': '#2e8f9e',
      },
    },
  },
  plugins: [],
};