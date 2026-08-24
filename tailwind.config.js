/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0F1C',
          soft: '#0E1526',
          surface: '#121A2E',
          raised: '#17213A',
          border: '#232E48',
        },
        ink: {
          DEFAULT: '#E9EDF7',
          muted: '#96A3BD',
          faint: '#5C6786',
        },
        signal: {
          DEFAULT: '#E9A23B',
          soft: '#F2BE73',
          dim: '#8A6222',
        },
        ok: '#4ADE80',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(233,162,59,0.06), transparent 60%)',
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        rise: 'rise 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
