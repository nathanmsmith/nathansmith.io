import * as React from 'react'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { transparentize } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

interface CloseButtonProps {
  onClick: () => void
}

export default function CloseButton(props: CloseButtonProps) {
  const theme = useTheme()
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
        color: ${theme.colors.background}
        &:hover {
          cursor: pointer;
        }
      `}
    >
      <FontAwesomeIcon
        css={css`
          color: ${theme.colors.primary}
          :hover {
            color: ${transparentize(0.4, theme.colors.primary)};
          }
        `}
        icon={faTimesCircle}
      />
    </button>
  )
}
