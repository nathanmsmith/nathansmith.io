import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import TechnologyLink from './TechnologyLink'

const Link = styled.a`
  font-size: 1.2rem;
  margin-right: 10px;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  :hover {
    color: ${props => transparentize(0.4, props.theme.colors.primary)};
  }
`

interface ProjectGridModalIconLinksProps {
  liveLink?: string
  githubLink?: string
  technologies?: string[]
}

function ProjectGridModalIconLinks(props: ProjectGridModalIconLinksProps) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      {!!props.liveLink && (
        <Link href={props.liveLink}>
          <FontAwesomeIcon icon={faLink} />
        </Link>
      )}
      {!!props.githubLink && (
        <Link href={`https://github.com/${props.githubLink}`}>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      )}
      {props.technologies.length > 0 && (
        <span
          css={css`
            line-height: 1.2rem;
          `}
        >
          Technologies used:{' '}
          {props.technologies.map((tech, i) => (
            <React.Fragment key={i}>
              <TechnologyLink name={tech} />
              {i !== props.technologies.length - 1 && ', '}
            </React.Fragment>
          ))}
        </span>
      )}
    </div>
  )
}

export default ProjectGridModalIconLinks
