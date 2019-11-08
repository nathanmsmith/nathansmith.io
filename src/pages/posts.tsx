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
            draft
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
    console.log('node:', node)
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
              {postsByYear[year].map((post: any, i: number) => {
                const { date: dateString, draft } = post.frontmatter
                console.log('dateString:', dateString)
                console.log('draft:', draft)
                if (dateString && !draft) {
                  const date = new Date(dateString)
                  return (
                    <li key={i}>
                      <time
                        dateTime={date.toISOString()}
                        css={css`
                          display: block;
                          color: #ccc;
                          font-size: 0.8rem;
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
