/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        Pangolin: "Pangolin",
        CarterOne: "Carter One",
      },
      colors: {
        purple: "#b1728a",
        darkPurple: "#943d7a",
        midPurple: "#c33c9b",
      },
    },
  },
  plugins: [],
};
