module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
};
