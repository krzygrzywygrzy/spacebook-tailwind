module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '120': '30rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
