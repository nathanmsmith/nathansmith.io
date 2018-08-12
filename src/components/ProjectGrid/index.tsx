import * as React from 'react'
import { css } from 'emotion'

import ProjectGridItem from './ProjectGridItem'
import ProjectGridModal, { Project } from './ProjectGridModal'

interface ProjectGridProps {
  projects: any
}

interface ProjectGridState {
  selectedProject: Project | null
}

class ProjectGrid extends React.Component<ProjectGridProps, ProjectGridState> {
  state: ProjectGridState = {
    selectedProject: null,
  }

  openModal = (project: Project) => {
    this.setState({ selectedProject: project })
  }

  closeModal = () => {
    this.setState({ selectedProject: null })
  }

  render() {
    return (
      <>
        <section
          className={css`
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 10px;
            grid-row-gap: 15px;
          `}
        >
          {this.props.projects.map((project: any, index: number) => (
            <ProjectGridItem
              key={index}
              onClick={() =>
                this.openModal({
                  title: project.node.frontmatter.title as string,
                  organization: project.node.frontmatter.organization as string,
                  link: project.node.frontmatter.link as string,
                  githubLink: project.node.frontmatter.githubLink as string,
                  description: project.node.html as string,
                  dates: project.node.frontmatter.dates as string,
                  technologies: project.node.frontmatter
                    .technologies as string[],
                  image: project.node.frontmatter.image.childImageSharp.fluid,
                })
              }
            />
          ))}
        </section>
        <ProjectGridModal
          project={this.state.selectedProject}
          onClose={this.closeModal}
        />
      </>
    )
  }
}

export default ProjectGrid
