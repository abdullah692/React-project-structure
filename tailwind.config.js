/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mygreen: '#015249'
      },
      backgroundImage:{
        'bg-web':"url('/src/assets/images/background.png')",
      }
    },
  },
  plugins: [],
}

