import * as React from 'react'
import { css } from '@emotion/core'

enum Technologies {
  JavaScript = 'JavaScript',
  React = 'React',
  HTML = 'HTML',
  CSS = 'CSS',
}

const TechnologyLink = props => {
  let link = null
  switch (props.name) {
    case 'React':
      link = 'https://reactjs.org'
      break
    case 'Flow':
      link = 'https://flow.org'
      break
    case 'Redux':
      link = 'https://redux.js.org'
      break
    case 'TypeScript':
      link = 'https://www.typescriptlang.org'
      break
    case 'Sass':
      link = 'https://sass-lang.com'
      break
    case 'Bootstrap':
      link = 'https://getbootstrap.com'
      break
    case 'jQuery':
      link = 'https://jquery.com'
      break
    case 'Swift':
      link = 'https://swift.org'
      break
    default:
      break
  }

  return (
    <a
      css={css`
        display: flex;
        align-items: center;
      `}
    />
  )
}

export default TechnologyLink
