import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Overpass:400,700');
`

export default styled('div')`
  max-width: 40rem;
  margin: 2rem auto;
  font-family: 'Overpass', 'Helvetica Neue', 'Helvetica', 'Lato', sans-serif;
  font-size: 1.3rem;

  @media (max-width: 480px) {
    margin: 2rem 1rem;
  }
`
