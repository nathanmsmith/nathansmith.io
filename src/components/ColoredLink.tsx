import * as React from 'react'
import { css } from '@emotion/core'
import { transparentize } from 'polished'

interface ColoredLinkProps {
  href: string
  children: React.Component
}

export default function ColoredLink(props: ColoredLinkProps) {
  let color: string
  switch (true) {
    case props.href.includes('#fn-'):
      return <a href={props.href}>{props.children}</a>
    case props.href.includes('mailto:'):
      color = '#000'
      break
    case props.href.includes('ucla.edu'):
      color = '#3284BF'
      break
    case props.href.includes('datadoghq.com'):
      color = '#774aa4'
      break
    case props.href.includes('keybase.io'):
      color = '#FD7039'
      break
    case props.href.includes('autodesk.com'):
      color = '#87BC40'
      break
    case props.href.includes('dailybruin.com'):
      color = '#0080C6'
      break
    case props.href.includes('acm.cs.ucla.edu'):
    case props.href.includes('uclaacm.com'):
      color = '#3B59ED'
      break
    case props.href.includes('uclaradio.com'):
      color = '#E76C9C'
      break
    case props.href.includes('github.com'):
      color = '#24292E'
      break
    case props.href.includes('linkedin.com'):
      color = '#0077B5'
      break
    default:
      color = '#000'
      break
  }

  const styles = css`
    color: ${color};
    font-weight: bold;
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: color linear 0.1s, border-color linear 50ms,
      padding-bottom linear 0.1s;
    &:hover {
      color: ${transparentize(0.4, color)};
      border-bottom: transparent;
      padding-bottom: 2px;
    }
  `

  return (
    <a href={props.href} css={styles}>
      {props.children}
    </a>
  )
}
