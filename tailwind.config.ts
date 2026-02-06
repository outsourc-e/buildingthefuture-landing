import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        page: 'rgb(var(--page-rgb) / <alpha-value>)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        muted: 'rgb(var(--muted-rgb) / <alpha-value>)',
        glass: 'rgb(var(--glass-border-rgb) / <alpha-value>)',
        accent: {
          1: 'rgb(var(--accent-1-rgb) / <alpha-value>)',
          2: 'rgb(var(--accent-2-rgb) / <alpha-value>)',
          3: 'rgb(var(--accent-3-rgb) / <alpha-value>)'
        }
      },
      boxShadow: {
        glow: 'var(--shadow-glow)'
      },
      backgroundImage: {
        hero: 'var(--hero-gradient)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Space Grotesk', 'Avenir Next', 'Segoe UI', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace']
      }
    }
  },
  plugins: []
} satisfies Config;
