/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1C1A17',
        cream: '#F5EFE6',
        oak: '#C8966C',
        forest: '#3D5A47',
        'off-white': '#FAF7F2',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'wood-grain': "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
      }
    },
  },
  plugins: [],
}
