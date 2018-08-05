import * as React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/Head'
import Container from '../components/Container'
import PortraitPicker from '../components/PortraitPicker'
import renderAst from '../utils/renderAst'

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url
        twitter
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/index/" }) {
      htmlAst
    }
    images: allImageSharp {
      edges {
        node {
          fixed(width: 320, height: 320, quality: 75, cropFocus: ATTENTION) {
            ...GatsbyImageSharpFixed_tracedSVG
            aspectRatio
          }
        }
      }
    }
  }
`

export default function Index({ data }: any) {
  return (
    <>
      <Head
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        url={data.site.siteMetadata.url}
        twitter={data.site.siteMetadata.twitter}
      />
      <Container>
        <PortraitPicker images={data.images} />
        {renderAst(data.markdownRemark.htmlAst)}
      </Container>
    </>
  )
}
