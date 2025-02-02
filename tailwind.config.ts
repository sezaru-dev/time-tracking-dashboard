import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      /* PRIMARY */
      blue: 'hsl(246, 80%, 60%)',

      orange: 'hsl(15, 100%, 70%)',
      softBlue: 'hsl(195, 74%, 62%)',
      lightRed: 'hsl(348, 100%, 68%)',
      limeGreen: 'hsl(145, 58%, 55%)',
      violet: 'hsl(264, 64%, 52%)',
      softOrange: 'hsl(43, 84%, 65%)',

      /* NEUTRAL */

      veryDarkBlue: 'hsl(226, 43%, 10%)',
      darkBlue: 'hsl(235, 46%, 20%)',
      desaturatedBlue: 'hsl(235, 45%, 61%)',
      paleBlue: 'hsl(236, 100%, 87%)',
      white: 'hsl(0, 0%, 100%)',
      cardHover: 'hsl(236, 41%, 34%)',
      
          },
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
