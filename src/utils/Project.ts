import { any } from 'prop-types'

export default interface Project {
  title: string
  organization?: string
  dates: string
  link?: string | null
  githubLink: string | null
  technologies: string[]
  role: string
  description: string
  image: {
    fixed: any
    fluid: any
  }
  hidden: boolean
}
