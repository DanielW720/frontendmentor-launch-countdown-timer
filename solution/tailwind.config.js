/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0 7px 0px -2px #191922",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
