/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      ...colors,
      yellow: "#FAC92E",
      darkBlue: "#425673",
    },
    extend: {
      boxShadow: {
        top: "0px 4px 10px rgba(89, 157, 194, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
