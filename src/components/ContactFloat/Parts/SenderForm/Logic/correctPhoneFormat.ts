import { string } from "prop-types"

export function correctPhoneFormat(phone: string, phoneFormat: string) {
  switch (phoneFormat) {
    case "us":
      return phone.includes(")") ||
        phone.length === 15 ||
        phone.search(/[a-z]/i) === -1
        ? true
        : false
    case "eu":
      return phone.includes("+") ||
        phone.length === 15 ||
        phone.search(/[a-z]/i) === -1
        ? true
        : false
  }
}
