/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Sans serif"],
        recursive_sans: ["Recursive Sans Casual", "Monospace"],
      },
    },
  },
  plugins: [],
};
