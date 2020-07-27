// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    seo: {
      title: "Grant Creates",
      description: "The Portfolio Site of Grant Montgomery",
      author: "Grant Montgomery",
    },
    creations: {
      apps: [
        {
          name: "Seknd",
          subTitle: "React Web Application",
          detailsName: "Seknd (Second)",
          details: "",
          technologies: "React Redux Express Sass",
          githublink: "https://github.com/grantmontgomery/seknd",
          link: "sekndapp.com",
        },
      ],
      websites: [
        {
          name: "Grant Creates",
          subTitle: "Gatsby Portfolio Website",
          detailsName: "Grant Creates",
          details: "My portfolio site",
          technologies: "Typescript Gatsby Express Sass",
          githublink: "https://github.com/grantmontgomery/grantcreates2.0",
          link: "",
        },
      ],
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-web-font-loader`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-express`,
      options: {
        output: `config/gatsby-express.json`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          familes: ["Custom"],
          urls: ["/static/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
