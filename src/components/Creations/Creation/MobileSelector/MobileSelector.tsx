import * as React from "react"
import { SekndIcon } from "../../CreationIcons"
import { Anvil } from "../../../Logos"
import css from "./MobileSelector.module.css"

type Props = {
  handleTap: any
  type: string
  name: string | undefined
}

export const MobileSelector: React.FunctionComponent<Props> = ({
  name,
  handleTap,
  type,
}) => {
  const appCreations = (name: string) => {
    switch (name) {
      case "Seknd":
        return <SekndIcon location="creation"></SekndIcon>
    }
  }

  const websiteCreations = (name: string) => {
    switch (name) {
      case "Grant Creates":
        return <Anvil location="creation"></Anvil>
    }
  }

  const checkType = () => {
    return type === "apps" ? appCreations(name) : websiteCreations(name)
  }

  return (
    <div className={css.selectorWrapper} onClick={handleTap}>
      {checkType()}
    </div>
  )
}
