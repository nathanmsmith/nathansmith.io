import * as React from 'react'

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
