import * as React from "react"
import { EmailForm, SenderForm } from "./Parts"
import css from "./ContactFloat.module.css"

interface State {
  tapped: boolean
  name: string
  company: string
  phone: string
  subject: string
  email: string
  next: boolean
  formSide: string
}
export const ContactFloat = () => {
  const [state, setState] = React.useState<State>({
    tapped: false,
    name: "",
    subject: "",
    email: "",
    phone: "",
    company: "",
    next: false,
    formSide: "sender",
  })

  return (
    <div
      className={`${css.contactWrapper} ${state.tapped ? css.extended : null}`}
    >
      {state.tapped ? (
        <React.Fragment>
          <div className={css.headerWrapper}>
            <div className={css.titleWrapper}>Write Me</div>
            <div className={css.pointerWrapper}></div>
            <div className={css.xWrapper}>
              <div
                className={css.x}
                onClick={() => setState(state => ({ ...state, tapped: false }))}
              >
                X
              </div>
            </div>
          </div>

          <div className={css.formWrapper}>
            <div
              className={css.innerForm}
              style={{
                transform: `translate(${
                  state.formSide === "sender" ? "0" : "-50%"
                })`,
              }}
            >
              <SenderForm setState={setState}></SenderForm>
              <EmailForm setState={setState}></EmailForm>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div
          className={css.iconWrapper}
          onClick={() => setState(state => ({ ...state, tapped: true }))}
        ></div>
      )}
    </div>
  )
}
