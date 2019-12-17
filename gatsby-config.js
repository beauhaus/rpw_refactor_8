
module.exports = {
  siteMetadata: {
    title: "RecessPlayWorks",
    author: "RecessPlayworks.com",
    description: "A place to rest, to play and to work.",
    street: "66 Danbury Road",
    town: "Ridgefield, CT 06877"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
     {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "eventposts",
        path: "eventposts"
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: ['gatsby-remark-images'],
        plugins: ['gatsby-remark-images'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "images"
      }
    },
  ],
}
