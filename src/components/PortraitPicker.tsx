import * as React from 'react'
import { css, Theme, useTheme } from '../styles'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { PortraitPickerQuery } from '../queries'
import randomInt from '../utils/randomInt'

interface PortraitPickerProps {
  data: PortraitPickerQuery
}

function PortraitPicker(props: PortraitPickerProps) {
  const theme = useTheme<Theme>()
  const images = props.data.allFile.edges
  const image = images[randomInt(0, images.length)].node.childImageSharp
  return (
    <a href="/">
      <Img
        style={{ display: 'block' }}
        imgStyle={{ borderRadius: '50%' }}
        className="mx-auto max-w-xs max-h-xs rounded-full border-solid border-12"
        css={css`
          border-color: ${theme.colors.border};
        `}
        fluid={image.fluid}
        alt="Nathan Smith"
        title="Click again?"
      />
    </a>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query PortraitPicker {
        allFile(filter: { relativeDirectory: { regex: "/nathan/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(
                  maxWidth: 320
                  maxHeight: 320
                  quality: 85
                  cropFocus: ATTENTION
                ) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    `}
    render={data => <PortraitPicker data={data} />}
  />
)
