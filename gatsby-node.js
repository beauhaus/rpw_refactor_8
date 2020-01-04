/* Node Docs on "path" 
https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_basename_path_ext
*/

const path = require("path");


/* this fetches contenful slugs */
 /* thanks to Andrew Mead
    https://youtu.be/8t0vNu2fCCM?t=9980

    */
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogTemplate = path.resolve('./src/templates/blog.js');
    const res = await graphql(`
    query {
        allContentfulBlogPost {
            edges {
              node {
                slug
              }
            }
          }
    }
    `)

   
    res.data.allContentfulBlogPost.edges.forEach((edge)=>{
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        }) 
    })

}

module.exports.createPages = async ({actions, graphql, reporter})=> {
    const evtPostTemplate = path.resolve('./src/templates/event-post.js');

    const result = await graphql(`
    query {
        allMdx {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }`);
      if (result.errors) {
          reporter.panic('failed to create evt post', result.errors)
      }

      const eventposts = result.data.allMdx.nodes;
                //   slug: `/events/${evtPost.frontmatter.slug}/`

      eventposts.forEach(evtPost => {
          actions.createPage({
              path: evtPost.frontmatter.slug,
              component: evtPostTemplate,
              context: {
                slug: evtPost.frontmatter.slug
              }
          })
      })

}