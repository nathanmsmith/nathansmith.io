import * as React from 'react'
import * as Modal from 'react-modal'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

import Project from '../../../utils/Project'
import ProjectGridModalHeader from './ProjectGridModalHeader'
import ProjectGridModalIconLinks from './ProjectGridModalIconLinks'
import ProjectGridModalSubheading from './ProjectGridModalSubheading'

Modal.setAppElement('#___gatsby')

interface ProjectGridModalProps {
  onClose: () => void
  project: Project | null
}

export default class ProjectGridModal extends React.Component<
  ProjectGridModalProps
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
            grid-template-rows: 100%;
            grid-gap: 1rem;
            @media (max-width: 860px) {
              grid-template-columns: 1fr;
            }
          `}
        >
          <div
            css={css`
              overflow: scroll;
              height: 100%;
            `}
          >
            <div
              css={css`
                margin-bottom: 1rem;
              `}
            >
              <ProjectGridModalHeader
                title={this.props.project.title}
                link={this.props.project.link}
              />
              <ProjectGridModalSubheading
                organization={this.props.project.organization}
                dates={this.props.project.dates}
              />
              <ProjectGridModalIconLinks
                liveLink={this.props.project.link}
                githubLink={this.props.project.githubLink}
                technologies={this.props.project.technologies}
              />
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: this.props.project.description,
              }}
            />
          </div>
          {!!this.props.project.image && (
            <a href={this.props.project.link}>
              <Img
                fluid={this.props.project.image.fluid}
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
