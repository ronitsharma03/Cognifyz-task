/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700: "#146eb4"
        },
        teal: {
          700: "#0e4f82"
        },
        steelblue: {
          500: "#146eb4"
        },
        snow: {
          500: "#fafafa"
        },
        black: {
          200: "#E5E5E5",
          300: "#696969"
        }
      }
    },
  },
  plugins: [],
}

