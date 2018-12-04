import * as React from 'react'
import { graphql } from 'gatsby'

import Head from '../components/Head'
import Container from '../components/Container'

export const query = graphql`
  query DowntimeQuery {
    markdownRemark(fileAbsolutePath: { regex: "/downtime/" }) {
      html
    }
  }
`

const Downtime = ({ data }: any) => (
  <React.Fragment>
    <Head />
    <Container dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </React.Fragment>
)

export default Downtime
