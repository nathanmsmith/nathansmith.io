import * as React from 'react';
import { Helmet } from 'react-helmet';

export default function Head() {
  return (
    <Helmet>
      <title>Nathan Smith in HTML</title>
      <meta
        name="description"
        content="Description of the page less than 150 characters"
      />

      {/* TODO: favicons! */}

      <link rel="canonical" href="https://nathansmith.io" />

      {/* Facebook Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://example.com/page.html" />
      <meta property="og:title" content="Content Title" />
      <meta property="og:image" content="https://example.com/image.jpg" />
      <meta property="og:description" content="Description Here" />
      <meta property="og:site_name" content="Site Name" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@site_account" />
      <meta name="twitter:creator" content="@individual_account" />
      <meta name="twitter:url" content="https://example.com/page.html" />
      <meta name="twitter:title" content="Content Title" />
      <meta
        name="twitter:description"
        content="Content description less than 200 characters"
      />
      <meta name="twitter:image" content="https://example.com/image.jpg" />
    </Helmet>
  );
}
