import * as React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const Header = () => (
  <header
    css={css`
      margin-bottom: 1.6rem;
    `}
  >
    <Link
      css={css`
        font-weight: bold;
        text-decoration: none;
        color: #000;
        font-size: 2rem;
      `}
      to="/"
    >
      nathansmith.io
    </Link>
  </header>
)

export default Header
