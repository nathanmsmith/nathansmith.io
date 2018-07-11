import * as React from 'react'
import { injectGlobal } from 'emotion'

import renderAst from '../utilities/renderAst'
import Container from '../components/Container'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Overpass:400,700');
`

export default ({ data }: any) => (
  <Container>{renderAst(data.markdownRemark.htmlAst)}</Container>
)

export const query = graphql`
  query PageQuery($slug: String = "/") {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
    }
  }
`
