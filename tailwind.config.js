module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        bluegray_900: "#2b2b2b",
        gray_600: "#858584",
        deep_purple_A202: "#a259ff",
        deep_purple_A200: "#9747ff",
        white_A700: "#ffffff",
      },
      borderRadius: { radius5: "5px", radius11: "11px", radius20: "20px" },
      fontFamily: { worksans: "Work Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
