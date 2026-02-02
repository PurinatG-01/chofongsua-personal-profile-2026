module.exports = {
  content: ['./pages/**/*.vue', './components/**/*.vue', './server/**/*.ts'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-main)',
        surface: 'var(--bg-surface)',
        muted: 'var(--text-muted)',
        accent: 'var(--accent-primary)',
        border: 'var(--border-subtle)',
      },
    },
  },
  plugins: [],
}
