import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import { WikiQuery } from '../queries'

export const query = graphql`
  query Wiki {
    allGithubFile {
      edges {
        node {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

const Wiki = ({ data }: { data: WikiQuery }) => (
  <Page pageTitle="Wiki">
    <ul>
      {data.allGithubFile.edges.map((edge, i) => (
        <li
          key={i}
          dangerouslySetInnerHTML={{
            __html: edge.node.childMarkdownRemark.html,
          }}
        />
      ))}
    </ul>
  </Page>
)

export default Wiki
