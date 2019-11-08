import * as React from 'react'
import * as rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'

import Head from './Head'
import Container from './Container'
import Header from './Header'
import Link from '../components/Link'

import { PostQuery } from '../queries'

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        date
      }
    }
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { a: Link },
}).Compiler

interface PostHeaderProps {
  title: string
  date: Date
}

const PostHeader = (props: PostHeaderProps) => (
  <header>
    <h1>{props.title}</h1>
    <time dateTime={props.date.toISOString()}>
      {props.date.toLocaleDateString()}
    </time>
  </header>
)

const Post = ({ data }: { data: PostQuery }) => (
  <React.Fragment>
    <Head pageTitle={data.markdownRemark.frontmatter.title} />
    <Container>
      <Header />
      <article>
        <PostHeader
          title={data.markdownRemark.frontmatter.title}
          date={new Date(data.markdownRemark.frontmatter.date)}
        />
        {renderAst(data.markdownRemark.htmlAst)}
      </article>
    </Container>
  </React.Fragment>
)

export default Post
