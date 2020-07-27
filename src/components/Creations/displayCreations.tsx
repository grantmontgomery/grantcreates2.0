import * as React from "react"
// import { creationsData } from "./Data"
import { graphql, useStaticQuery } from "gatsby"
import { Creation } from "./Creation"

export const displayCreations = (type: string) => {
  const {
    site: {
      siteMetadata: { creations },
    },
  } = useStaticQuery(
    graphql`
      query MyQuery {
        site(siteMetadata: { creations: {} }) {
          siteMetadata {
            creations {
              apps {
                name
                subTitle
                detailsName
                details
                technologies
                githublink
                link
              }
              websites {
                name
                subTitle
                detailsName
                details
                technologies
                githublink
                link
              }
            }
          }
        }
      }
    `
  )

  switch (type) {
    case "apps":
      return creations.apps.map(creation => {
        return (
          <Creation
            key={`${creation.name}${creation.technologies}`}
            type="apps"
            data={creation}
          ></Creation>
        )
      })
    case "websites":
      return creations.websites.map(creation => {
        return (
          <Creation
            key={`${creation.name}${creation.technologies}`}
            type="websites"
            data={creation}
          ></Creation>
        )
      })
  }
}
