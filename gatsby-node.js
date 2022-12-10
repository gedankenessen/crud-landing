exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Wiki section
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

  return Promise.all([wikiEntry, wikiIndex]);
}
