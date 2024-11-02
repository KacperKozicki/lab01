/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path to include your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Include DaisyUI as a plugin
};

