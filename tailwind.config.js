/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode based on a class
  content: [
    './index.html', // Include your HTML files
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS/JSX/TS/TSX files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};