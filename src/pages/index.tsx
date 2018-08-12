import * as React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/Head'
import Container from '../components/Container'
import PortraitPicker from '../components/PortraitPicker'
import renderAst from '../utils/renderAst'

export const query = graphql`
  query IndexQuery {
    markdownRemark(fileAbsolutePath: { regex: "/index/" }) {
      htmlAst
    }
  }
`

export default function Index({ data }: any) {
  return (
    <>
      <Head />
      <Container>
        <PortraitPicker />
        {renderAst(data.markdownRemark.htmlAst)}
      </Container>
    </>
  )
}
