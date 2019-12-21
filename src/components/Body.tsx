import * as React from 'react'
import { useState, useEffect } from 'react'
import { Global, css } from '@emotion/core'
import styled, { darkTheme, lightTheme } from '../styles'
import { ThemeProvider } from 'emotion-theming'

export default function Body(props: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(lightTheme)

  useEffect(() => {
    const useDarkTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = useDarkTheme ? darkTheme : lightTheme
    setTheme(theme)
  }, [setTheme])

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            background-color: ${theme.colors.background};
            color: ${theme.colors.primary};
          }
        `}
      />
      {props.children}
    </ThemeProvider>
  )
}
