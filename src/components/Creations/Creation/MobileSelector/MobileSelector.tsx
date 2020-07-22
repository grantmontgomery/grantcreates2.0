import * as React from "react"
import { SekndIcon } from "../../CreationIcons"
import { CreationDataInterface } from "../../Data"
import css from "./MobileSelector.module.css"

type Props = {
  handleTap: any
  type: string
  name: string
}

type CreationsType = (name: string) => React.FunctionComponent

export const MobileSelector: React.FunctionComponent<Props> = ({
  name,
  handleTap,
  type,
}) => {
  const appCreations: CreationsType = name => {
    switch (name) {
      case "Seknd":
        return <SekndIcon></SekndIcon>
    }
  }

  // const websiteCreations = () => {
  //   switch (name) {
  //     case "Grant Creates":
  //       console.log("grant creates")
  //   }
  // }

  const checkType = () => {
    return type === "apps" ? appCreations(name) : null
  }

  return (
    <div className={css.selectorWrapper} onClick={handleTap}>
      {checkType()}
    </div>
  )
}
