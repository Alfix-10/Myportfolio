/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        pucat: '#64748b'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

