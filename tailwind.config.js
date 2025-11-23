import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // 'bg': "#000000",
        // 'muted': "#9D9D9D",
        'water': "#00aeef",
        // "feint": "#F4F4F4",
        primary: {
          DEFAULT: "#ec008c",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#fff200",
          foreground: "#ffffff",
        },
        success: {
          DEFAULT: "#88e788",
          foreground: "#ffffff",
        },
        danger: {
          DEFAULT: "#DF5F1F",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      screens: {
        'tab-screen': { 'max': '1450px' },
        'md-screen': { 'max': '1050px' },
        'sm-screen': { 'max': '850px' },
        'mob-screen': { 'max': '500px' },
      },
    },
  },
  plugins: [heroui()],
}

module.exports = config;