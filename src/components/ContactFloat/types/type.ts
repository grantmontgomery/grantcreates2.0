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
  next: boolean
  formSide: string
}

export interface FormErrors {
  nameError: { error: boolean; message: string }
  companyError: { error: boolean; message: string }
  phoneError: { error: boolean; message: string }
  emailError: { error: boolean; message: string }
  subjectError: { error: boolean; message: string }
  messageError: { error: boolean; message: string }
}
