module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              'text-decoration': 'none',
              color: 'var(--color-primary)',
              'font-weight': 'bold',
              'border-bottom': '1px solid var(--color-link-underline)',
              'transition-duration': '50ms, 0.1s, 0.1s',
              'transition-timing-function': 'linear',
              'transition-property': 'border-color, color, padding-bottom',
              '&:hover': {
                opacity: '0.6',
                'border-bottom': 'transparent',
                'padding-bottom': '1px',
              },
            },
          },
        },
        dark: {
          css: {
            // color: theme('colors.gray.700', defaultTheme.colors.gray[700]),
            color: 'red',
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
