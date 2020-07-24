import * as React from "react"
import css from "./Pointer.module.css"

interface Props {
  formSide: string
  mailStatus: string
}

export const Pointer: React.FC<Props> = ({ formSide, mailStatus }) => {
  return (
    <div className={`${css.pointerWrapper} ${css[`${mailStatus}`]}`}>
      <div
        className={`${css.page} ${formSide === "sender" ? css.fill : null}`}
      ></div>
      <div className={css.line}></div>
      <div
        className={`${css.page} ${formSide === "sender" ? null : css.fill}`}
      ></div>
    </div>
  )
}
