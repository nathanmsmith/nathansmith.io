import * as React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/Head'
import Container from '../components/Container'
import PortraitPicker from '../components/PortraitPicker'
import ProjectGrid from '../components/ProjectGrid'
import renderAst from '../utils/renderAst'

export const query = graphql`
  query IndexQuery {
    markdownRemark(fileAbsolutePath: { regex: "/index/" }) {
      htmlAst
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            organization
            dates
            link
            githubLink
            role
            technologies
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
                fixed(width: 260, height: 260, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
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
      <Head />
      <Container>
        <PortraitPicker />
        {renderAst(data.markdownRemark.htmlAst)}
      </Container>
      <ProjectGrid projects={data.projects.edges} />
    </>
  )
}
