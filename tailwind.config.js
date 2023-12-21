/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000B1B',
        primary: "#00608D",
        secondary: "#00ADBC",
        tetiary: "#39FFC0",
        light: "#EBFFF9",
      },
      dropShadow: {
    glow: [
      "0px 0px 52px 10px rgba(57,255,192,0.9)"
    ]
  }
    },
    
    plugins: [],
  }
}
