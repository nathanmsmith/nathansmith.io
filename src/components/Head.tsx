import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

interface HeadProps {
  title: string
  description: string
  url: string
  twitter: string
}

function Head(props: HeadProps) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />

      {/* TODO: favicons! */}

      <link rel="canonical" href={props.url} />

      {/* Facebook Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      {/* <meta property="og:image" content="https://example.com/image.jpg" /> */}
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={props.title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={props.twitter} />
      <meta name="twitter:url" content={props.url} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {/* <meta name="twitter:image" content="https://example.com/image.jpg" /> */}

      <html lang="en" />
    </Helmet>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            twitter
          }
        }
      }
    `}
    render={data => (
      <Head
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        url={data.site.siteMetadata.url}
        twitter={data.site.siteMetadata.twitter}
      />
    )}
  />
)
