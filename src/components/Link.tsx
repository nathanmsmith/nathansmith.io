import * as React from 'react'
import { css } from '@emotion/core'
import { transparentize } from 'polished'

interface LinkProps {
  href: string
  children: React.Component
}

export default function Link(props: LinkProps) {
  const styles = css`
    color: #000;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: color linear 0.1s, border-color linear 50ms,
      padding-bottom linear 0.1s;
    &:hover {
      color: ${transparentize(0.4, '#000')};
      border-bottom: transparent;
      padding-bottom: 1px;
    }
  `

  return (
    <a href={props.href} css={styles}>
      {props.children}
    </a>
  )
}
