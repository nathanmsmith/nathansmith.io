import * as React from 'react'
import * as rehypeReact from 'rehype-react'
import * as Modal from 'react-modal'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import Img from 'gatsby-image'

import Link from '../../Link'
import CloseButton from './CloseButton'
import Project from '../../../utils/Project'
import ProjectGridModalHeader from './ProjectGridModalHeader'
import ProjectGridModalIconLinks from './ProjectGridModalIconLinks'
import ProjectGridModalSubheading from './ProjectGridModalSubheading'

Modal.setAppElement('#___gatsby')

interface ProjectGridModalProps {
  onClose: () => void
  project: Project | null
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { a: Link },
}).Compiler

export default function ProjectGridModal(props: ProjectGridModalProps) {
  const onAfterOpen = () => {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  }

  const onRequestClose = () => {
    document.body.style.overflow = 'initial'
    document.documentElement.style.overflow = 'initial'
    props.onClose()
  }

  const theme = useTheme()

  return !!props.project ? (
    <Modal
      className="absolute bg-background rounded"
      isOpen={true}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      css={css`
        @media (max-width: 768px) {
          top: 2rem;
          left: 1rem;
          right: 1rem;
          bottom: 2rem;
        }
        top: 108px;
        left: 80px;
        right: 80px;
        bottom: 108px;
        border: 1px solid #ccc;
        outline: none;
        padding: 42px 20px;
      `}
    >
      <CloseButton onClick={onRequestClose} />
      <div
        css={css`
          height: 100%;
          display: grid;
          align-items: center;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 100%;
          grid-gap: 1rem;
          @media (max-width: 860px) {
            display: inherit;
            overflow-y: scroll;
          }
        `}
      >
        <div
          css={css`
            @media (min-width: 860px) {
              overflow-y: scroll;
              height: 100%;
            }
          `}
        >
          <div className="mb-4">
            <ProjectGridModalHeader
              title={props.project.title}
              link={props.project.link}
            />
            <ProjectGridModalSubheading
              organization={props.project.organization}
              dates={props.project.dates}
            />
            <ProjectGridModalIconLinks
              liveLink={props.project.link}
              githubLink={props.project.githubLink}
              technologies={props.project.technologies}
            />
          </div>
          <div>{renderAst(props.project.description)}</div>
          {!!props.project.image && (
            <a href={props.project.link}>
              <Img
                fluid={props.project.image.fluid}
                style={{ maxHeight: 400 }}
              />
            </a>
          )}
        </div>
      </div>
    </Modal>
  ) : null
}
