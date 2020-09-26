import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Creation } from "./Creation"

export const displayCreations: (type: string) => JSX.Element[] | null = (
  type: string
) => {
  const {
    allCreationsJson: { nodes },
  } = useStaticQuery(
    graphql`
      query MyQuery {
        allCreationsJson {
          nodes {
            websites {
              details
              detailsName
              githublink
              link
              name
              subTitle
              technologies
            }
            apps {
              details
              detailsName
              githublink
              link
              name
              subTitle
              technologies
            }
          }
        }
      }
    `
  )

  const {
    apps,
    websites,
  }: {
    apps: { [key: string]: string }[]
    websites: { [key: string]: string }[]
  } = nodes[0]

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
    default:
      return null
  }
}
