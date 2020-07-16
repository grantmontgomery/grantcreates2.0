import * as React from "react"
import css from "./Pointer.module.css"

interface Props {
  formSide: string
}

export const Pointer = ({ formSide }: Props) => {
  return (
    <div className={css.pointerWrapper}>
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
