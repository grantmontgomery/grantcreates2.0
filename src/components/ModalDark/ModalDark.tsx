import * as React from "react"
import { useModalState, useModalDispatch } from "../../state/ModalGlobal"
import { modalActions } from "../../state/actions"
import css from "./ModalDark.module.css"

type Props = {
  inMobileNav?: boolean
}

export const ModalDark: React.FC<Props> = ({ inMobileNav }) => {
  const {
    modal,
    windows: { navLinks },
  } = useModalState()
  const modalDispatch = useModalDispatch()

  if (navLinks) {
    return inMobileNav && modal ? (
      <div
        className={css.modalWrapper}
        onClick={() => modalDispatch(modalActions("CLOSE"))}
      ></div>
    ) : null
  } else {
    return modal && !navLinks ? (
      <div
        className={css.modalWrapper}
        onClick={() => modalDispatch(modalActions("CLOSE"))}
      ></div>
    ) : null
  }
}
