module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fluidType: {
      settings: {
        fontSizeMin: 1.125,
        fontSizeMax: 1.25,
        ratioMin: 1.125,
        ratioMax: 1.2,
        screenMin: 20,
        screenMax: 96,
        unit: 'rem',
        prefix: '',
      },

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
