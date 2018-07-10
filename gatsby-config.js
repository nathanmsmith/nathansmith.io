module.exports = {
  siteMetadata: {
    title: 'Nathan Smith in HTML',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    'gatsby-plugin-typescript',
  ],
}
