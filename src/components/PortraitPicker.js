import * as React from 'react';
import { css } from 'emotion';
import Img from 'gatsby-image';
import randomInt from '../utils/randomInt';

export default function PortraitPicker({ image }) {
  // const image = images.edges[randomInt(0, images.edges.length)];

  console.log(image);

  return (
    <Img
      className={css`
        display: block;
        margin: 2rem auto;
        border-radius: 50%;
        width: 320px;
        height: 320px;
        border: 12px solid rgba(0, 0, 0, 0.025);
      `}
      fixed={image.childImageSharp.fixed}
    />
  );
}
