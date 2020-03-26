import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

interface HeadProps {
  siteUrl: string
  siteTitle: string
  pageTitle?: string
  description: string
  twitter: string
}

export function Head(props: HeadProps) {
  const title = props.pageTitle
    ? props.pageTitle + ' | ' + props.siteTitle
    : props.siteTitle
  const imageUrl = siteURL + '/nathan.jpg'
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={props.description} />

      {/* Facebook Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={props.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={imageUrl} />

      <html lang="en" />
    </Helmet>
  )
}

export default (props: { pageTitle?: string }) => (
  <StaticQuery
    query={graphql`
      query Head {
        site {
          siteMetadata {
            siteUrl
            siteTitle
            description
            twitter
          }
        }
      }
    `}
    render={data => <Head {...data.site.siteMetadata} {...props} />}
  />
)
