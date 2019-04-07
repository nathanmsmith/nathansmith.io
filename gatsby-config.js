module.exports = {
  siteMetadata: {
    siteTitle: 'Nathan Smith in HTML',
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
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-netlify',
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nathan Smith in HTML',
        short_name: 'Nathan Smith',
        start_url: '/',
        background_color: '#ffffff',
        icon: 'src/images/n.png',
      },
    },
    'gatsby-plugin-netlify-cache',
  ],
}
