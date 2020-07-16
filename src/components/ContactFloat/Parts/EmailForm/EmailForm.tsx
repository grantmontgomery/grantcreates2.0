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
          <div className={css.error}></div>
        </div>
      </div>
      <div
        className={css.backWrapper}
        onClick={() => setState(state => ({ ...state, formSide: "sender" }))}
      >
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 178 322"
          enableBackground="new 0 0 178 322"
        >
          <path
            fill="white"
            d="M17,319.5c-3.7,0-7.4-1.4-10.3-4.2c-5.7-5.7-5.7-14.8,0-20.5L140.5,161L6.7,27.3c-5.7-5.7-5.7-14.8,0-20.5
		c5.7-5.7,14.8-5.7,20.5,0l144,144c5.7,5.7,5.7,14.8,0,20.5l-144,144C24.4,318.1,20.7,319.5,17,319.5z"
          />
        </svg>
      </div>
      <div className={css.sendWrapper}></div>
    </div>
  )
}
