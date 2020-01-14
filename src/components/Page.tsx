import * as React from 'react'
import * as rehypeReact from 'rehype-react'

import Body from './Body'
import Head from './Head'
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
  <>
    <Head pageTitle={props.pageTitle} />
    <div className="max-w-2xl my-auto mx-0 p-6 text-xl">
      <Header />
      <h1>{props.pageTitle}</h1>
      {!!props.content && (
        <div className="markdown">{renderAst(props.content)}</div>
      )}
      {props.children}
    </div>
  </>
)

export default Page
