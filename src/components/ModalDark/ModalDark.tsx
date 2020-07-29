import * as React from "react"
import { useModalState, useModalDispatch } from "../../state/ModalGlobal"
import { modalActions } from "../../state/actions"
import css from "./ModalDark.module.css"

export const ModalDark: React.FC<{ location: string }> = ({ location }) => {
  const {
    modal,
    windows: { creation },
  } = useModalState()
  const modalDispatch = useModalDispatch()

  switch (creation) {
    case true:
      return location === "creationTypes" && modal ? (
        <div
          className={css.modalWrapper}
          onClick={() => modalDispatch(modalActions("CLOSE"))}
        ></div>
      ) : null
    case false:
      return location === "layout" && modal ? (
        <div
          className={css.modalWrapper}
          onClick={() => modalDispatch(modalActions("CLOSE"))}
        ></div>
      ) : null
    default:
      return null
  }
}
