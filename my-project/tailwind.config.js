export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lofi','luxury'],
  },
  darkMode: true, // or 'media' or 'class'
  themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  darkTheme: "black",
  variants: {
    extend: {},
  },

}