import * as React from 'react'
import { css, Theme, useTheme } from '../styles'
import { transparentize } from 'polished'

interface ColoredLinkProps {
  href: string
  children: React.Component
}

export default function ColoredLink(props: ColoredLinkProps) {
  return (
    <a href={props.href} className="link colored">
      {props.children}
    </a>
  )
}
