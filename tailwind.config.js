/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
   
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "background-main": "#A3CBCC",
        "card-sleeve-gray": "#424242",
        "card-sleeve-ocean": "#3D4665",
        "card-sleeve-teal": "#188F91",
        "card-sleeve-hazel": "#9A644D",
        "wallet-chocolate" : "#562F0B",
      },
    },
  },
}
