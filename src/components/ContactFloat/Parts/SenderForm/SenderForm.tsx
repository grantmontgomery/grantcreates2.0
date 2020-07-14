import * as React from "react"
import css from "./SenderForm.module.css"

export const SenderForm = () => {
  return (
    <div className={css.senderWrapper}>
      <div className={css.nameWrapper}>
        <label htmlFor="">Name</label>
        <input type="text" />
        <div className={css.errorWrapper}></div>
      </div>
      <div className={css.companyWrapper}></div>
      <div className={css.emailWrapper}></div>
      <div className={css.phoneWrapper}></div>
    </div>
  )
}
