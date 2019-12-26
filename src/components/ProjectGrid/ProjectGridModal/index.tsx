import * as React from 'react'
import * as rehypeReact from 'rehype-react'
import * as Modal from 'react-modal'
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

  return !!props.project ? (
    <Modal
      className="absolute bg-background rounded inset-80 modal"
      isOpen={true}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
    >
      <CloseButton onClick={onRequestClose} />
      <div className="modal-container">
        <div className="text-container">
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
          <div className="mb-4">{renderAst(props.project.description)}</div>
        </div>
        {!!props.project.image && (
          <a href={props.project.link}>
            <Img fluid={props.project.image.fluid} style={{ maxHeight: 400 }} />
          </a>
        )}
      </div>
    </Modal>
  ) : null
}
