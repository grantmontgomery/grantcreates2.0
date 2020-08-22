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
    </Helmet>
  )
}
