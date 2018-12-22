import * as React from 'react'
import { css } from '@emotion/core'
import { transparentize } from 'polished'

interface ProjectGridModalHeaderProps {
  title: string
  link?: string
}

const ProjectGridModalHeader = (props: ProjectGridModalHeaderProps) => {
  return (
    <h1
      css={css`
        margin: 0;
      `}
    >
      {props.link ? (
        <a
          css={css`
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
