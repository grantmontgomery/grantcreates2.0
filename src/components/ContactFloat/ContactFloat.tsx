import * as React from "react"
import { EmailForm, SenderForm, Pointer, MailIcon } from "./Parts"
import { sendmail } from "./Logic"
import { State } from "./types"
import css from "./ContactFloat.module.css"

// interface State {
//   tapped: boolean
//   name: string
//   company: string
//   phone: string
//   subject: string
//   email: string
//   next: boolean
//   formSide: string
// }
export const ContactFloat = () => {
  const [state, setState] = React.useState<State>({
    tapped: false,
    name: "",
    subject: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    next: false,
    formSide: "sender",
  })

  function submit(state: State) {
    setState({
      tapped: false,
      name: "",
      subject: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      next: false,
      formSide: "sender",
    })
    sendmail(state)
  }

  return (
    <div
      className={`${css.contactWrapper} ${state.tapped ? css.extended : null}`}
    >
      {state.tapped ? (
        <React.Fragment>
          <div className={css.headerWrapper}>
            <div className={css.titleWrapper}>Write Me</div>
            <Pointer formSide={state.formSide}></Pointer>
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
              <SenderForm
                name={state.name}
                phone={state.phone}
                email={state.email}
                company={state.company}
                setState={setState}
              ></SenderForm>
              <EmailForm
                submit={submit}
                state={state}
                setState={setState}
                message={state.message}
                subject={state.subject}
              ></EmailForm>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <MailIcon setState={setState}></MailIcon>
      )}
    </div>
  )
}
