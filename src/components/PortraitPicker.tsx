import * as React from 'react'
import { css } from 'emotion'
import Img from 'gatsby-image'
import randomInt from '../utils/randomInt'

interface PortraitPickerProps {
  images: any
}

export default function PortraitPicker(props: PortraitPickerProps) {
  const image = props.images.edges[7].node //randomInt(0, prop7.images.edges.length)].node
  return (
    <Img
      style={{ display: 'block' }}
      className={css`
        color: transparent;
        margin: 2rem auto;
        border-radius: 50%;
        border: 12px solid rgba(0, 0, 0, 0.025);
      `}
      fixed={image.fixed}
      alt="A photo of Nathan Smith."
    />
  )
}
