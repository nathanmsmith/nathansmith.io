import * as React from 'react'
import { css, Theme, useTheme } from '../styles'
import { transparentize } from 'polished'

interface ColoredLinkProps {
  href: string
  children: React.Component
}

export default function ColoredLink(props: ColoredLinkProps) {
  const theme = useTheme<Theme>()
  let color: string
  switch (true) {
    case props.href.includes('#fn-'):
      return <a href={props.href}>{props.children}</a>
    case props.href.includes('mailto:'):
      color = theme.colors.primary
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
      color = theme.type === 'light' ? '#24292E' : '#fff'
      break
    case props.href.includes('linkedin.com'):
      color = '#0077B5'
      break
    case props.href.includes('stripe.com'):
      // https://stripe.com/newsroom/brand-assets
      color = theme.type === 'light' ? '#32325D' : '#fff'
      break
    case props.href.includes('facebook.com'):
      color = '#5890ff'
      break
    case props.href.includes('uclacommunicationsboard.org'):
      color = '#005072'
      break
    default:
      color = theme.colors.primary
      break
  }

  const styles = css`
    color: ${color};
    font-weight: bold;
    text-decoration: none;
    border-bottom: 1px solid ${theme.colors.linkUnderline};
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
