import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Page from '../components/Page'

export const query = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
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
        <li key={node.id}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Page>
)

export default Posts
