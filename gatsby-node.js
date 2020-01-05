/* Node Docs on "path" 
https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_basename_path_ext
*/

const path = require("path");

/*
 * thanks to Andrew Mead
 * https://youtu.be/8t0vNu2fCCM?t=9980
 * AND TO...
 * 
 * https://swas.io/blog/using-multiple-queries-on-gatsbyjs-createpages-node-api/
 * for the multiple queries code
 * 
 */

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const evtPostTemplate = path.resolve('./src/templates/event-post.js');

  const blogTemplate = path.resolve('./src/templates/blog.js');

  const result = await graphql(`
    query {
      contentful: allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      events: allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
      `)
  if (result.errors) {
    reporter.panic('failed to create posts from gatsby-node.js', result.errors)
  }
  const eventposts = result.data.events.nodes;
  eventposts.forEach(evtPost => {
    if (evtPost.frontmatter.slug) {
      eventposts.forEach(evtPost => {
        createPage({
          path: `/events/${evtPost.frontmatter.slug}`,
          component: evtPostTemplate,
          context: {
            slug: evtPost.frontmatter.slug
          }
        })
      })
    }
  })



  const blogposts = result.data.contentful.edges;
  blogposts.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

}
