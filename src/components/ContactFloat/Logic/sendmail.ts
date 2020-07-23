import { FormFields } from "../types"
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
  }, 500)
  setTimeout(() => {
    return setState(state => ({
      ...state,
      formSide: "email",
      mailStatus: "not sent",
    }))
  }, 2500)
}

const handleSendSuccess = (accepted: number, setState: any, setFields: any) => {
  if (accepted > 0) {
    setTimeout(() => {
      console.log("sucessStarted")
      return setState(state => ({ ...state, mailStatus: "delivered" }))
    }, 500)
    setTimeout(() => {
      console.log("success ended")
      return (
        setState({
          tapped: false,
          formSide: "sender",
          phoneFormat: "us",
          mailStatus: "not sent",
        }),
        setFields({
          name: "",
          subject: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      )
    }, 2500)
  } else {
    return handleSendFail(setState)
  }
}

export default function sendMail(
  { name, phone, company, email, subject, message }: FormFields,
  setState: any,
  setFields: any
) {
  return postmail(name, phone, company, email, subject, message)
    .then(response => response.json())
    .then(message =>
      handleSendSuccess(message.accepted.length, setState, setFields)
    )
    .catch(() => handleSendFail(setState))
}
