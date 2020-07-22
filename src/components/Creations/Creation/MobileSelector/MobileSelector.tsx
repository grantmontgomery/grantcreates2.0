import * as React from "react"
import { SekndIcon } from "../../CreationIcons"
import css from "./MobileSelector.module.css"

type Props = {
  handleTap: any
  type: string
  name: string
}

export const MobileSelector = ({ name, handleTap, type }: Props) => {
  const appCreations = () => {
    switch (name) {
      case "Seknd":
        return <SekndIcon></SekndIcon>
    }
  }

  const websiteCreations = () => {
    switch (name) {
      case "Grant Creates":
        return
    }
  }

  return (
    <div className={css.selectorWrapper} onClick={handleTap}>
      {() => (type === "apps" ? appCreations() : websiteCreations())}
    </div>
  )
}
