import * as React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import PortraitPicker from '../components/PortraitPicker';
import renderAst from '../utils/renderAst';

export const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/index/" }) {
      htmlAst
    }
    images: allImageSharp {
      edges {
        node {
          sizes(maxWidth: 800, maxHeight: 800) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`;

export default function Index({ data }) {
  return (
    <Container>
      <PortraitPicker images={data.images} />
      {renderAst(data.markdownRemark.htmlAst)}
    </Container>
  );
}
