import * as React from 'react'
import { Link as GLink } from 'gatsby'

interface LinkProps {
  href: string
  children: React.Component
}

export default function Link(props: LinkProps) {
  const isRelative = props.href.startsWith('/')
  return isRelative ? (
    <GLink to={props.href} className="link font-bold">
      {props.children}
    </GLink>
  ) : (
    <a href={props.href} className="link font-bold">
      {props.children}
    </a>
  )
}
