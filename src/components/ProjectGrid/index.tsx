import * as React from 'react';
import { css } from 'emotion';
import Modal from 'react-modal';

import ProjectGridItem from './ProjectGridItem';

class ProjectGrid extends React.Component<any, any> {
  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <>
        <section
          className={css`
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 10px;
            grid-row-gap: 15px;
          `}
        >
          <ProjectGridItem onClick={this.openModal} />
          <ProjectGridItem onClick={this.openModal} />
          <ProjectGridItem onClick={this.openModal} />
          <ProjectGridItem onClick={this.openModal} />
          <ProjectGridItem onClick={this.openModal} />
          <ProjectGridItem onClick={this.openModal} />
          <ProjectGridItem onClick={this.openModal} />
          <ProjectGridItem onClick={this.openModal} />
        </section>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Minimal Modal Example"
        >
          <button onClick={this.closeModal}>Close Modal</button>
        </Modal>
      </>
    );
  }
}

export default ProjectGrid;
