/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(green-500|\[#([a-fA-F0-9]{6})\])/, // Garante bg-green-500 e cores hexadecimais customizadas
    },
    {
      pattern: /text-(\[#([a-fA-F0-9]{6})\])/, // Garante text-[#xxxxxx]
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}