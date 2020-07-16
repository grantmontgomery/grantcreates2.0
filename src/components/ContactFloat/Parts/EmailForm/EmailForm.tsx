import * as React from "react"
import css from "./EmailForm.module.css"

export const EmailForm = ({ setState }) => {
  return (
    <div className={css.emailWrapper}>
      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Subject</label>
        </div>
        <div className={css.inputWrapper}>
          <input type="text" />
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}></div>
        </div>
      </div>
      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Message</label>
        </div>
        <div className={css.inputWrapper}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="(Length goes beyond section border)"
          ></textarea>
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}>Can't leave blank</div>
        </div>
      </div>
      <div
        className={css.backWrapper}
        onClick={() => setState(state => ({ ...state, formSide: "sender" }))}
      ></div>
      <div className={css.sendWrapper}></div>
    </div>
  )
}
