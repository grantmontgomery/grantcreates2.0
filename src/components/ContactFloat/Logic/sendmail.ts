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

export default function sendMail({
  name,
  phone,
  company,
  email,
  subject,
  message,
}: FormFields) {
  
    return postmail(name, phone, company, email, subject, message)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  
}

// export default
