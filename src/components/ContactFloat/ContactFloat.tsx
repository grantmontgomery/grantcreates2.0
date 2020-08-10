import * as React from "react"
import { EmailForm, SenderForm, SendStatus, Pointer, MailIcon } from "./Parts"
// import { sendMail } from "./Logic"
import {
  correctPhoneFormat,
  correctEmailFormat,
} from "./Parts/SenderForm/Logic"
import { FormFields, FormErrors, FormState } from "./types"
import { useModalDispatch, useModalState } from "../../state/ModalGlobal"
import { modalActions } from "../../state/actions"

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
    formSide: "sender",
    phoneFormat: "us",
    mailStatus: "not sent",
  })

  const [errors, setErrors] = React.useState<FormErrors>({
    nameError: { error: false, message: "" },
    phoneError: { error: false, message: "" },
    emailError: { error: false, message: "" },
    subjectError: { error: false, message: "" },
    messageError: { error: false, message: "" },
  })

  const modalDispatch = useModalDispatch()
  const {
    windows: { contactFloat, navLinks },
  } = useModalState()

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
        setState(state => ({
          ...state,
          mailStatus: "sent",
          formSide: "status",
        }))
        return sendMail(fields, handleExit, setState, setFields)
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
        return "-50%"
      case "status":
        return "0"
    }
  }

  const handleExit = () => {
    const body: HTMLBodyElement | null = document.querySelector("body")
    if (body) {
      body.style.overflowY = "scroll"
    }
    return modalDispatch(modalActions("CLOSE"))
  }

  const handleTap = () => {
    const body: HTMLBodyElement | null = document.querySelector("body")
    if (body) {
      body.style.overflowY = "hidden"
    }
    return modalDispatch(modalActions("CONTACT_FLOAT"))
  }

  async function postmail(
    name: string,
    phone: string,
    company: string,
    email: string,
    subject: string,
    message: string
  ) {
    return fetch("https://grantcreates.netlify.app/send", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name,
        company,
        phone,
        email,
        subject,
        message,
      }),
    })
  }

  const handleSendFail = (setState: any) => {
    setTimeout(() => {
      return setState(state => ({ ...state, mailStatus: "failed" }))
    }, 2000)
    setTimeout(() => {
      return setState(state => ({
        ...state,
        formSide: "email",
        mailStatus: "not sent",
      }))
    }, 4000)
  }

  const handleSendSuccess = (
    accepted: number,
    setState: any,
    handleExit: () => void,
    setFields: any
  ) => {
    if (accepted > 0) {
      setTimeout(() => {
        console.log("sucessStarted")
        return setState(state => ({ ...state, mailStatus: "delivered" }))
      }, 2000)
      setTimeout(() => {
        console.log("success ended")
        return (
          setState({
            tapped: false,
            formSide: "sender",
            phoneFormat: "us",
            mailStatus: "not sent",
          }),
          handleExit(),
          setFields({
            name: "",
            subject: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          })
        )
      }, 4000)
    } else {
      return handleSendFail(setState)
    }
  }

  function sendMail(
    { name, phone, company, email, subject, message }: FormFields,
    handleExit: () => void,
    setState: any,
    setFields: any
  ) {
    return postmail(name, phone, company, email, subject, message)
      .then(response => response.json())
      .then(message =>
        handleSendSuccess(
          message.accepted.length,
          setState,
          handleExit,
          setFields
        )
      )
      .catch(() => handleSendFail(setState))
  }

  return (
    <div
      className={`${css.contactWrapper} ${contactFloat ? css.extended : null}`}
    >
      {contactFloat ? (
        <React.Fragment>
          <div className={css.headerWrapper}>
            <div className={css.titleWrapper}>Hire Me</div>
            <Pointer
              mailStatus={state.mailStatus}
              formSide={state.formSide}
            ></Pointer>
            <button className={css.x} onClick={handleExit}>
              X
            </button>
          </div>

          <div className={css.formWrapper}>
            <div
              className={`${css.innerForm} ${
                state.formSide !== "status" ? null : css.statusSide
              }`}
              style={{
                transform: `translate(${slideForm(state.formSide)})`,
              }}
            >
              {state.formSide !== "status" ? (
                <React.Fragment>
                  <SenderForm
                    name={fields.name}
                    phone={fields.phone}
                    email={fields.email}
                    company={fields.company}
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
                    formSide={state.formSide}
                    subject={fields.subject}
                    subjectError={errors.subjectError}
                    messageError={errors.messageError}
                    sendMail={sendMail}
                    checkFields={checkFields}
                    errors={errors}
                    setErrors={setErrors}
                  ></EmailForm>
                </React.Fragment>
              ) : (
                <SendStatus mailStatus={state.mailStatus}></SendStatus>
              )}
            </div>
          </div>
        </React.Fragment>
      ) : (
        <MailIcon handleTap={handleTap}></MailIcon>
      )}
    </div>
  )
}
