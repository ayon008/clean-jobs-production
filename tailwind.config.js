/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-1': '#FBFCFF',
        'blue': '#E8FFFE',
        'gray': '#919191',
        'gray-1': '#D3D3D3',
        'orange': '#E16710',
        'orange-1': '#FF8C3A',
        'orange-light': '#FFB683',
        'yellow': '#FFF900',
        'deep-blue': '#0B286D',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.indigo.600'),
              '&:hover': {
                color: theme('colors.indigo.500'),
              },
            },
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: theme('colors.gray.500'),
              borderLeftColor: theme('colors.indigo.200'),
            },
            'ul li::marker': {
              color: theme('colors.indigo.500'),
            },
            'ol li::marker': {
              color: theme('colors.indigo.500'),
            },
          },
        },
      }),
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
}