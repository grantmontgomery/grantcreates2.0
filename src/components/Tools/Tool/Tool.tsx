import * as React from "react"
import css from "./Tool.module.css"

type Props = {
  name: string
}

type SVGFunction = () => SVGElement

export const Tool: React.FC<Props> = ({ name }) => {
  const displaySVG: SVGFunction = () => {
    if (name === "React") {
      const react: {
        [key: string]: SVGFunction
      } = require("../../Icons/ReactIcon")
      return react.ReactIcon()
    } else {
      const filteredName = name.replace(/[\W_]+/g, "")

      const svgElem: {
        [key: string]: SVGFunction
      } = require(`../../Icons/${filteredName}`)
      return svgElem[`${filteredName}`]()
    }
  }
  return (
    <div className={css.toolWrapper}>
      {displaySVG()}
      <p>{name}</p>
    </div>
  )
}
