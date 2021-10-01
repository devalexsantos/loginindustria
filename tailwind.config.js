module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      backgroundImage: theme => ({
        'hero': "url('/banner-desktops.jpg')"
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#096d86',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }),
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.90)',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
