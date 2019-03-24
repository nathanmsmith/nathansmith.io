import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'

import { DowntimeQuery } from '../queries'

export const query = graphql`
  query Downtime {
    markdownRemark(fileAbsolutePath: { regex: "/downtime/" }) {
      html
    }
  }
`

const Downtime = ({ data }: { data: DowntimeQuery }) => (
  <Page pageTitle="Downtime" content={data.markdownRemark.html} />
)

export default Downtime
