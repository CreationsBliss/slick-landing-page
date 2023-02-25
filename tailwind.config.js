/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      'white': '#ffffff',
      'text-blue': '#355EFC',
      'btn-text-blue': '#dfe4fd',
      'btn-hover-blue': '#2a4bca',
      'heading-blue': '#011A41',
      'gray': '#555',
      'light-gray': '#F4F6F6',
    },
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
