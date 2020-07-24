import * as React from "react"
// import { Creation } from "../Creation"
import { displayCreations } from "../Creations"
import css from "./CreationType.module.css"

interface Props {
  type: string
}

export const CreationType: React.FC<Props> = ({ type }) => {
  return (
    <div className={`${css.typeWrapper}`}>
      <div className={`${css.innerTypes}`}>{displayCreations(type)}</div>
    </div>
  )
}
