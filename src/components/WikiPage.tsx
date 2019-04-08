import * as React from 'react'
import { graphql } from 'gatsby'

import Page from './Page'

export const query = graphql`
  query WikiPage($relativePath: String!) {
    githubFile(relativePath: { eq: $relativePath }) {
      childMarkdownRemark {
        htmlAst
        frontmatter {
          title
        }
      }
    }
  }
`

const Post = ({ data }: any) => {
  const post = data.githubFile.childMarkdownRemark
  return <Page pageTitle={post.frontmatter.title} content={post.htmlAst} />
}

export default Post
