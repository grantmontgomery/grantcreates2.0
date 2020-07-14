import * as React from "react"
import css from "./ContactFloat.module.css"

interface State {
  tapped: boolean
  name: string
  subject: string
  email: string
}
export const ContactFloat = () => {
  const [state, setState] = React.useState<State>({
    tapped: false,
    name: "",
    subject: "",
    email: "",
  })

  return (
    <div
      className={`${css.contactWrapper} ${state.tapped ? css.extended : null}`}
      onClick={() =>
        state.tapped
          ? setState(state => ({ ...state, tapped: false }))
          : setState(state => ({ ...state, tapped: true }))
      }
    >
      {() =>
        state.tapped ? (
          <div className={css.formWrapper}>
            <div className={css.nameWrapper}></div>
            <div className={css.emailWrapper}></div>
            <div className={css.subjectWrapper}></div>
            <div className={css.textWrapper}></div>
          </div>
        ) : null
      }
    </div>
  )
}
