module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'blue',
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
