import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            desc
          }
          excerpt
        }
      }
    }
    `)

  return data.allMdx.nodes.map((post, idx) => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    desc: post.frontmatter.desc,
    excerpt: post.excerpt
  }))
}

export default usePosts;