import { FormFields } from "../types"

export const checkFields = (
  sendMail: any,
  { name, company, phone, subject, email, message }: FormFields,
  setErrors: any
) => {
  if (
    name !== "" &&
    phone !== "" &&
    email !== "" &&
    subject !== "" &&
    message !== ""
  ) {
    return sendMail({ name, company, phone, email, subject, message })
  } else {
    if (name !== "") {
      setErrors(errors => ({
        ...errors,
        nameError: { error: true, message: "Please enter in a name." },
      }))
    } else if (phone !== "") {
      setErrors(errors => ({
        ...errors,
        phoneError: { error: true, message: "Please enter in a phone number." },
      }))
    } else if (email !== "") {
      setErrors(errors => ({
        ...errors,
        emailError: { error: true, message: "Please enter in an email." },
      }))
    } else if (subject !== "") {
      setErrors(errors => ({
        ...errors,
        subjectError: { error: true, message: "Please enter in a subject." },
      }))
    } else if (message !== "") {
      setErrors(errors => ({
        ...errors,
        messageError: { error: true, message: "Please enter in a message." },
      }))
    }
  }
}
