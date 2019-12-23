import * as React from 'react'
import { css, useTheme, Theme } from '../styles'
import { Link } from 'gatsby'

export default function Header() {
  const theme = useTheme<Theme>()
  return (
    <header className="mb-6">
      <Link className="font-bold text-4xl	" to="/">
        nathansmith.io
      </Link>
    </header>
  )
}
