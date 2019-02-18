import * as React from 'react'
import { graphql } from 'gatsby'

import Page from './Page'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const Post = ({ data }: any) => {
  const post = data.markdownRemark
  return <Page pageTitle={post.frontmatter.title} content={post.html} />
}

export default Post
