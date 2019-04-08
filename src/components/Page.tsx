import * as React from 'react'
import * as rehypeReact from 'rehype-react'

import Head from './Head'
import Container from './Container'
import Header from './Header'
import Link from '../components/Link'

interface PageProps {
  pageTitle: string
  content?: string
  children?: React.ReactChild
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { a: Link },
}).Compiler

const Page = (props: PageProps) => (
  <React.Fragment>
    <Head pageTitle={props.pageTitle} />
    <Container>
      <Header />
      <h1>{props.pageTitle}</h1>
      {!!props.content && <div>{renderAst(props.content)}</div>}
      {props.children}
    </Container>
  </React.Fragment>
)

export default Page
