/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flash: {
          '0%, 100%': { backgroundColor: 'rgb(243 244 246)' },
          '50%': { backgroundColor: 'rgb(229 231 235)' },
        }
      },
      animation: {
        flash: 'flash 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
