import * as React from 'react'
import { css, useTheme, Theme } from '../styles'
import { Link } from 'gatsby'

export default function Header() {
  const theme = useTheme<Theme>()
  return (
    <header
      css={css`
        margin-bottom: 1.6rem;
      `}
    >
      <Link
        css={css`
          font-weight: bold;
          text-decoration: none;
          color: ${theme.colors.primary};
          font-size: 2rem;
        `}
        to="/"
      >
        nathansmith.io
      </Link>
    </header>
  )
}
