import Project from './Project'

export default function convertQueryToProjects(query: any): Project[] {
  console.log(query)
  const projects = query.edges.map((edge: any) => {
    return {
      description: edge.node.htmlAst,
      ...edge.node.frontmatter,
      image: edge.node.frontmatter.image
        ? {
            fixed: edge.node.frontmatter.image.childImageSharp.fixed,
            fluid: edge.node.frontmatter.image.childImageSharp.fluid,
          }
        : null,
      hidden: edge.node.frontmatter.hidden ? true : false,
    }
  })
  console.log(projects)
  return projects
}
