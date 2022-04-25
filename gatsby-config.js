module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image",
    `gatsby-plugin-netlify`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "legal",
        "path": `${__dirname}/content/legal`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "team",
        "path": `${__dirname}/content/team`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": `${__dirname}/content/blog`
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        // Conditionally set the typeName so that we both use a lowercased and capitalized type name
        typeName: ({ node }) => {
          const name = node.sourceInstanceName
          if (name === `blog`) {
            return `Blog`
          }
          if (name === `parks`) {
            return `park`
          }
          return name
        },
      },
    },
  ]
};