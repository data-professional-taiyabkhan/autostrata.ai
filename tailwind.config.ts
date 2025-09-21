import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070b18',
        panel: '#0d1224',
        brand: '#5bbcff',
        brand2: '#8dffcf'
      },
      boxShadow: {
        glow: '0 10px 30px rgba(0,0,0,.35)'
      }
    }
  },
  plugins: []
}
export default config
