import * as React from 'react'
import { Link as GLink } from 'gatsby'
import { css, Theme, useTheme } from '../styles'
import { transparentize } from 'polished'

interface LinkProps {
  href: string
  children: React.Component
}

export default function Link(props: LinkProps) {
  const theme = useTheme<Theme>()
  const styles = css`
    color: ${theme.colors.primary};
    font-weight: bold;
    text-decoration: none;
    border-bottom: 1px solid ${theme.colors.linkUnderline};
    transition-duration: 50ms, 0.1s, 0.1s;
    transition-timing-function: linear;
    transition-property: border-color, color, padding-bottom;
    &:hover {
      color: ${transparentize(0.4, theme.colors.primary)};
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
