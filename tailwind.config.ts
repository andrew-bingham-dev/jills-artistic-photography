import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-light-blue': '#A9B2BB',
        'my-medium-blue': '#546677',
        'my-dark-blue': '#191F24',
        'my-medium-orange': '#FE7F2D',
        'my-light-beige': 'F3EEE8',
      }
    },
  },
  plugins: [],
}
export default config
