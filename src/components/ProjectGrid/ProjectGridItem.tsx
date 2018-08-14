import * as React from 'react'
import { css } from 'react-emotion'
import Img from 'gatsby-image'

export default function ProjectGridItem(props: any) {
  return (
    <a
      className={css`
        text-decoration: none;
        &:hover {
          cursor: pointer;
          filter: brightness(85%);
        }
      `}
      href={props.href}
    >
      <Img
        fixed={props.image}
        outerWrapperClassName={css`
          height: 260px;
        `}
      />
    </a>
  )
}
