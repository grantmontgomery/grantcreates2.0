import * as React from "react"
import css from "./SenderForm.module.css"

export const SenderForm = ({ setState }) => {
  return (
    <div className={css.senderWrapper}>
      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Name</label>
        </div>
        <div className={css.inputWrapper}>
          <input type="text" />
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}>No empty fields.</div>
        </div>
      </div>

      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Company</label>
        </div>
        <div className={css.inputWrapper}>
          <input type="text" placeholder="(Optional)" />
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}></div>
        </div>
      </div>
      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Email</label>
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
          <label htmlFor="">Phone</label>
        </div>
        <div className={css.inputWrapper}>
          <input type="text" />
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}></div>
        </div>
      </div>
      <div
        className={css.nextButton}
        onClick={() => setState(state => ({ ...state, formSide: "email" }))}
      ></div>
    </div>
  )
}
