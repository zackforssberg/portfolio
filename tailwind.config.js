/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        navbarcolor: 'var(--navbar)'
      },
      animation: {
        boink: 'boink 0.2s ease-in-out',
        fade: 'fade 2s ease-in-out'
      },
      keyframes: {
        boink: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
        },
        fade: {
          '0%': { opacity: '0' },  // Starts fully transparent
          '15%': { opacity: '1' }, // Fades in quickly
          '85%': { opacity: '1' }, // Stays visible most of the time
          '100%': { opacity: '0' }, // Fades out at the end
        },
      },
    },
  },
  plugins: [],
}
