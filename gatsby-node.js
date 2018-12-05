const path = require('path')

// create the pages programatically from the node we created earlier
exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const query = await graphql(`
    {
      allPublications {
        edges {
          node {
            extra {
              slug
            }
            publication {
              systemdata {
                contentType
              }
            }
          }
        }
      }
    }
  `)
  query.data.allPublications.edges.forEach(({node}) => {
    if (node.publication.systemdata.contentType === 'regular') {
      createPage({
        path: node.extra.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.extra.slug
        }
      })
    }
    if (node.publication.systemdata.contentType === 'author') {
      createPage({
        path: node.extra.slug,
        component: path.resolve('./src/templates/authorPage.js'),
        context: {
          slug: node.extra.slug
        }
      })
    }
  })
}
