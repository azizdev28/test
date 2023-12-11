/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        DEFAULT: "1250px",
      },
      padding: {
        DEFAULT: "5rem",
      },
      center: true,
    },
    colors: {
      "blue-800": "#28293E",
    },
    extend: {},
  },
  plugins: [],
};
