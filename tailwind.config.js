/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        3: " 120px, 80px, 30px",
        2: "120px, 1fr"
      },
    },
  },
  plugins: [],
};
