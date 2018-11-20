import * as React from 'react'
import { css } from 'react-emotion'
import { transparentize } from 'polished'

interface ProjectGridModalSubheadingProps {
  organization: string
  dates: string
}

const ProjectGridModalSubheading = (props: ProjectGridModalSubheadingProps) => (
  <div
    className={css`
      color: gray;
    `}
  >
    {props.organization}, {props.dates}
  </div>
)

export default ProjectGridModalSubheading
