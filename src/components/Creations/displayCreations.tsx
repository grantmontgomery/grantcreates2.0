import * as React from "react"
import { creationsData } from "./Data"
import { Creation } from "./Creation"

export const displayCreations = (type: string) => {
  switch (type) {
    case "apps":
      return creationsData.apps.map(creation => {
        return (
          <Creation
            key={`${creation.name}${creation.technologies}`}
            type="apps"
            data={creation}
          ></Creation>
        )
      })
    case "websites":
      return creationsData.websites.map(creation => {
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
