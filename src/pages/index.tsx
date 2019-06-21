import * as React from 'react'
import { graphql } from 'gatsby'
import * as rehypeReact from 'rehype-react'

import Head from '../components/Head'
import Container from '../components/Container'
import PortraitPicker from '../components/PortraitPicker'
import ProjectGrid from '../components/ProjectGrid'
import ColoredLink from '../components/ColoredLink'

import { IndexQuery } from '../queries'
import convertIndexQueryProjectsToProjects from '../utils/convertQueryToProject'

export const query = graphql`
  query Index {
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
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
                fixed(width: 260, height: 260, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
          htmlAst
        }
      }
    }
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { a: ColoredLink },
}).Compiler

export default function Index({ data }: { data: IndexQuery }) {
  if (!data.markdownRemark || !data.markdownRemark.htmlAst) {
    throw new Error('Page not defined.')
  }

  return (
    <React.Fragment>
      <Head />
      <Container>
        <PortraitPicker />
        {renderAst(data.markdownRemark.htmlAst)}
      </Container>
      <ProjectGrid
        projects={convertIndexQueryProjectsToProjects(data.projects)}
      />
    </React.Fragment>
  )
}
