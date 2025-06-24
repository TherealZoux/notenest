
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--main-color)",
        main: '#FFAC00',
        head: '#FFFFFF',
        text: '#F4F4F5',
        note: '#D4D4D4',
        placeholder: '#C2C2C5',
        bg: '#18181B',
        sidebar: '#09090B',
        active: '#A1842C',
      }
    }
  },
  plugins: []
}

export default config

