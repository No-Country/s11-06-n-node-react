/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenPrimary: '#01363A',
        greenSecundary: '#098D82',
        grayPrimary: '#D9D9D9',
        graySecundary: '#F9F4F4',
        custombg: '#96cac5',
        customhover: '#098d82'
      },
      maxWidth: {
        rem90: '90rem'
      }
    },
  },
  plugins: [],
}