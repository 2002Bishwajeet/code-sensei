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
      fontFamily: {
        'SF Pro': ['SF Pro', 'sans-serif']
      },
      fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.4rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      },
      colors:{
      transparent: 'transparent',
      'midnight': '#04101D',
      'midBlue': '#0089ED',
      'skyblue': '#00EAF9',
      'white': '#ffffff',
      'textGrey': '#cdcdcd'
      }
    },
    fontSize: {
      "21xl": "40px",
      inherit: "inherit",
    },
    },
    
  
  plugins: [],
}
export default config
