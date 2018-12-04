import * as React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

export default function ProjectGridItem(props: any) {
  return (
    <a
      css={css`
        text-decoration: none;
        &:hover {
          cursor: pointer;
          filter: brightness(85%);
        }
      `}
      href={props.href}
    >
      <Img fixed={props.image} />
    </a>
  )
}
