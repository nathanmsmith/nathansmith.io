import * as React from 'react'
import { css } from 'emotion'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import randomInt from '../utils/randomInt'

interface PortraitPickerProps {
  data: any
}

export function PortraitPicker(props: PortraitPickerProps) {
  const images = props.data.allFile.edges
  const image = images[randomInt(0, images.length)].node.childImageSharp
  return (
    <a href="/">
      <Img
        style={{ display: 'block' }}
        className={css`
          max-width: 320px;
          max-height: 320px;
          color: transparent;
          margin: 0 auto 2rem;
          border-radius: 50%;
          border: 12px solid rgba(0, 0, 0, 0.025);

          @media (max-width: 340px) {
            margin-bottom: 1.4rem;
          }
        `}
        fluid={image.fluid}
        alt="A photo of Nathan Smith."
        title="Click again?"
      />
    </a>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/nathan/" } }) {
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
