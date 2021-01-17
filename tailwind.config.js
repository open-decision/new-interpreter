const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
      flexBasis: { 300: "300px" },
      height: {
        "vh-1/10": "10vh",
        "vh-2/10": "20vh",
        "vh-3/10": "30vh",
        "vh-4/10": "40vh",
        "vh-5/10": "50vh",
        "vh-6/10": "60vh",
        "vh-7/10": "70vh",
        "vh-8/10": "80vh",
        "vh-9/10": "90vh",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "disabled"],
      borderColor: ["disabled"],
      borderWidth: ["active"],
      textColor: ["disabled"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".clickable:active": {
          transform: "translateY(2px)",
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
