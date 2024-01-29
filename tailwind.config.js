/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: "#00422F",
      organe: "#FFB000",
      light: "#F5F5DC",
      black: "#1E1E1E",
      white: "#FFFFFF"
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      karla: ["Karla", "sans-serif"],
    },
    fontSize: {
      xl: "40pt",
      lead: "20pt",
      base: "12pt",
      xs: "7pt",
      sm: "8pt",
      special: "12pt",
    },
    boxShadow:{
        photoCard: "10px 10px 10px 0px rgba(0, 0, 0, 0.30)",
        titleCard: "6px 6px 10px 0px rgba(0, 0, 0, 0.30)",
        projectAndCVCard: "0px 16px 4px 0px rgba(0, 0, 0, 0.30)",
        titleCardAndProjectAndCVPhone:"0px 8px 4px 0px rgba(0, 0, 0, 0.30)"
    },
    extend: {},
  },
  plugins: [],
};
