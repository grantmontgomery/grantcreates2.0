import * as React from "react"
// import { Creation } from "../Creation"
import { Creations } from "../Creations"
import css from "./CreationType.module.css"

interface Props {
  type: string
}

export const CreationType = ({ type }: Props) => {
  return (
    <div className={`${css.typeWrapper}`}>
      <div className={`${css.innerTypes}`}>
        {/* <Creation type={type}></Creation> */}
        {Creations(type)}
      </div>
    </div>
  )
}
