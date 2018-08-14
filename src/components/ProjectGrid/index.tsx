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
    console.log(this.props.projects)
    return (
      <>
        <section
          className={css`
            max-width: 840px;
            margin: 0 auto 4rem;
            padding: 0 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, 260px);
            grid-template-rows: repeat(auto-fill, 260px);
            grid-column-gap: 10px;
            grid-row-gap: 10px;
            align-items: center;
            justify-content: center;
          `}
        >
          {this.props.projects.map((project: any, index: number) => {
            if (project.node.frontmatter.hidden !== true) {
              const link =
                project.node.frontmatter.link ||
                `https://github.com/${project.node.frontmatter.githubLink}`
              return (
                <ProjectGridItem
                  key={index}
                  image={project.node.frontmatter.image.childImageSharp.fixed}
                  href={link}
                />
              )
              //   onClick={() =>
              //     this.openModal({
              //       title: project.node.frontmatter.title as string,
              //       organization: project.node.frontmatter
              //         .organization as string,
              //       link: project.node.frontmatter.link as string,
              //       githubLink: project.node.frontmatter.githubLink as string,
              //       description: project.node.html as string,
              //       dates: project.node.frontmatter.dates as string,
              //       technologies: project.node.frontmatter
              //         .technologies as string[],
              //       image:
              //         project.node.frontmatter.image.childImageSharp.fluid,
              //     })
              //   }
            }
          })}
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
