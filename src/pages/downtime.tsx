import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'

import { DowntimeQuery } from '../queries'

export const query = graphql`
  query Downtime {
    markdownRemark(fileAbsolutePath: { regex: "/downtime/" }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`

const Downtime = ({ data }: { data: DowntimeQuery }) => {
  if (!data.markdownRemark || !data.markdownRemark.htmlAst) {
    throw new Error('Page not defined.')
  }

  return (
    <Page
      pageTitle={data.markdownRemark.frontmatter.title}
      content={data.markdownRemark.htmlAst}
    />
  )
}

export default Downtime
