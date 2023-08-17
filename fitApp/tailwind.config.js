/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grad-primary": "#4294E3",
        "grad-secondary": "#8F12FD",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
