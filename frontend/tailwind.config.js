/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
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
      },
      boxShadow: {
        'reflect': '0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
})