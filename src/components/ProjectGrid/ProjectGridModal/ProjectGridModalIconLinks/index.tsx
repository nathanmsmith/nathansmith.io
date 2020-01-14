import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import TechnologyLink from './TechnologyLink'

interface ProjectGridModalIconLinksProps {
  liveLink?: string
  githubLink?: string
  technologies?: string[]
}

function ProjectGridModalIconLinks(props: ProjectGridModalIconLinksProps) {
  return (
    <div className="flex items-center">
      {!!props.liveLink && (
        <a
          className="text-xl mr-3 text-primary hover:text-primaryh"
          href={props.liveLink}
        >
          <FontAwesomeIcon icon={faLink} />
        </a>
      )}
      {!!props.githubLink && (
        <a
          className="text-xl mr-3 text-primary hover:text-primaryh"
          href={`https://github.com/${props.githubLink}`}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      )}
      {props.technologies.length > 0 && (
        <span className="leading-tight">
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
