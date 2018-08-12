import * as React from 'react'
import { css } from 'emotion'
import Img from 'gatsby-image'
import randomInt from '../utils/randomInt'

interface PortraitPickerProps {
  images: any
}

export default function PortraitPicker(props: PortraitPickerProps) {
  const image =
    props.images[randomInt(0, props.images.length)].node.childImageSharp
  return (
    <a href="/">
      <Img
        style={{ display: 'block' }}
        className={css`
          max-width: 320px;
          max-height: 320px;
          color: transparent;
          margin: 0 auto 2rem;
          border-radius: 50%;
          border: 12px solid rgba(0, 0, 0, 0.025);

          @media (max-width: 340px) {
            margin-bottom: 1.4rem;
          }
        `}
        fluid={image.fluid}
        alt="A photo of Nathan Smith."
        title="Click again?"
      />
    </a>
  )
}
