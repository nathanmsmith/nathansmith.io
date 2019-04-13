import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'

const FourOhFour = () => (
  <Page pageTitle="Downtime">
    <>
      <h1>Page Not Found</h1>
      <p>
        whoops. idk what you were looking for, but it's not here. sorry. let's
        go back to the last page you were at and pretend this didn't happen?
      </p>
      <p>&lt;3, nathan</p>
    </>
  </Page>
)

export default FourOhFour
