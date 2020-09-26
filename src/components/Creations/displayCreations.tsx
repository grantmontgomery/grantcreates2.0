import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Creation } from "./Creation"

export const displayCreations: (type: string) => JSX.Element[] | null = (
  type: string
) => {
  const {
    allCreationsJson: { edges },
  } = useStaticQuery(
    graphql`
      query MyQuery {
        allCreationsJson {
          edges {
            node {
              creations {
                name
                subTitle
                detailsName
                details
                technologies
                githublink
                link
                category
              }
            }
          }
        }
      }
    `
  )

  const creations: { [key: string]: string }[] = edges[0].node.creations

  switch (type) {
    case "apps":
      return creations
        .filter(creation => creation.category === "app")
        .map(creation => {
          return (
            <Creation
              key={`${creation.name}${creation.technologies}`}
              type="apps"
              data={creation}
            ></Creation>
          )
        })
    case "websites":
      return creations
        .filter(creation => creation.category === "website")
        .map(creation => {
          return (
            <Creation
              key={`${creation.name}${creation.technologies}`}
              type="websites"
              data={creation}
            ></Creation>
          )
        })
    default:
      return creations.map(creation => {
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
