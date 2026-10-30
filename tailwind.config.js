/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fa',
          100: '#e1ebf5',
          200: '#c3d7eb',
          300: '#96bbdc',
          400: '#6398cb',
          500: '#3f78b5',
          600: '#2d5e97',
          700: '#254b7b',
          800: '#1b375b',
          900: '#0b192c',
          950: '#07101d',
          DEFAULT: '#0b192c',
        },
        gold: {
          50: '#faf8f2',
          100: '#f3edd9',
          200: '#e6dab1',
          300: '#d7c284',
          400: '#c9a857',
          500: '#b89033',
          600: '#9f7526',
          700: '#7e5720',
          800: '#684520',
          900: '#58391f',
          DEFAULT: '#c9a857',
        },
        accent: {
          gold: '#c9a857',
          'gold-light': '#e6dab1',
          'gold-dark': '#9f7526',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(11, 25, 44, 0.05)',
        'premium': '0 10px 30px -10px rgba(11, 25, 44, 0.1)',
        'gold-glow': '0 4px 20px -2px rgba(201, 168, 87, 0.3)',
      }
    },
  },
  plugins: [],
}
