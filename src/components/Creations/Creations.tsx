import * as React from "react"
import { creationsData } from "../../data"
import { Creation } from "./Creation"
import css from "./Creations.module.css"

export const Creations = ({ creationType }: string) => {
  switch (creationType) {
    case "apps":
      return creationsData.apps.map(creation => {
        return <Creation data={creation}></Creation>
      })
    case "websites":
      return creationsData.websites.map(creation => {
        return <Creation data={creation}></Creation>
      })
  }
}
