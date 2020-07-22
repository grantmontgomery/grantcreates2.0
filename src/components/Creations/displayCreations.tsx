import * as React from "react"
import { creationsData, CreationDataInterface } from "./Data"
import { Creation } from "./Creation"

type CreationProps = {
  type: string
  data: CreationDataInterface
}

type CreationsType = (type: string) => React.FC<CreationProps>[]

export const displayCreations: CreationsType = type => {
  switch (type) {
    case "apps":
      return creationsData.apps.map(creation => {
        return <Creation type="apps" data={creation}></Creation>
      })
    case "websites":
      return creationsData.websites.map(creation => {
        return <Creation type="websites" data={creation}></Creation>
      })
  }
}
