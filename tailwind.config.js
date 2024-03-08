export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
