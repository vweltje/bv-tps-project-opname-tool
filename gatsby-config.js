module.exports = {
  siteMetadata: {
    title: `Project opname tool`,
    description: `Brugmans Vloeren & Total Project Service project opname tool`,
    author: `@vweltje`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
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
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
