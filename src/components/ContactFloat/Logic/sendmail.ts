import { FormFields, Form } from "../types"
import fetch from "node-fetch"

async function postmail(
  name: string,
  phone: string,
  company: string,
  email: string,
  subject: string,
  message: string
) {
  return fetch("http://localhost:5000/send", {
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

export default function sendMail(
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
