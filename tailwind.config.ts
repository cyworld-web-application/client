import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mac: { max: "1499px" },
      // => @media (max-width: 1119px) { ... }
      md: { max: "1199px" }, // tablet

      // => @media (max-width: 743px) { ... }
      sm: { max: "743px" }, // mobile
    },
    extend: {
      colors: {
        bgColors: {
          primary: "#ff914d",
          secondary: "#fefae0",
          tertiary: "#ff6600",
          quaternary: "#f6f6f6",
          quinary: "#d7d7d7",
          senary: "#5BBFC0",
          septenary: "#3ec6ff",
          gray: "#F7FAFD",
          mint: "#5BBFC0",
          paleOrange: "#fffaf0",
          palePink: "#ffd9ec",
          brightPink: "#ff6699",
        },
        textColors: {
          primary: "#ff914d",
          secondary: "#fefae0",
          tertiary: "#ff6600",
          quaternary: "#f6f6f6",
          quinary: "#d7d7d7",
          senary: "#5BBFC0",
          septenary: "#3ec6ff",
          gray: "#F7FAFD",
          mint: "#5BBFC0",
          paleOrange: "#fffaf0",
          palePink: "#ffd9ec",
          brightPink: "#ff6699",
        },
      },
    },
  },

  plugins: [],
};
export default config;
