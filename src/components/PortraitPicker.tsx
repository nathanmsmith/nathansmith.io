import * as React from 'react';
import { css } from 'emotion';
import Img from 'gatsby-image';
import randomInt from '../utils/randomInt';

export default function PortraitPicker({ images }) {
  const image = images.edges[randomInt(0, images.edges.length)];
  console.log(image);

  return (
    <Img
      className={css`
        margin: 2rem auto;
        border-radius: 50%;
        max-width: 20rem;
        border: 12px solid rgba(0, 0, 0, 0.025);
      `}
      sizes={image.node.sizes}
    />
  );
}
