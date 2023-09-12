import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      // https://colorhunt.co/palette/451952662549ae445af39f5a
      colors: {
        primary: { DEFAULT: '#451952', alt: '#662549' },
        secondary: '#AE445A',
        tertiary: '#F39F5A',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
