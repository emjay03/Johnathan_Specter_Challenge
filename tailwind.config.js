/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
        'gray':'#dedede',
        'black':'#0a0a0b',
        'white':'#8f8f8f',
        'yellow':'#fbe850',
        'dark':'#2e3038',
    },
    fontFamily: {
      'Prata': ['Prata', 'serif'],
     'Inter':['Inter','sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
