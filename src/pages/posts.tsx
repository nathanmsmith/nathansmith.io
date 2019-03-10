import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Page from '../components/Page'
import Link from '../components/Link'

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
    <ul
      css={css`
        list-style: none;
        margin: 0;
      `}
    >
      {data.posts.edges.map(({ node }: any) => (
        <li key={node.id}>
          <Link href={node.fields.slug}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Page>
)

export default Posts
