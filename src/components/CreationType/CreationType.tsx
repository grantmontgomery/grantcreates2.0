import * as React from "react"
import { displayCreations } from "../Creations"
import { ModalDark } from "../ModalDark"
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
