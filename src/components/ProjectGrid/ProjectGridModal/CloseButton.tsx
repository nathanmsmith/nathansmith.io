import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

interface CloseButtonProps {
  onClick: () => void
}

export default function CloseButton(props: CloseButtonProps) {
  return (
    <button
      className="absolute top-20 right-20 bg-transparent text-primary hover:text-primaryh"
      onClick={props.onClick}
    >
      <FontAwesomeIcon icon={faTimesCircle} />
    </button>
  )
}
