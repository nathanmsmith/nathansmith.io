import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Link from '../components/Link'

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
            date
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
    },
    {}
  )
  console.log('postsByYear:', postsByYear)

  return (
    <Page pageTitle="Posts">
      <ul>
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
                        className="block text-gray-700"
                        dateTime={date.toISOString()}
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
