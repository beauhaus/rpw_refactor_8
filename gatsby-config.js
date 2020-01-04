
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
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'posts',
    //     path: 'posts',
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "images"
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: "recess_playworks"
      }
    },
  ],
}
