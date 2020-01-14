import * as React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header className="mb-6">
      <Link className="font-bold text-4xl	" to="/">
        nathansmith.io
      </Link>
    </header>
  )
}
