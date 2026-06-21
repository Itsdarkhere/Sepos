import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff8b06',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        kameron: ['Kameron', 'serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
    base: false, // Disable DaisyUI's base styles (including font-family on body)
  },
}
