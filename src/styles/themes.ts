import { lighten, transparentize } from 'polished'

export interface Theme {
  type: string
  colors: {
    primary: string
    primaryHover: string
    background: string
    border: string
    linkUnderline: string
  }
}

const darkTheme: Theme = {
  type: 'dark',
  colors: {
    primary: '#fff',
    primaryHover: transparentize(0.4, '#fff'),
    background: '#0e0e0e',
    border: 'rgba(255, 255, 255, 0.025)',
    linkUnderline: 'rgba(255, 255, 255, 0.1)',
  },
}

const lightTheme: Theme = {
  type: 'light',
  colors: {
    primary: '#000',
    primaryHover: transparentize(0.4, '#000'),
    background: '#fff',
    border: 'rgba(0, 0, 0, 0.025)',
    linkUnderline: 'rgba(0, 0, 0, 0.1)',
  },
}

export { darkTheme, lightTheme }
