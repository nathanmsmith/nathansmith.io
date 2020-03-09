import * as React from 'react'
import { graphql } from 'gatsby'
import * as rehypeReact from 'rehype-react'

import Head from './Head'
import Header from './Header'
// import Link from '../components/Link'

import { PostQuery } from '../queries'

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        draft
      }
    }
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  // components: { a: Link },
}).Compiler

const Post = ({ data }: { data: PostQuery }) => {
  const post = data.markdownRemark
  const isDraft = data.markdownRemark.frontmatter.draft
  const content = post.htmlAst
  const { title } = post.frontmatter
  return (
    <>
      <Head pageTitle={title} />
      {isDraft && (
        <div className="w-full bg-red-600 text-white text-xl text-center py-4">
          This a draft post, not publically available. Please don't share until
          published. Have suggestions? Send them to me at{' '}
          <a className="text-white link" href="mailto:nathan@nathansmith.io">
            nathan@nathansmith.io
          </a>
          !
        </div>
      )}
      <div className="max-w-2xl mx-auto my-0 p-6 text-xl">
        <Header />
        <h1 className="text-4xl mb-1">{title}</h1>
        <div className="text-sm text-gray-600 mb-3">
          <time>{post.frontmatter.date}</time> &middot;{' '}
          <span>{post.timeToRead} minute read</span>
        </div>
        <details className="table-of-contents">
          <summary>Table of Contents</summary>
          <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
        </details>
        <div className="markdown">{renderAst(content)}</div>
      </div>
    </>
  )
}

export default Post
