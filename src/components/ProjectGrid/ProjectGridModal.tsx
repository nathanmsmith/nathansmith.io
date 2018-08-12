import * as React from 'react'
import * as Modal from 'react-modal'
import { css } from 'react-emotion'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

Modal.setAppElement('#___gatsby')

export interface Project {
  title: string
  organization: string
  dates: string
  technologies: string[]
  link: string | null
  githubLink: string | null
  description: string
  image: any
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
      className={css`
        position: absolute;
        top: 6rem;
        left: 5rem;
        right: 5rem;
        bottom: 6rem;
        border: 1px solid #ccc;
        background: #fff;
        overflow: auto;
        border-radius: 4px;
        outline: none;
        padding: 20px;
      `}
    >
      <div
        className={css`
          height: 100%;
          display: grid;
          align-items: center;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
          @media (max-width: 860px) {
            grid-template-columns: 1fr;
          }
        `}
      >
        <div>
          <h1
            className={css`
              margin: 0;
            `}
          >
            {props.project.title}
          </h1>
          <div>
            <span>{props.project.organization}</span>,{' '}
            <span>{props.project.dates}</span>
          </div>
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
          {!!props.project.image && (
            <Img
              fluid={props.project.image}
              className={css`
                @media (min-width: 860px) {
                  display: none;
                }
              `}
            />
          )}
          <p dangerouslySetInnerHTML={{ __html: props.project.description }} />
        </div>
        {!!props.project.image && (
          <a href={props.project.link}>
            <Img
              fluid={props.project.image}
              className={css`
                @media (max-width: 860px) {
                  display: none;
                }
              `}
            />
          </a>
        )}
      </div>
    </Modal>
  ) : null
}
