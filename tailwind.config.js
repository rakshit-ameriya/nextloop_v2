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
      fontFamily: {
        montserrat: 'Montserrat',
      },
    },
  },
  plugins: [],
};
