/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#333333',
        accent: '#ff0000',
        'gray-dark': '#1a1a1a',
        'gray-light': '#f5f5f5',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      height: {
        'screen-90': '90vh',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
