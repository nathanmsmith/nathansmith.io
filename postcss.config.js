const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = () => ({
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    purgecss({
      content: ['./src/**/*.tsx'],
      whitelistPatterns: [/^gatsby-/, /^ReactModal/],
    }),
  ],
})
