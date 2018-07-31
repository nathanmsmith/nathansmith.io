import * as React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/Head';
import Container from '../components/Container';
import PortraitPicker from '../components/PortraitPicker';
import renderAst from '../utils/renderAst';

export const query = graphql`
  query IndexQuery {
    markdownRemark(fileAbsolutePath: { regex: "/index/" }) {
      htmlAst
    }
    images: allImageSharp {
      edges {
        node {
          fixed(width: 320, height: 320) {
            ...GatsbyImageSharpFixed
            aspectRatio
          }
        }
      }
    }
  }
`;

export default function Index({ data }) {
  return (
    <>
      <Head />
      <Container>
        <PortraitPicker images={data.images} />
        {renderAst(data.markdownRemark.htmlAst)}
      </Container>
    </>
  );
}
