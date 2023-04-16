/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      desktop: "960px",
    },
    colors: {
      white: "#ffffff",
      muted: "#666470",
      "brand-400": "#E6613E",
      "brand-500": "#FF4C43",
      "primary-400": "#201F35",
      "primary-500": "#0D172A",
      "primary-700": "#17161B",
    },
    fontSize: {
      50: "14px",
      100: "16px",
      200: "20px",
      300: "24px",
      400: "32px",
      500: "40px",
      600: "48px",
      700: "64px",
      800: "96px",
    },
    fontFamily: {
      phudu: "Phudu, sans-serif",
      roboto: "Roboto, sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
