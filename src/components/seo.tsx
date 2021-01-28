import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const SEO: React.FC = () => {
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
      {/* <link
        rel="preload"
        href={ObjektivBold}
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={Objektiv}
        type="font/woff"
        crossOrigin="anonymous"
      />  */}
      <meta name="description" content={description} />
      <meta name="lang" content={lang} />
      <meta name="author" content={author} />
      <meta name="url" content={url} />
      <meta
        name="keywords"
        content="Grant Montgomery, Grant Creates, React Developer, Web Developer, Software Engineer"
      />
      <meta property="og:image" title="main logo" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@grantcreates" />
      <meta name="twitter:card" content={image} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" title="main logo" content={image} />
<!--       <script async src='https://bootstrap.development.intellipse.com/bootstrap.js'></script> -->
    </Helmet>
  )
}
