import * as React from "react"
import { EmailForm, SenderForm, SendStatus, Pointer, MailIcon } from "./Parts"
import { sendMail } from "./Logic"
import {
  correctPhoneFormat,
  correctEmailFormat,
} from "./Parts/SenderForm/Logic"
import { FormFields, FormErrors, FormState } from "./types"
import css from "./ContactFloat.module.css"

export const ContactFloat: React.FC = () => {
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
    phoneFormat: "us",
  })

  const [errors, setErrors] = React.useState<FormErrors>({
    nameError: { error: false, message: "" },
    phoneError: { error: false, message: "" },
    emailError: { error: false, message: "" },
    subjectError: { error: false, message: "" },
    messageError: { error: false, message: "" },
  })

  const checkFields = () => {
    const { name, phone, email, subject, message } = fields
    if (
      name !== "" &&
      phone !== "" &&
      email !== "" &&
      subject !== "" &&
      message !== ""
    ) {
      if (
        correctPhoneFormat(phone, state.phoneFormat) &&
        correctEmailFormat(email)
      ) {
        return sendMail(fields)
      } else {
        if (!correctPhoneFormat(phone, state.phoneFormat)) {
          return setErrors(errors => ({
            ...errors,
            phoneError: { error: true, message: "Check phone formatting." },
          }))
        } else if (!correctEmailFormat(email)) {
          return setErrors(errors => ({
            ...errors,
            emailError: { error: true, message: "Check email formatting." },
          }))
        }
      }
    } else {
      const fieldKeys = Object.keys(fields)
      const errorKeys = Object.keys(errors)

      return fieldKeys.forEach(field => {
        if (fields[field] === "") {
          errorKeys.forEach(error => {
            if (error.includes(field)) {
              let errorStart = "Please enter in"
              switch (field) {
                case "name":
                  return setErrors(errors => ({
                    ...errors,
                    [error]: {
                      error: true,
                      message: `${errorStart} a name.`,
                    },
                  }))
                case "phone":
                  return setErrors(errors => ({
                    ...errors,
                    [error]: {
                      error: true,
                      message: `${errorStart} a phone number.`,
                    },
                  }))
                case "email":
                  return setErrors(errors => ({
                    ...errors,
                    [error]: {
                      error: true,
                      message: `${errorStart} an email.`,
                    },
                  }))
                case "subject":
                  return setErrors(errors => ({
                    ...errors,
                    [error]: {
                      error: true,
                      message: `${errorStart} a subject.`,
                    },
                  }))
                case "message":
                  return setErrors(errors => ({
                    ...errors,
                    [error]: {
                      error: true,
                      message: `${errorStart} a message.`,
                    },
                  }))
              }
            }
          })
        }
      })
    }
  }

  const slideForm = (formside: string) => {
    switch (formside) {
      case "sender":
        return "0"
      case "email":
        return "calc(-100%/3)"
      case "status":
        return "calc(-200%/3)"
    }
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
                transform: `translate(${slideForm(state.formSide)})`,
              }}
            >
              <SenderForm
                name={fields.name}
                phone={fields.phone}
                email={fields.email}
                company={fields.company}
                next={state.next}
                setFields={setFields}
                setState={setState}
                phoneFormat={state.phoneFormat}
                setErrors={setErrors}
                nameError={errors.nameError}
                phoneError={errors.phoneError}
                emailError={errors.emailError}
              ></SenderForm>
              <EmailForm
                setState={setState}
                fields={fields}
                setFields={setFields}
                message={fields.message}
                subject={fields.subject}
                subjectError={errors.subjectError}
                messageError={errors.messageError}
                sendMail={sendMail}
                checkFields={checkFields}
                errors={errors}
                setErrors={setErrors}
              ></EmailForm>
              <SendStatus></SendStatus>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <MailIcon setState={setState}></MailIcon>
      )}
    </div>
  )
}
