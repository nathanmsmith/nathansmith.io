import * as React from 'react'
import { css } from 'react-emotion'
import { darken } from 'polished'
import Img from 'gatsby-image'

export default function ProjectGridItem(props: any) {
  return (
    <div
      className={css`
        &:hover {
          cursor: pointer;
        }
      `}
      onClick={props.onClick}
    >
      <Img fixed={props.image} />
    </div>
  )
}
