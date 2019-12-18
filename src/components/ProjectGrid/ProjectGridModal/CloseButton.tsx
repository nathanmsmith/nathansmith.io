import * as React from 'react'
import { css, Theme, useTheme } from '../../../styles'
import { transparentize } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

interface CloseButtonProps {
  onClick: () => void
}

export default function CloseButton(props: CloseButtonProps) {
  const theme = useTheme<Theme>()
  return (
    <button
      onClick={props.onClick}
      css={css`
        position: absolute;
        top: 20px;
        right: 20px;
        border: 0;
        padding: 0;
        background-color: transparent;
        text-decoration: none;
        color: ${theme.colors.primary};
        &:hover {
          cursor: pointer;
          color: ${transparentize(0.4, theme.colors.primary)};
        }
      `}
    >
      <FontAwesomeIcon icon={faTimesCircle} />
    </button>
  )
}
