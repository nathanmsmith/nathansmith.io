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
        '1r': '1rem',
        '2r': '2rem',
        '20': '20px',
        '80': '80px',
        '108': '108px',
      },
    },
  },
  variants: {},
  plugins: [],
}
