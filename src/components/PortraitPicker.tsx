import * as React from 'react'
import { css } from 'emotion'
import Img from 'gatsby-image'
import randomInt from '../utils/randomInt'
import { backgroundImages } from '../../node_modules/polished'

interface PortraitPickerProps {
  images: any
}

export default function PortraitPicker(props: PortraitPickerProps) {
  const image = props.images.edges[randomInt(0, props.images.edges.length)]

  return (
    <Img
      style={{ display: 'block' }}
      className={css`
        margin: 2rem auto;
        border-radius: 50%;
        border: 12px solid rgba(0, 0, 0, 0.025);
      `}
      fixed={image.node.fixed}
      alt="A photo of Nathan Smith."
    />
  )
}
