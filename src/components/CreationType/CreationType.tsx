import * as React from "react"
import { displayCreations } from "../Creations"
import { useModalState } from "../../state/ModalGlobal"
import { ModalDark } from "../ModalDark"
import css from "./CreationType.module.css"

export const CreationType: React.FC<{ type: string }> = ({ type }) => {
  const {
    windows: { creation },
  } = useModalState()

  return (
    <div className={css.typeWrapper}>
      <div className={css.innerTypes} style={{ zIndex: creation ? 4 : 1 }}>
        {displayCreations(type)}
      </div>
    </div>
  )
}
