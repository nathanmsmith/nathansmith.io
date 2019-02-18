import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'

export const query = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const Posts = ({ data }: any) => (
  <Page pageTitle="Posts">
    <ul>
      {data.posts.edges.map(({ node }: any) => (
        <li key={node.id}>{node.frontmatter.title}</li>
      ))}
    </ul>
  </Page>
)

export default Posts
