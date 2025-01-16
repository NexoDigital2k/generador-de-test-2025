/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ce2029",   // Color primario
        secondary: "#2b1f59", // Color secundario
        accent: "#f6dc04",    // Color acento
        light: "#f4f4f4",     // Fondo claro
        dark: "#000000",      // Fondo oscuro
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  darkMode: "class", // Activa el modo oscuro basado en clases
  plugins: [],
};
