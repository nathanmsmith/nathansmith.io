import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'

export const query = graphql`
  query DowntimeQuery {
    markdownRemark(fileAbsolutePath: { regex: "/downtime/" }) {
      html
    }
  }
`

const Downtime = ({ data }: any) => (
  <Page pageTitle="Downtime" content={data.markdownRemark.html} />
)

export default Downtime
