/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  
   content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      colors: {
         primary_color: "#F1CC0D",
         black_color: "#272727",
         white_color: "#FFFFFF",
         white_light: "#EDEDED",
      },
      fontSize: {
         sm: "20px",
         xs: "12px",
      },
      extend: {
         screens: {
            sm: "576px",
            md: "960px",
            lg: "1440px",
         },
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
      },
   },
   plugins: [],
};
export default config;
