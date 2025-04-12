/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tab: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }
      mobile: { max: "600px" },
      // => @media (max-width: 600px) { ... }
    },
    fontFamily: {
      Poppins: ["Poppins", "serif"],
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
      },
      animation: {
        slideIn: "slideIn 1s linear forwards",
        slideOut: "slideOut 1s linear forwards",
      },
      colors: {
        customRed: "#c60e20",
        softBlue: "#5368df",
      },
    },
  },
  plugins: [],
};