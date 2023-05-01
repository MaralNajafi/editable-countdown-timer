/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      "3xl": "2rem",
      "9xl": "7rem",
    },
    fontFamily: {
      sans: '"Open Sans", sans-serif',
    },
  },
  plugins: [],
};
