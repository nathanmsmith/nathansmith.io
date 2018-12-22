import * as React from 'react'
import { css } from '@emotion/core'
import { transparentize } from 'polished'

interface ProjectGridModalSubheadingProps {
  organization?: string
  dates: string
}

const ProjectGridModalSubheading = (props: ProjectGridModalSubheadingProps) => (
  <div
    css={css`
      color: gray;
    `}
  >
    {!!props.organization && props.organization + ', '}
    {props.dates}
  </div>
)

export default ProjectGridModalSubheading
