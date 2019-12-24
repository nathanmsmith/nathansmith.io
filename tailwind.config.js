module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryh: 'var(--color-primary-hover)',
        background: 'var(--color-background)',
        border: 'var(--color-border)',
        linku: 'var(--color-link-underline)',
      },
      borderWidth: {
        12: '12px',
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      inset: {
        '20': '20px',
      },
    },
  },
  variants: {},
  plugins: [],
}
