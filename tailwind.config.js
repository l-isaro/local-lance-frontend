/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-green": "#F2FAFA",
        "web-blue": "#1E88E5",
        "web-gray": "#9D9D9D",
      },
    },
  },
  plugins: [],
};

