module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Raleway', 'ui-sans-serif'],
      'body': ['Raleway', 'ui-sans-serif'],
     },
     fontWeight: {
      ligh: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      'extra-bold': 800,
     },

    extend: {
      backgroundImage: theme => ({
        'hero': "url('/banner-desktops.jpg')"
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#096d86',
        'secondary': '#3c3c3c',
        'danger': '#e3342f',
      }),
      textColor: theme => theme('colors'),
      textColor: {
        'primary': '#096d86',
        'secondary': '#3c3c3c',
        'danger': '#e3342f'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
