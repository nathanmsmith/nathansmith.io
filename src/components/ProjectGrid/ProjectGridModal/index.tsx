import * as React from 'react'
import * as Modal from 'react-modal'
import { css } from 'react-emotion'
import Img from 'gatsby-image'

import Project from '../../../utils/Project'
import ProjectGridModalHeader from './ProjectGridModalHeader'
import ProjectGridModalIconLinks from './ProjectGridModalIconLinks'

Modal.setAppElement('#___gatsby')

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
        className={css`
          position: absolute;

          @media (max-width: 768px) {
            top: 2rem;
            left: 1rem;
            right: 1rem;
            bottom: 2rem;
          }
          top: 6rem;
          left: 5rem;
          right: 5rem;
          bottom: 6rem;
          border: 1px solid #ccc;
          background: #fff;
          /* overflow: auto; */
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
            <ProjectGridModalHeader
              title={this.props.project.title}
              link={this.props.project.link}
            />
            <div>
              <span>{this.props.project.organization}</span>,{' '}
              <span>{this.props.project.dates}</span>
            </div>
            <ProjectGridModalIconLinks
              liveLink={this.props.project.link}
              githubLink={this.props.project.githubLink}
              technologies={this.props.project.technologies}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: this.props.project.description,
              }}
            />
          </div>
          {!!this.props.project.image && (
            <a href={this.props.project.link}>
              <Img fluid={this.props.project.image.fluid} />
            </a>
          )}
        </div>
      </Modal>
    ) : null
  }
}
