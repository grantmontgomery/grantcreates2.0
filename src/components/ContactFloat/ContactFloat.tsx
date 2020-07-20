import * as React from "react"
import { EmailForm, SenderForm, Pointer, MailIcon } from "./Parts"
import { sendmail } from "./Logic"
import { FormFields, FormErrors, FormState } from "./types"
import css from "./ContactFloat.module.css"

export const ContactFloat = () => {
  const [fields, setFields] = React.useState<FormFields>({
    name: "",
    subject: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [state, setState] = React.useState<FormState>({
    tapped: false,
    next: false,
    formSide: "sender",
  })

  const [errors, setErrors] = React.useState<FormErrors>({
    nameError: { error: false, message: "" },
    companyError: { error: false, message: "" },
    phoneError: { error: false, message: "" },
    emailError: { error: false, message: "" },
    subjectError: { error: false, message: "" },
    messageError: { error: false, message: "" },
  })

  // function submit(state: State) {
  //   setState({
  //     tapped: false,
  //     name: "",
  //     subject: "",
  //     email: "",
  //     phone: "",
  //     company: "",
  //     message: "",
  //     next: false,
  //     formSide: "sender",
  //   })
  //   sendmail(state)
  // }

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
                name={fields.name}
                phone={fields.phone}
                email={fields.email}
                company={fields.company}
                setFields={setFields}
                setState={setState}
              ></SenderForm>
              <EmailForm
                setState={setState}
                submit={submit}
                state={state}
                setFields={setFields}
                message={fields.message}
                subject={fields.subject}
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
