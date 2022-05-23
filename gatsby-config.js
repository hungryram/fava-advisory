module.exports = {
  siteMetadata: {
    title: `Fava Advisory`,
    siteUrl: `https://www.favaadvisory.com/`
  },
  plugins: [
    "gatsby-plugin-image",
    `gatsby-plugin-netlify`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/fava-favicon.png"
      }
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-TY236HPCG6", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true
        }
      },
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
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "listings",
        "path": `${__dirname}/content/listings`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": `${__dirname}/content/pages`
      },
    },
  ]
};