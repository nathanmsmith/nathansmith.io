import Project from './Project'
import { IndexQuery } from '../queries'

export default function convertIndexQueryProjectsToProjects(
  query: IndexQuery['projects']
): Project[] {
  if (!query) {
    throw new Error('Query is not defined.')
  }

  const projects = query.edges.map(edge => {
    const description = edge.node.htmlAst
    const {
      title,
      dates,
      technologies,
      role,
      githubLink,
      organization,
      link,
    } = edge.node.frontmatter

    if (!description) {
      throw new Error('Missing required property `description` on project.')
    }
    if (!title) {
      throw new Error('Missing required property `title` on project.')
    }
    if (!dates) {
      throw new Error('Missing required property `dates` on project.')
    }
    if (!technologies) {
      throw new Error('Missing required property `technologies` on project.')
    }
    if (!role) {
      throw new Error('Missing required property `role` on project.')
    }
    if (!githubLink) {
      throw new Error('Missing required property `githubLink` on project.')
    }

    return {
      description,
      title,
      dates,
      technologies,
      role,
      githubLink,
      organization,
      link,
      image: edge.node.frontmatter.image
        ? {
            fixed: edge.node.frontmatter.image.childImageSharp.fixed,
            fluid: edge.node.frontmatter.image.childImageSharp.fluid,
          }
        : null,
      hidden: edge.node.frontmatter.hidden ? true : false,
    }
  })
  return projects
}
