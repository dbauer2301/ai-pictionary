import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'brand-1': 'var(--brand-1)',
        'brand-2': 'var(--brand-2)',
        'brand-1-dark': 'var(--brand-1-dark)',
        'brand-2-dark': 'var(--brand-2-dark)',
        white: 'var(--white)',
        black: 'var(--black)',
        'primary-container': 'var(--primary-container)',
        'text-primary': 'var(--text-primary)',
        'text-inverted': 'var(--text-inverted)',
      },
      fontFamily: {
        roboto: ['Roboto Flex', 'sans-serif'],
      },
      fontWeight: {
        hairline: '100',
        'extra-light': '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
    },
  },
  plugins: [],
};
export default config;
