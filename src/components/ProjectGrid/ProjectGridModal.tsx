import * as React from 'react'
import * as Modal from 'react-modal'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

Modal.setAppElement('#___gatsby')

export interface Project {
  title: string
  organization?: string
  dates: string
  technologies: string[]
  link?: string | null
  githubLink: string | null
  description: string
  image: any
}

interface ProjectGridModalProps {
  onClose: () => void
  project: Project | null
}

export default class ProjectGridModal extends React.Component<
  ProjectGridModalProps,
  {}
> {
  onAfterOpen = () => {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  }

  onRequestClose = () => {
    document.body.style.overflow = 'initial'
    document.documentElement.style.overflow = 'initial'
    this.props.onClose()
  }

  render() {
    return !!this.props.project ? (
      <Modal
        isOpen={true}
        onAfterOpen={this.onAfterOpen}
        onRequestClose={this.onRequestClose}
        css={css`
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
          css={css`
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
              css={css`
                margin: 0;
              `}
            >
              {this.props.project.title}
            </h1>
            <div>
              <span>{this.props.project.organization}</span>,{' '}
              <span>{this.props.project.dates}</span>
            </div>
            <div>{this.props.project.technologies}</div>
            <div>
              {!!this.props.project.link && (
                <a href={this.props.project.link}>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              )}
              {!!this.props.project.githubLink && (
                <a href={`https://github.com/${this.props.project.githubLink}`}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
            </div>
            {!!this.props.project.image && (
              <Img
                fluid={this.props.project.image}
                css={css`
                  @media (min-width: 860px) {
                    display: none;
                  }
                `}
              />
            )}
            <p
              dangerouslySetInnerHTML={{
                __html: this.props.project.description,
              }}
            />
          </div>
          {!!this.props.project.image && (
            <a href={this.props.project.link}>
              <Img
                fluid={this.props.project.image}
                css={css`
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
}
