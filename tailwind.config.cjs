/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161E54",
        secondary: "#FF5151",
        tertiary: "#FF9B6A",
        quaternary: "#88E0EF",
      },
    },
  },
  plugins: [],
};
