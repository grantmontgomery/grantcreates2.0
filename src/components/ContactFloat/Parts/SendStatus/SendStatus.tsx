import * as React from "react"
import css from "./SendStatus.module.css"

export const SendStatus: React.FC = () => {
  return (
    <div className={css.senderStatusWrapper}>
      <div className={css.statusWrapper}></div>
    </div>
  )
}
