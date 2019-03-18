import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Page from '../components/Page'
import Link from '../components/Link'

export const query = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default function Posts({ data }: any) {
  const postsByYear = data.posts.edges.reduce((obj: any, { node }: any) => {
    if (node.frontmatter.date && !node.frontmatter.draft) {
      const date = new Date(node.frontmatter.date)
      const year = date.getFullYear()
      if (obj.hasOwnProperty(year)) {
        obj[year].push(node)
      } else {
        obj[year] = [node]
      }
    }
    return obj
  }, {})

  return (
    <Page pageTitle="Posts">
      <ul
        css={css`
          list-style: none;
          margin: 0;
        `}
      >
        <>
          {Object.keys(postsByYear).map((year, i) => (
            <>
              <h3 key={i}>{year}</h3>
              {postsByYear[year].map((post: any) => {
                const { date, draft } = post.frontmatter
                if (date && !draft) {
                  return (
                    <li>
                      <time
                        dateTime={date.toISOString()}
                        css={css`
                          display: block;
                          color: #ccc;
                          font-size: 1rem;
                        `}
                      >
                        {date.toLocaleDateString(undefined, {
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <Link href={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </li>
                  )
                }
              })}
            </>
          ))}
        </>
      </ul>
    </Page>
  )
}
