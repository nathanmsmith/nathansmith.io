const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      wikiPages: allGithubFile {
        edges {
          node {
            relativePath
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/components/Post.tsx'),
        context: {
          slug: node.fields.slug,
        },
      })
    })
    result.data.wikiPages.edges.forEach(({ node }) => {
      console.log(node, node.relativePath, node.childMarkdownRemark.fields.slug)
      createPage({
        path: `wiki${node.childMarkdownRemark.fields.slug}`,
        component: path.resolve('./src/components/WikiPage.tsx'),
        context: {
          relativePath: node.relativePath,
        },
      })
    })
  })
}
