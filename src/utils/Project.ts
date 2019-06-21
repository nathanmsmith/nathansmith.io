import {
  GatsbyImageSharpFluid_WithWebp_TracedSvgFragment,
  GatsbyImageSharpFixed_WithWebp_TracedSvgFragment,
  MarkdownRemark,
} from '../queries'

export default interface Project {
  title: string
  organization?: string
  dates: string
  link?: string | null
  githubLink?: string | null
  technologies: string[]
  role: string
  description: MarkdownRemark['htmlAst']
  image: {
    fixed: GatsbyImageSharpFixed_WithWebp_TracedSvgFragment
    fluid: GatsbyImageSharpFluid_WithWebp_TracedSvgFragment
  }
  hidden: boolean
}
