import * as React from 'react'
import { css } from '@emotion/core'
import { transparentize } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

interface CloseButtonProps {
  onClick: () => void
}

const CloseButton = (props: CloseButtonProps) => (
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
      color: white;
      &:hover {
        cursor: pointer;
      }
    `}
  >
    <FontAwesomeIcon
      css={css`
        color: #000;
        :hover {
          color: ${transparentize(0.4, '#000')};
        }
      `}
      icon={faTimesCircle}
    />
  </button>
)

export default CloseButton
