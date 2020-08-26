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
            image
            lang
          }
        }
      }
    `
  )

  const {
    siteMetadata: { title, description, url, lang, author, image },
  } = site
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="lang" content={lang} />
      <meta name="author" content={author} />
      <meta name="url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content={image} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
