import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgColors: {
          primary: '#ff914d',
          secondary: '#fefae0',
          tertiary: '#ff6600',
          quaternary: '#f6f6f6',
          quinary: '#d7d7d7',
          senary: '#5BBFC0',
          septenary: '#3ec6ff',
        },
        textColors: {
          primary: '#ff914d',
          secondary: '#fefae0',
          tertiary: '#ff6600',
          quaternary: '#f6f6f6',
          quinary: '#d7d7d7',
          senary: '#5BBFC0',
          septenary: '#3ec6ff',
        },
      },
    },
  },

  plugins: [],
};
export default config;
