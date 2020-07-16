import * as React from "react"
import css from "./Pointer.module.css"

export const Pointer = () => {
  return (
    <div className={css.pointerWrapper}>
      <div className={css.page1}></div>
      <div className={css.line}></div>
      <div className={css.page2}></div>
    </div>
  )
}
