/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      yellow: "#FDFDBD",
      green: "#C8FFD4",
      blue: "#B8E8FC",
      purple: "#B1AFFF",
      orange: "#FFA800",
      bgYellow: "#FFFFF1",
      white : "#FFFFFF",
    },
    fontFamily: {
      sans: ['"Public Sans"'],
      body: "Archivo",
    },
    extend: {
      boxShadow: {
        m: "2px 3px 0px 1px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
