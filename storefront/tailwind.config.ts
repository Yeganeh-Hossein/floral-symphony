import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        },
    },
  },
  plugins: [require('@tailwindcss/typography') , require('daisyui')], 
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
};

export default config;
