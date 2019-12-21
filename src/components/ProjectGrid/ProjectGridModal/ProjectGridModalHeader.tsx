import * as React from 'react'
import { css, Theme, useTheme } from '../../../styles'

interface ProjectGridModalHeaderProps {
  title: string
  link?: string
}

const ProjectGridModalHeader = (props: ProjectGridModalHeaderProps) => {
  const theme = useTheme<Theme>()
  return (
    <h1
      css={css`
        margin: 0;
      `}
    >
      {props.link ? (
        <a
          css={{
            textDecoration: 'none',
            color: theme.colors.primary,
            ':hover': {
              color: theme.colors.primaryHover,
            },
          }}
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
