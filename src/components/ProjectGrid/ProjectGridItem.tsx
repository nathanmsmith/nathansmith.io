import * as React from 'react'
import { css } from 'react-emotion'
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
      className={css`
        text-decoration: none;
        &:hover {
          cursor: pointer;
          filter: brightness(85%);
        }
      `}
    >
      <img src="https://via.placeholder.com/250" alt="" />
      {/* <Img
        fixed={props.project.image}
        // outerWrapperClassName={css`
        //   height: 260px;
        // `}
      /> */}
    </div>
  )
}
