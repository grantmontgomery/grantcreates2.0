import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Creation } from "./Creation"

export const displayCreations = (type: string) => {
  const {
    allCreationsJson: { edges },
  } = useStaticQuery(
    graphql`
      query MyQuery {
        allCreationsJson {
          edges {
            node {
              apps {
                details
                detailsName
                githublink
                link
                name
                subTitle
                technologies
              }
              websites {
                details
                detailsName
                githublink
                link
                name
                technologies
                subTitle
              }
            }
          }
        }
      }
    `
  )

  const { apps, websites } = edges[0].node

  switch (type) {
    case "apps":
      return apps.map(creation => {
        return (
          <Creation
            key={`${creation.name}${creation.technologies}`}
            type="apps"
            data={creation}
          ></Creation>
        )
      })
    case "websites":
      return websites.map(creation => {
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
