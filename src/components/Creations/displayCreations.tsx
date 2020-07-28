import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Creation } from "./Creation"

export const displayCreations = (type: string) => {
  const {
    allDataJson: { nodes },
  } = useStaticQuery(
    graphql`
      query MyQuery {
        allDataJson {
          nodes {
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
    `
  )

  const { apps, websites } = nodes[0]

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
