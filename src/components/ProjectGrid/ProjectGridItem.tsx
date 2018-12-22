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
    <div
      onClick={props.onClick}
      css={css`
        text-decoration: none;
        &:hover {
          cursor: pointer;
          filter: brightness(85%);
        }
      `}
    >
      <Img
        fixed={props.project.image.fixed}
        // outerWrapperClassName={css`
        //   height: 260px;
        // `}
      />
    </div>
  )
}
