module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fluidType: {
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: 'rem', // default is rem but it's also possible to use 'px'
        prefix: '', // set a prefix to use it alongside the default font sizes
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        '2xl': [3, 1.2],
        '3xl': [4, 1.2],
        '4xl': [5, 1.1],
        '5xl': [6, 1.1],
        '6xl': [7, 1.1],
        '7xl': [8, 1],
        '8xl': [9, 1],
        '9xl': [10, 1],
      },
    },
    extend: {
      backgroundImage: {
        solutions_bg_image: "url('../public/images/Vector 36.png')",
        career_bg_image: "url('../public/images/group-discuss.jpg')",
      },
      colors: {
        primaryBg: 'var(--color-primary-bg)',
        primaryWhiteText: 'var(--color-white-text)',
        primaryGrayText: 'var(--color-gray-text)',
        secondaryGrayText: 'var(--color-darkGray-text)',
        primaryGreenText: 'var(--color-green-text)',
      },
      fontFamily: {
        montserrat: 'Montserrat',
      },
    },
  },
  plugins: [],
  variants: {
    fluidType: ['responsive'],
  },
};
