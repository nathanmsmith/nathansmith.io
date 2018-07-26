import * as React from 'react';
import { css } from 'emotion';
import ProjectGridItem from './ProjectGridItem';

export default function ProjectGrid() {
  return (
    <section
      className={css`
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 15px;
      `}
    >
      <ProjectGridItem />
      <ProjectGridItem />
      <ProjectGridItem />
      <ProjectGridItem />
      <ProjectGridItem />
      <ProjectGridItem />
      <ProjectGridItem />
      <ProjectGridItem />
    </section>
  );
}
