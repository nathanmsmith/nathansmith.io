import * as React from 'react'
import { css } from 'react-emotion'
import { transparentize } from 'polished'

interface ProjectGridModalHeaderProps {
  title: string
  link?: string
}

const ProjectGridModalHeader = (props: ProjectGridModalHeaderProps) => {
  return (
    <h1
      className={css`
        margin: 0;
      `}
    >
      {props.link ? (
        <a
          className={css`
            text-decoration: none;
            color: inherit;
            :hover {
              color: ${transparentize(0.4, '#000')};
            }
          `}
          href={props.link}
        >
          {props.title}
        </a>
      ) : (
        props.title
      )}
    </h1>
  )
}

export default ProjectGridModalHeader
