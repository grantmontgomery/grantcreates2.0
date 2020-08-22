import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const SEO = () => {
  const { site } = useStaticQuery(
    graphql`
      query SEOQuery {
        site {
          siteMetadata {
            author
            description
            title
            url
            lang
          }
        }
      }
    `
  )

  const SEOImage = useStaticQuery(
    graphql`
      query ImageQuery {
        file(relativePath: { eq: "GrantCreatesAnvilSEO.png" }) {
          childImageSharp {
            fixed {
              src
              srcSet
            }
            fluid {
              src
              srcSet
            }
          }
        }
      }
    `
  )

  console.log(SEOImage)

  const {
    siteMetadata: { title, description, url, lang, author },
  } = site
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="lang" content={lang} />
      <meta name="author" content={author} />
      <meta name="url" content={url} />
      <meta property="og:image" content="" />
    </Helmet>
  )
}
