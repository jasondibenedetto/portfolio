module.exports = {
  siteMetadata: {
    title: `Jason Di Benedetto`,
    author: `Jason Di Benedetto`,
    description: `Software Engineer based in Adelaide, Australia.`
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
        name: `Jason Di Bendetto`,
        short_name: `Jason Di Bendetto`,
        start_url: `/`,
        background_color: `#e6b077`,
        theme_color: `#e6b077`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      }
    },
    `gatsby-plugin-typescript`
  ]
};
