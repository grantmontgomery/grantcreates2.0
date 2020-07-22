import * as React from "react"
import { creationsData } from "./Data"
import { Creation } from "./Creation"
import css from "./Creations.module.css"

export const Creations = (type: string) => {
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
