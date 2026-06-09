/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        fg: 'hsla(40, 26%, 85%, 1)',
        'fg-lighter': 'hsla(40, 26%, 95%, 1)',
        'fg-secondary': 'hsla(40, 20%, 72%, 1)',
        'bg-primary': 'hsla(0, 0%, 9%, 1)',
        'bg-secondary': 'hsla(0, 0%, 19%, 1)',
        'muted-text': 'hsla(40, 20%, 72%, 0.6)',
      },
      fontFamily: {
        sans: ['Satoshi', 'Avenir Next', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
      },
      maxWidth: {
        'content': '640px',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
