import { State } from "../types"
import fetch from "node-fetch"

function sendmail({ name, phone, company, email, subject, message }: State) {
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

// export default
