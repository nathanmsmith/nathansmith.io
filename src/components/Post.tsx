import * as React from 'react'
import { graphql } from 'gatsby'

import Page from './Page'

import { PostQuery } from '../queries'

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`

const Post = ({ data }: { data: PostQuery }) => {
  const post = data.markdownRemark
  return <Page pageTitle={post.frontmatter.title} content={post.htmlAst} />
}

export default Post
