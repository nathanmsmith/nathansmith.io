import * as React from 'react'

interface ProjectGridModalHeaderProps {
  title: string
  link?: string
}

function ProjectGridModalHeader(props: ProjectGridModalHeaderProps) {
  return (
    <h1>
      {props.link ? (
        <a className="text-primary hover:text-primaryh" href={props.link}>
          {props.title}
        </a>
      ) : (
        props.title
      )}
    </h1>
  )
}

export default ProjectGridModalHeader
