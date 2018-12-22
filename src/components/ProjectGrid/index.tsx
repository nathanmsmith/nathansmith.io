import * as React from 'react'
import { css } from '@emotion/core'

import Project from '../../utils/Project'
import ProjectGridItem from './ProjectGridItem'
import ProjectGridModal from './ProjectGridModal'

interface ProjectGridProps {
  projects: Project[]
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
    const gridItems = this.props.projects.map((project: any, index: number) => {
      if (!project.hidden) {
        return (
          <ProjectGridItem
            key={index}
            project={project}
            onClick={() => this.openModal(project)}
          />
        )
      }
    })

    return (
      <React.Fragment>
        <section
          css={css`
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
          {gridItems}
        </section>
        <ProjectGridModal
          project={this.state.selectedProject}
          onClose={this.closeModal}
        />
      </React.Fragment>
    )
  }
}

export default ProjectGrid
