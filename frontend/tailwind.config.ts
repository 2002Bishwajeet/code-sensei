import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: "#04101d",
        aqua: "#00eaf9",
        white: "#fff",
        dodgerblue: "rgba(0, 137, 237, 0.7)",
        whitesmoke: "#ebebeb",
      },
      spacing: {},
      fontFamily: {
        "sf-pro": "'SF Pro'",
      },
    },
    fontSize: {
      "21xl": "40px",
      inherit: "inherit",
    },
    },
    colors:{
      transparent: 'transparent',
      'midnight': '#04101D',
      'midBlue': '#0089ED',
      'bgGradientBlue': '#00EAF9',
      'skyblue': '#00EAF9',
      'white': '#ffffff',
      'textGrey': '#ebebeb'
    },
  
  plugins: [],
}
export default config
