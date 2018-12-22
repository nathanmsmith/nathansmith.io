import * as React from 'react'

import Head from './Head'
import Container from './Container'
import Header from './Header'

interface PageProps {
  pageTitle: string
  content: string
}

const Page = (props: PageProps) => (
  <React.Fragment>
    <Head pageTitle={props.pageTitle} />
    <Container>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </Container>
  </React.Fragment>
)

export default Page
