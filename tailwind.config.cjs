/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display'",
        poppins: "'Poppins'",
      }
    },
  },
  plugins: [],
}