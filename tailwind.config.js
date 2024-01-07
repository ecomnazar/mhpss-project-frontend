const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#0468B1",
      white: "#FFFFFF",
      black: "#272E35",
      lightDark: "#64748B",
    },
  },
  plugins: [],
};
