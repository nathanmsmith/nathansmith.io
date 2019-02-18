import * as React from 'react'

import Head from './Head'
import Container from './Container'
import Header from './Header'

interface PageProps {
  pageTitle: string
  content?: string
  children?: React.ReactChild
}

const Page = (props: PageProps) => (
  <React.Fragment>
    <Head pageTitle={props.pageTitle} />
    <Container>
      <Header />
      {!!props.content && (
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      )}
      {props.children}
    </Container>
  </React.Fragment>
)

export default Page
