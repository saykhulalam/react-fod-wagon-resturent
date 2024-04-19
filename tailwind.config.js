/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        praymari: "#F17228",
        comla: "#F17228",
        common: "#424242",
        "halka-black": "#9E9E9E",
        coffe: "#434343",
      },
      backgroundImage: {
        "last-banner": "url('../public/lastbanner.png')",
      },
      fontFamily: {
        pro: ["Source Sans", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      maxWidth: {
        container: "1475px",
      },
    },
  },
  plugins: [],
};
