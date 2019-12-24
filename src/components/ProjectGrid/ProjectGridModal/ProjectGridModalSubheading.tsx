import * as React from 'react'
import { css } from '@emotion/core'
import { transparentize } from 'polished'

interface ProjectGridModalSubheadingProps {
  organization?: string
  dates: string
}

function ProjectGridModalSubheading(props: ProjectGridModalSubheadingProps) {
  return (
    <div className="text-gray-500">
      {!!props.organization && props.organization + ', '}
      {props.dates}
    </div>
  )
}

export default ProjectGridModalSubheading
