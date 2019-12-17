import { Theme } from './themes'
import styled, { CreateStyled } from '@emotion/styled'
import { useTheme } from 'emotion-theming'

export { Theme, useTheme }
export default styled as CreateStyled<Theme>
export { css } from '@emotion/core'
export { lightTheme, darkTheme } from './themes'
