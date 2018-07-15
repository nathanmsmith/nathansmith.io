import * as React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import PortraitPicker from '../components/PortraitPicker';
import renderAst from '../utils/renderAst';

export const query = graphql`
  query IndexQuery {
    markdownRemark(fileAbsolutePath: { regex: "/index/" }) {
      htmlAst
    }
    images: file(relativePath: { regex: "/kerck.jpeg/" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
          aspectRatio
        }
      }
    }
  }
`;

export default function Index({ data }) {
  return (
    <Container>
      <PortraitPicker image={data.images} />
      {renderAst(data.markdownRemark.htmlAst)}
    </Container>
  );
}
