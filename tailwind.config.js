/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#1D4ED8', // Azul
        secondary: '#FBBF24', // Amarelo
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Exemplo com a fonte Inter
      },
    },
  },
  plugins: [],
};
