import * as React from "react"
import { useModalState, useModalDispatch } from "../../state/ModalGlobal"
import { modalActions } from "../../state/actions"
import css from "./ModalDark.module.css"

export const ModalDark: React.FC = () => {
  const { modal } = useModalState()
  const modalDispatch = useModalDispatch()
  return modal ? (
    <div
      className={css.modalWrapper}
      onClick={() => modalDispatch(modalActions("CLOSE"))}
    ></div>
  ) : null
}
