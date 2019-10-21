import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import AreaChart from '../components/AreaChart'

export const query = graphql`
  query {
    allCs180Csv {
      edges {
        node {
          course_id
          created_at
          enrollment_capacity
          enrollment_count
          enrollment_status
          instructor
          section_id
          waitlist_capacity
          waitlist_count
          waitlist_status
        }
      }
    }
  }
`

const D3Demo = ({ data }: any) => {
  return (
    <Page pageTitle="D3 Demo">
      <AreaChart data={data.allCs180Csv.edges.map((edge: any) => edge.node)} />
    </Page>
  )
}

export default D3Demo
