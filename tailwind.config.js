/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      boxShadow: {
        top: "0px 4px 10px rgba(89, 157, 194, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
