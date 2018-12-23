import * as React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import Project from '../../utils/Project'

interface ProjectGridItemProps {
  project: Project
  onClick: () => void
}

export default function ProjectGridItem(props: ProjectGridItemProps) {
  return (
    <button
      onClick={props.onClick}
      css={css`
        border: 0;
        padding: 0;
        background-color: transparent;
        text-decoration: none;
        color: white;
        &:hover {
          cursor: pointer;
          filter: brightness(85%);
        }
      `}
    >
      <Img fixed={props.project.image.fixed} />
    </button>
  )
}
