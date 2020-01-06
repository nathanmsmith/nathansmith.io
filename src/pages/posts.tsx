import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Page from '../components/Page'
// import Link from '../components/Link'

import { PostsQuery } from '../queries'

export const query = graphql`
  query Posts {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            year: date(formatString: "YYYY")
            ISODate: date
            date: date(formatString: "MMMM D")
            draft
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
  console.log('data:', data)
  const postsByYear = data.posts.edges.reduce(
    (obj: { [key: string]: any }, { node }) => {
      if (node.frontmatter.year && !node.frontmatter.draft) {
        const { year } = node.frontmatter
        if (obj.hasOwnProperty(year)) {
          obj[year].push(node)
        } else {
          obj[year] = [node]
        }
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
            <>
              <h3 className="mb-3" key={i}>
                {year}
              </h3>
              {postsByYear[year].map(post => {
                const { ISODate, date } = post.frontmatter
                return (
                  <li className="mb-4">
                    <time
                      className="block text-gray-700 text-xs -mb-1"
                      dateTime={ISODate}
                    >
                      {date}
                    </time>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  </li>
                )
              })}
            </>
          ))}
        </>
      </ul>
    </Page>
  )
}
