/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'curvy-mobile': 'url("./images/bg-curvy-mobile.svg")',
        'curvy-desktop': 'url("./images/bg-curvy-desktop.svg")',
        'quotes': 'url("./images/bg-quotes.png")'
      },
      colors: {
        'cyan': 'hsl(176, 68%, 64%)',
        'dark-blue-intro': 'hsl(217, 28%, 15%)',
        'dark-blue-main': 'hsl(218, 28%, 13%)'
      }
    },
  },
  plugins: [],
}

