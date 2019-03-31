import {
  GatsbyImageSharpFluid_WithWebpFragment,
  GatsbyImageSharpFixed_WithWebpFragment,
  MarkdownRemark,
} from '../queries'

export default interface Project {
  title: string
  organization?: string
  dates: string
  link?: string | null
  githubLink: string | null
  technologies: string[]
  role: string
  description: MarkdownRemark['htmlAst']
  image: {
    fixed: GatsbyImageSharpFixed_WithWebpFragment
    fluid: GatsbyImageSharpFluid_WithWebpFragment
  }
  hidden: boolean
}
