import * as React from 'react'
import * as Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

Modal.setAppElement('#___gatsby')

export interface Project {
  title: string
  dates: string
  technologies: string[]
  link: string | null
  githubLink: string | null
  // company: string
  description: string
}

interface ProjectGridModalProps {
  // onArrowLeft: () => void
  // onArrowRight: () => void
  // isOpen: boolean
  onClose: () => void
  project: Project | null
}

export default function ProjectGridModal(props: ProjectGridModalProps) {
  return !!props.project ? (
    <Modal
      isOpen={true}
      contentLabel="Minimal Modal Example"
      onRequestClose={props.onClose}
    >
      <h1>{props.project.title}</h1>
      <div>{props.project.dates}</div>
      <div>{props.project.technologies}</div>
      <div>
        {!!props.project.link && (
          <a href={props.project.link}>
            <FontAwesomeIcon icon={faLink} />
          </a>
        )}
        {!!props.project.githubLink && (
          <a href={`https://github.com/${props.project.githubLink}`}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
      </div>
      <p dangerouslySetInnerHTML={{ __html: props.project.description }} />
    </Modal>
  ) : null
}
