import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Overpass',
      styles: ['400', '700'],
    },
  ],
  bodyFontFamily: [
    'Overpass',
    'Helvetica Neue',
    'Helvetica',
    'Futura',
    'sans-serif',
  ],
  headerFontFamily: [
    'Overpass',
    'Helvetica Neue',
    'Helvetica',
    'Futura',
    'sans-serif',
  ],
})

export default typography
