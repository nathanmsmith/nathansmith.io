import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Link from '../components/Link'

import { PostsQuery } from '../queries'

export const query = graphql`
  query Posts {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { draft: { ne: true } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            year: date(formatString: "YYYY")
            ISODate: date
            date: date(formatString: "MMMM D")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default function Posts({ data }: { data: PostsQuery }) {
  const postsByYear = data.posts.edges.reduce(
    (obj: { [key: string]: any }, { node }) => {
      const { year } = node.frontmatter
      if (obj.hasOwnProperty(year)) {
        obj[year].push(node)
      } else {
        obj[year] = [node]
      }
      return obj
    },
    {}
  )

  return (
    <Page pageTitle="Posts">
      <ul>
        <>
          {Object.keys(postsByYear).map((year, i) => (
            <React.Fragment key={i}>
              <h3 className="mb-3 text-xl font-bold">{year}</h3>
              {postsByYear[year].map((post, i) => {
                const { ISODate, date } = post.frontmatter
                return (
                  <li className="mb-4" key={i}>
                    <time
                      className="block text-gray-500 text-xs -mb-1"
                      dateTime={ISODate}
                    >
                      {date}
                    </time>
                    <Link href={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </li>
                )
              })}
            </React.Fragment>
          ))}
        </>
      </ul>
    </Page>
  )
}
