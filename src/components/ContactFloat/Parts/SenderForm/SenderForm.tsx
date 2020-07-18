import * as React from "react"
import { State } from "../../types"
import css from "./SenderForm.module.css"
import { stateContext } from "react-three-fiber"

type SenderProps = {
  setState: any
  name: string
  phone: string
  company: string
  email: string
}
export const SenderForm = ({
  name,
  phone,
  company,
  email,
  setState,
}: SenderProps) => {
  return (
    <div className={css.senderWrapper}>
      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Name</label>
        </div>
        <div className={css.inputWrapper}>
          <input
            type="text"
            value={name}
            onChange={({ target: { value } }) =>
              setState(state => ({ ...state, name: value }))
            }
          />
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}></div>
        </div>
      </div>

      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Company</label>
        </div>
        <div className={css.inputWrapper}>
          <input
            type="text"
            placeholder="(Optional)"
            value={company}
            onChange={({ target: { value } }) =>
              setState(state => ({ ...state, company: value }))
            }
          />
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
          <input
            type="text"
            value={email}
            onChange={({ target: { value } }) =>
              setState(state => ({ ...state, email: value }))
            }
          />
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
          <input
            type="text"
            value={phone}
            onChange={({ target: { value } }) =>
              setState(state => ({ ...state, phone: value }))
            }
          />
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}></div>
        </div>
      </div>
      <div
        className={css.nextButton}
        onClick={() => setState(state => ({ ...state, formSide: "email" }))}
      >
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 178 322"
          enableBackground="new 0 0 178 322"
        >
          <path
            fill="#3e768e"
            d="M17,319.5c-3.7,0-7.4-1.4-10.3-4.2c-5.7-5.7-5.7-14.8,0-20.5L140.5,161L6.7,27.3c-5.7-5.7-5.7-14.8,0-20.5
		c5.7-5.7,14.8-5.7,20.5,0l144,144c5.7,5.7,5.7,14.8,0,20.5l-144,144C24.4,318.1,20.7,319.5,17,319.5z"
          />
        </svg>
      </div>
    </div>
  )
}
