/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`);

module.exports = {
  // Add common site data (not required by the theme, but recommended)
  siteMetadata: {
    title: "Jonas Williams and the Earthian Roots",
    description: "Reggae from Groningen, Netherlands",
    siteUrl: "https://github.com/ekafyi/starter-musician-theme"
  },
  plugins: [
    // Add gatsby-theme-musician to your site
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `content`, `images`),
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-theme-musician",
      // More info about the theme options:
      // https://github.com/ekafyi/gatsby-theme-musician/blob/master/docs/usage.md#theme-options
      options: {
        // These are default values that you can override
        // basePath: `/`,
        // content: `content`,
        // pwaName: null
      }
    }
  ]
};
