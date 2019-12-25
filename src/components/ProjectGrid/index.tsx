import * as React from 'react'

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
    const gridItems = this.props.projects.map((project, index) => {
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
        <section className="max-w-4xl grid mx-auto mb-16 px-4">
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
