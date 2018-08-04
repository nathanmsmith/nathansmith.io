module.exports = {
  siteMetadata: {
    title: 'Nathan Smith in HTML',
    description:
      'The personal website of Nathan Smith, UCLA computer science student, web developer, and board game enthusiast.',
    url: 'https://nathansmith.io',
    twitter: '@nathunsmitty',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-92890809-1',
        anonymize: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-typescript',
  ],
}
