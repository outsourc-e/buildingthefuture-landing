import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        page: '#080c16',
        ink: '#edf4ff',
        muted: '#a8b5c9',
        glass: 'rgba(255,255,255,0.06)',
        accent: {
          1: '#4A90D9',
          2: '#ff8a3d',
          3: '#F5C542'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.1), 0 16px 48px rgba(5,8,20,0.5), 0 0 70px rgba(245,197,66,0.2), 0 0 44px rgba(74,144,217,0.2)'
      },
      backgroundImage: {
        hero:
          'radial-gradient(circle at 12% 16%, rgba(74,144,217,0.26), transparent 38%), radial-gradient(circle at 88% 8%, rgba(245,197,66,0.18), transparent 34%), radial-gradient(circle at 58% 110%, rgba(255,138,61,0.2), transparent 42%), linear-gradient(145deg, #040711 0%, #0f1a2e 50%, #1d1322 100%)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Space Grotesk', 'Avenir Next', 'Segoe UI', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace']
      }
    }
  },
  plugins: []
} satisfies Config;
