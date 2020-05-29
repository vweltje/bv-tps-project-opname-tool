module.exports = {
  siteMetadata: {
    siteUrl: "https://projectopnametool.netlify.app/",
    title: `Project opname tool`,
    description: `Brugmans Vloeren & Total Project Service project opname tool`,
    author: `@vweltje`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Project opname tool - Brugmans vloeren & total project service`,
        short_name: `Project opname tool`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#004f7e`,
        display: `minimal-ui`,
        icon: "static/images/icon/icon-512.png",
        icons: [
          {
            src: "static/images/icon-128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "static/images/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "static/images/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        include_favicon: true
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://projectopnametool.netlify.app/",
        policy: [{ userAgent: "*", disallow: "/" }]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`
      }
    },
    "gatsby-plugin-lodash",
    "gatsby-optional-chaining",
    "gatsby-plugin-eslint",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "_variables.scss";`,
        includePaths: [`${__dirname}/src/scss/`],
        sourceMap: true,
        outputStyle: "compressed"
      }
    },
    "gatsby-plugin-netlify"
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
