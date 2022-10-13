/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: ['class'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#10b981',
        dark: '#0f172a',
      },
      screens:{
        '2xl' : '1320px', 
      }
    },
  },
  varians: {
    extend : {
      lineClamp:['hover']
    }
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
