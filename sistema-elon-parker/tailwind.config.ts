import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00bcd4',
        secondary: '#667eea',
        dark: '#1a1a2e',
        darker: '#0f0f1e',
      },
    },
  },
  plugins: [],
}
export default config
