import * as React from 'react'
import Modal from 'react-modal'
import { css } from 'emotion'

Modal.setAppElement('#___gatsby')

export interface Project {
  title: string
  // company: string
  // link: string
  // github: string
  // description: string
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
      <div>
        <span
          className={css`
            font-family: 'Overpass', 'Helvetica Neue', 'Helvetica', 'Lato',
              sans-serif;
          `}
        >
          {props.project.title}
        </span>
        <span>UCLA Radio</span>
      </div>
      <div>February 2017 – Present</div>
      <div>Javascript, React, Node, GraphQL</div>
      <div>Icons</div>
      <p>
        I started working on UCLA Radio’s website in my second quarter both in
        radio and at UCLA. Features I’ve implemented include social links on
        every show page as well as a modal popup notifying listeners about our
        pledge drive during the month of May. More recently, as co-manager of
        UCLA Radio’s web department, I’ve been working on bringing good software
        engineering practices to our site by way of establishing a linter
        configuration, improving our build process, automating our builds with
        continuous integration and deployment, writing documentation and
        contributing guidelines, and supporting development on Windows
        platforms.
      </p>
    </Modal>
  ) : null
}
