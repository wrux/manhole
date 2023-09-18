import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
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
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
