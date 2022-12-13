exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Start wiki-index
  const wikiIndexTemplate = require.resolve(`./src/templates/wiki-index.jsx`)

  const wikiIndex = graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter:{ type: {eq: "wiki-index"}}}
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      return createPage({
        path: node.frontmatter.slug,
        component: wikiIndexTemplate,
        context: {
          slug: node.frontmatter.slug,
          id: node.id,
        },
      })
    })
  });

  // Start wiki-entry
  const wikiEntryTemplate = require.resolve(`./src/templates/wiki-entry.jsx`)

  const wikiEntry = graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter:{ type: {eq: "wiki-entry"}}}
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      return createPage({
        path: `wiki/${node.frontmatter.slug}`,
        component: wikiEntryTemplate,
        context: {
          id: node.id,
        },
      })
    })
  });

  // Start blog-entry

  // Start wiki-entry
  const blogEntryTemplate = require.resolve(`./src/templates/blog-entry.jsx`)

  const blogEntry = graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter:{ type: {eq: "blog-entry"}}}
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      return createPage({
        path: `blog/${node.frontmatter.slug}`,
        component: blogEntryTemplate,
        context: {
          id: node.id,
        },
      })
    })
  });


  // Combining all
  return Promise.all([wikiEntry, wikiIndex, blogEntry]);
}
