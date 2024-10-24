/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        boink: 'boink 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}
