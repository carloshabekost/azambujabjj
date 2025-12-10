/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          // eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
          ...require("daisyui/src/theming/themes")["luxury"],
          primary: "#162f4f",
          "primary-content": "white",
          secondary: "#ffc718",
        },
      },
    ],
  },
};
