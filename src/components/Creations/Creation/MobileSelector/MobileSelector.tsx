import * as React from "react"
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
  const appCreations = (name: string) => {}

  const websiteCreations = (name: string) => {
    switch (name) {
      case "Grant Creates":
        return <Anvil location="creation"></Anvil>
      default:
        return <></>
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
