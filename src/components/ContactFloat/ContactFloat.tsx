import * as React from "react"
import css from "./ContactFloat.module.css"

interface State {
  tapped: boolean
  name: string
  company: string
  phone: string
  subject: string
  email: string
}
export const ContactFloat = () => {
  const [state, setState] = React.useState<State>({
    tapped: false,
    name: "",
    subject: "",
    email: "",
    phone: "",
    company: "",
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
      {state.tapped ? (
        <React.Fragment>
          <form className={css.formWrapper}>
            <div className={css.xWrapper}>
              <div className={css.x}>X</div>
            </div>
            <div className={css.nameWrapper}>
              <input
                type="text"
                placeholder="Name"
                value={state.name}
                onChange={({ target: { value } }) =>
                  setState(state => ({ ...state, name: value }))
                }
              />
            </div>
            <div className={css.companyWrapper}>
              <input
                type="text"
                placeholder="Company"
                value={state.company}
                onChange={({ target: { value } }) =>
                  setState(state => ({ ...state, company: value }))
                }
              />
            </div>
            <div className={css.emailWrapper}>
              <input type="text" placeholder="Email" />
            </div>
            <div className={css.phoneWrapper}></div>
            <div className={css.subjectWrapper}></div>
            <div className={css.textWrapper}>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </form>
        </React.Fragment>
      ) : (
        <div className={css.iconWrapper}></div>
      )}
    </div>
  )
}
