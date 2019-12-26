import * as React from 'react'
import Img from 'gatsby-image'
import Project from '../../utils/Project'

interface ProjectGridItemProps {
  project: Project
  onClick: () => void
}

export default function ProjectGridItem(props: ProjectGridItemProps) {
  return (
    <button className="grid-item" onClick={props.onClick}>
      <Img fixed={props.project.image.fixed} />
    </button>
  )
}
