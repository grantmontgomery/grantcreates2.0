export interface FormFields {
  name: string
  company: string
  phone: string
  subject: string
  email: string
  message: string
}

export interface FormState {
  tapped: boolean
  phoneFormat: string
  formSide: string
  mailStatus: string
}

export interface FormErrors {
  nameError: { error: boolean; message: string }
  phoneError: { error: boolean; message: string }
  emailError: { error: boolean; message: string }
  subjectError: { error: boolean; message: string }
  messageError: { error: boolean; message: string }
}
