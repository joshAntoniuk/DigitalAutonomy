import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      },
      fontFamily: {
        'bookmania-black': ['Bookmania-Black'],
        'bookmania-black-italic': ['Bookmania-BlackItalic'],
        'bookmania-bold': ['Bookmania-Bold'],
        'bookmania-bold-italic': ['Bookmania-BoldItalic'],
        'bookmania-light': ['Bookmania-Light'],
        'bookmania-light-italic': ['Bookmania-LightItalic'],
        'bookmania-regular': ['Bookmania-Regular'],
        'bookmania-regular-italic': ['Bookmania-RegularItalic'],
        'bookmania-semibold': ['Bookmania-Semibold']
      }
    }
  },
  plugins: []
};
export default config;
