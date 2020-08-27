require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Grant Montgomery | React Developer | For Hire",
    description:
      "A React Developer based out of Los Angeles seeking a Front-End Developer position.",
    url: "https://www.grantcreates.com",
    author: "Grant Montgomery",
    image: "src/images/GrantCreatesAnvilSeo.png",
    lang: "en",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-web-font-loader`,
    `gatsby-transformer-json`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          familes: ["Objektiv Mk2, Objektiv Mk2 Bold"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: `starter`,
        start_url: `/`,
        theme_color_in_head: false,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
