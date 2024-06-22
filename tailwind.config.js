// tailwind.config.js
module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
