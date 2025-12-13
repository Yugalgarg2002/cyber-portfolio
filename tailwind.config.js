/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vault: {
          dark: '#050508',
          metal: '#1a1a23',
          panel: '#121218',
          border: '#2a2a35',
          neon: {
            DEFAULT: '#00f3ff',
            dim: 'rgba(0, 243, 255, 0.2)',
            glow: 'rgba(0, 243, 255, 0.6)',
          },
          amber: '#ffaa00',
          alert: '#ff003c',
          text: {
            primary: '#e0e0e0',
            secondary: '#9090a0',
            dim: '#505060'
          }
        }
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        display: ['"Orbitron"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'scanline': 'scanline 2s linear infinite',
        'flicker': 'flicker 0.2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'door-open': 'doorOpen 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.9' },
          '52%': { opacity: '0.4' },
          '54%': { opacity: '1' },
        },
        doorOpen: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' },
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1a1a23 1px, transparent 1px), linear-gradient(to bottom, #1a1a23 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}