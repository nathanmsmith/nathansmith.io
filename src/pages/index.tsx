import * as React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/Head'
import Container from '../components/Container'
import PortraitPicker from '../components/PortraitPicker'
import ProjectGrid from '../components/ProjectGrid'
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
          fixed(width: 320, height: 320, quality: 85, cropFocus: ATTENTION) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
            aspectRatio
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            link
            role
          }
          html
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
      <ProjectGrid projects={data.projects.edges} />
    </>
  )
}
