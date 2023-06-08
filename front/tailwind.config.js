/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: {
          200: "#333;",
          500: "#231F1E;",
        },
        secondary: {
          200: "#aaa;",
          300: "#919191;",
          500: "#f5f6f6;",
          600: "#eeeeeee8;",
          800: "#fff;",
        },
        love: {
          200: "#f9dcdc;",
        },
      },
      fontFamily: {
        "inter-loose": ['"Inter"', "sans-serif"],
        "inter-tight": ['"Inter Tight"', "sans-serif"],
        "eina-02-regular": ["Eina02-Regular", "sans-serif"],
        "eina-02-semibold": ["Eina02-Semibold", "sans-serif"],
        "eina-01-regular": ["Eina01-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
