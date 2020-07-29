import * as React from "react"
import { useModalState, useModalDispatch } from "../../state/ModalGlobal"
import { modalActions } from "../../state/actions"
import css from "./ModalDark.module.css"

export const ModalDark: React.FC = () => {
  const { modal } = useModalState()
  const modalDispatch = useModalDispatch()

  // const modalDarkRef = React.useRef<HTMLElement|null>(null)

  // React.useLayoutEffect(() =>
  //   modalDarkRef.current?.focus()
  // )

  return modal ? (
    <div
      className={css.modalWrapper}
      onClick={() => modalDispatch(modalActions("CLOSE"))}
    ></div>
  ) : null
}
