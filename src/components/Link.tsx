import * as React from 'react'
import { Link as GLink } from 'gatsby'
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
    transition-duration: 50ms, 0.1s, 0.1s;
    transition-timing-function: linear;
    transition-property: border-color, color, padding-bottom;
    &:hover {
      color: ${transparentize(0.4, '#000')};
      border-bottom: transparent;
      padding-bottom: 1px;
    }
  `

  const isRelative = props.href.startsWith('/')

  return isRelative ? (
    <GLink to={props.href} css={styles}>
      {props.children}
    </GLink>
  ) : (
    <a href={props.href} css={styles}>
      {props.children}
    </a>
  )
}
