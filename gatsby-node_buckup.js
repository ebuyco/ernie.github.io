/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const path = require('path');
// const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField } = actions;
//     if (node.internal.type === `MarkdownRemark`) {
//         const slug = createFilePath({
//             node,
//             getNode,
//             basePath: `posts` })
//         createNodeField({
//             node,
//             name: `slug`,
//             value: slug,
//         })
//     }
// }

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions;
//     return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               type
//             }
//           }
//         }
//       }
//     }
//   `
//     ).then(result => {
//         result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//             createPage({
//                 path: node.fields.slug,
//                 component: path.resolve('./src/pages/about.js'),
//                 context: {
//                     // Data passed to context is available
//                     // in page queries as GraphQL variables.
//                     slug: node.fields.slug,
//                 },
//             })
//         })
//     })
// }

// const path = require('path');
// const { createFilePath } = require('gatsby-source-filesystem');

// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField} = actions;
//     if (node.internal.type === `MarkdownRemark`) {
//                 const slug = createFilePath({
//                     node,
//                     getNode,
//                     basePath: `posts` })
//                 createNodeField({
//                     node,
//                     name: `slug`,
//                     value: slug,
//                 });
//         }
// }

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions;
//     return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               type
//             }
//           }
//         }
//       }
//     }
//   `
//     ).then(result => {
//         result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//             createPage({
//                 path: node.fields.slug,
//                 component: path.resolve('./src/pages/facebook.js'),
//                 context: {
//                     // Data passed to context is available
//                     // in page queries as GraphQL variables.
//                     slug: node.fields.slug,
//                 }
//             });
//         });
//         resolve();
//     });
// };



const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `posts`
    })
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${ slug }`
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
        {
            allMarkdownRemark {
                edges {
                  node {
                    id
                    fields{
                      slug
                    }
                    frontmatter {
                      title
                      date(formatString: "MMM DD YYYY")
                    }
                  }
                }
              }
        }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/posts/PostPage.js'),
          context: {
            slug: node.fields.slug
          }
        })
      })
      resolve()
    })
  })
}




const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `posts`
    })
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${ slug }`
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
    {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/pages/about.js'),
          context: {
            slug: node.fields.slug
          }
        })
      })
      resolve()
    })
  })
}
