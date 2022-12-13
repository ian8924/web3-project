/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  // purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
