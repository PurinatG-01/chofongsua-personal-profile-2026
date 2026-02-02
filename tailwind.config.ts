import type { Config } from 'tailwindcss'

export default {
  content: ['./pages/**/*.vue', './components/**/*.vue', './server/**/*.ts'],
  darkMode: ['class'], // optional, future-proofing
  theme: {
    extend: {
      colors: {
        fontFamily: {
          sans: ['Space Mono', 'monospace'],
        },
        /* ===== Semantic tokens ===== */
        bg: {
          main: 'var(--bg-main)',
          surface: 'var(--bg-surface)',
        },

        text: {
          main: 'var(--text-main)',
          muted: 'var(--text-muted)',
          dim: 'var(--text-dim)',
        },

        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
        },

        border: {
          subtle: 'var(--border-subtle)',
        },

        /* ===== Full palette access (optional but nice) ===== */
        onyx: {
          50: 'var(--color-onyx-50)',
          100: 'var(--color-onyx-100)',
          200: 'var(--color-onyx-200)',
          300: 'var(--color-onyx-300)',
          400: 'var(--color-onyx-400)',
          500: 'var(--color-onyx-500)',
          600: 'var(--color-onyx-600)',
          700: 'var(--color-onyx-700)',
          800: 'var(--color-onyx-800)',
          900: 'var(--color-onyx-900)',
          950: 'var(--color-onyx-950)',
        },

        'ash-grey': {
          50: 'var(--color-ash-grey-50)',
          100: 'var(--color-ash-grey-100)',
          200: 'var(--color-ash-grey-200)',
          300: 'var(--color-ash-grey-300)',
          400: 'var(--color-ash-grey-400)',
          500: 'var(--color-ash-grey-500)',
          600: 'var(--color-ash-grey-600)',
          700: 'var(--color-ash-grey-700)',
          800: 'var(--color-ash-grey-800)',
          900: 'var(--color-ash-grey-900)',
          950: 'var(--color-ash-grey-950)',
        },

        'dust-grey': {
          50: 'var(--color-dust-grey-50)',
          100: 'var(--color-dust-grey-100)',
          200: 'var(--color-dust-grey-200)',
          300: 'var(--color-dust-grey-300)',
          400: 'var(--color-dust-grey-400)',
          500: 'var(--color-dust-grey-500)',
          600: 'var(--color-dust-grey-600)',
          700: 'var(--color-dust-grey-700)',
          800: 'var(--color-dust-grey-800)',
          900: 'var(--color-dust-grey-900)',
          950: 'var(--color-dust-grey-950)',
        },

        'brown-red': {
          600: 'var(--color-brown-red-600)',
        },

        chestnut: {
          300: 'var(--color-chestnut-300)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
