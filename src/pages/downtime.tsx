import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'

import { DowntimeQuery } from '../queries'

export const query = graphql`
  query Downtime {
    markdownRemark(fileAbsolutePath: { regex: "/downtime/" }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const Downtime = ({ data }: { data: DowntimeQuery }) => {
  if (!data.markdownRemark || !data.markdownRemark.html) {
    throw new Error('Page not defined.')
  }

  return (
    <Page
      pageTitle={data.markdownRemark.frontmatter.title}
      content={data.markdownRemark.html}
    />
  )
}

export default Downtime
