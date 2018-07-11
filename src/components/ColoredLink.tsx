import * as React from 'react'
import { css } from 'emotion'
import { transparentize } from 'polished'

export default function ColoredLink({ href, children }) {
  let color: string
  switch (true) {
    case href.includes('#fn-'):
      return <a href={href}>{children}</a>
    case href.includes('mailto:'):
      color = '#000'
      break
    case href.includes('ucla.edu'):
      color = '#3284BF'
      break
    case href.includes('keybase.io'):
      color = '#FD7039'
      break
    case href.includes('autodesk.com'):
      color = '#87BC40'
      break
    case href.includes('dailybruin.com'):
      color = '#0080C6'
      break
    case href.includes('acm.cs.ucla.edu'):
    case href.includes('uclaacm.com'):
      color = '#3B59ED'
      break
    case href.includes('uclaradio.com'):
      color = '#E76C9C'
      break
    case href.includes('github.com'):
      color = '#24292E'
      break
    case href.includes('linkedin.com'):
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
    <a href={href} className={styles}>
      {children}
    </a>
  )
}
