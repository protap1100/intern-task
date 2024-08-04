/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "small-screen-bg": "url('./job-task/src/assets/images/Group 1000001745.png')",
      },
    },
  },
  plugins: [],
};
