/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        charcoal: '#07080F',
        beige: '#C6BCA9',
        cream: '#E3DCCF',
        electric: '#4F46E5',
        wine: '#831843',
        'muted-text': '#71717A',
      },
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
