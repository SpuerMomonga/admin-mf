/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,tsx,js}', '.src/**/.css'],
  theme: {
    extend: {
      backgroundColor: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      colors: {
        primary: 'var(--primary)',
        outline: 'var(--outline)',
        accent: 'var(--accent)',
        warning: 'var(--warning)',
      },
    },
  },
  plugins: [],
};
