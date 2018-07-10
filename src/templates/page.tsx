import * as React from 'react'

import renderAst from '../utilities/renderAst'
import Container from '../components/Container'

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
